<template>
  <div>
    <div class="detail-container">
      <div class="tab-title">学位论文列表</div>
      <el-row class="btn-container">
        <el-col :span="3" class="info">
          过滤条件
        </el-col>
        <el-col :xs="4" :sm="4" :md="4" :lg="4" :xl="4" class="filter">
          <el-input placeholder="姓名" prefix-icon="el-icon-search" v-model="filter.name" clearable> </el-input>
        </el-col>
        <el-col :span="9" style="text-align: center;">
          <el-button type="warning" @click="initFilter">清除</el-button>
          <el-button type="success" @click="getAllAdminUsers(1)">过滤</el-button>
          <el-button type="success" @click="newAdminPre()">新增</el-button>
        </el-col>
      </el-row>
      <el-table :data="admins" border stripe style="width: 100%" v-loading="loading">
        <el-table-column prop="hidden" label="hidden?" fixed align="center" width="100"></el-table-column>
        <el-table-column prop="ChineseName" label="ChineseName" fixed align="center" width="140"></el-table-column>
        <el-table-column prop="EnglishName" label="EnglishName" fixed align="center" width="140"></el-table-column>
        <el-table-column prop="ChineseTitle" label="ChineseTitle" align="center" width="400"></el-table-column>
        <el-table-column prop="EnglishTitle" label="EnglishTitle" align="center" width="400"></el-table-column>
        <el-table-column label="操作" fixed="right" align="center" width="250">
          <template slot-scope="scope">
            <el-button size="mini" class="mini-btn" type="warning" @click="changeItem(scope.row)">Modify</el-button>
            <el-button size="mini" class="mini-btn" type="danger" @click="deleteItem(scope.row.id)">Delete</el-button>
          </template>
        </el-table-column>
      </el-table>
      <el-pagination
        @current-change="pageChange"
        :current-page.sync="page.page"
        :page-size="page.size"
        layout="total, prev, pager, next"
        :total="page.amounts"
        class="pagination"
      >
      </el-pagination>
    </div>
    <el-dialog title="Add" :visible.sync="dialogNew" width="50%">
      <span>
        <el-form
          :model="newAdmin"
          label-width="150px"
          label-position="left"
          style="font-weight: bolder;margin-left: 10%;margin-right: 10%;"
        >
          <el-form-item label="hidden">
            <el-input v-model="newAdmin.hidden"></el-input>
          </el-form-item>
          <el-form-item label="ChineseName">
            <el-input v-model="newAdmin.ChineseName" ></el-input>
          </el-form-item>
          <el-form-item label="EnglishName">
            <el-input v-model="newAdmin.EnglishName"></el-input>
          </el-form-item>
          <el-form-item label="ChineseTitle">
            <el-input v-model="newAdmin.ChineseTitle"></el-input>
          </el-form-item>
          <el-form-item label="EnglishTitle">
            <el-input v-model="newAdmin.EnglishTitle"></el-input>
          </el-form-item>
          <el-form-item label="Date">
              <el-date-picker
                v-model="newAdmin.Date"
                align="center"
              >
              </el-date-picker>
          </el-form-item>
          <el-form-item>
            <el-button type="primary" @click="newAdmin()">ADD</el-button>
          </el-form-item>
        </el-form>
      </span>
      <span slot="footer" class="dialog-footer">
        <el-button type="primary" @click="dialogNew = false">CLOSE</el-button>
      </span>
    </el-dialog>
    <el-dialog title="Modify" :visible.sync="dialogUpdateAdmin" width="50%">
      <span>
        <el-form
          :model="updateAdmin"
          label-width="150px"
          label-position="left"
          style="font-weight: bolder;margin-left: 10%;margin-right: 10%;"
        >
          <el-form-item label="hidden">
            <el-input v-model="updateAdmin.hidden"></el-input>
          </el-form-item>
          <el-form-item label="ChineseName">
            <el-input v-model="updateAdmin.ChineseName" ></el-input>
          </el-form-item>
          <el-form-item label="EnglishName">
            <el-input v-model="updateAdmin.EnglishName"></el-input>
          </el-form-item>
          <el-form-item label="ChineseTitle">
            <el-input v-model="updateAdmin.ChineseTitle"></el-input>
          </el-form-item>
          <el-form-item label="EnglishTitle">
            <el-input v-model="updateAdmin.EnglishTitle"></el-input>
          </el-form-item>
          <el-form-item label="Date">
              <el-date-picker
                v-model="updateAdmin.Date"
                align="center"
              >
              </el-date-picker>
          </el-form-item>
          <el-form-item>
            <el-button type="primary" @click="updateAdminUser()">MODIFY</el-button>
          </el-form-item>
        </el-form>
      </span>
      <span slot="footer" class="dialog-footer">
        <el-button type="primary" @click="dialogUpdateAdmin = false">CLOSE</el-button>
      </span>
    </el-dialog>
  </div>
</template>

<script>
// import actions from '@/store/actions'
import constInfo from '@/components/admin/base/const'

export default {
  name: 'manage-admin',
  data: function() {
    return {
      admins: [],
      departments: [],
      roles: [],
      dialogNew: false,
      dialogUpdateAdmin: false,
      loading: false,
      newAdmin: {},
      updateAdmin: {},
      page: {
        page: 1,
        amounts: 0,
        size: 10
      },
      filter: {}
    }
  },
  computed: {
    adminRoles: function() {
      return constInfo.adminRoles
    }
  },
  created: function() {
    this.initFilter()
    this.getAllDepartments()
    this.getAllRoles()
    this.getAllAdminUsers(1)
    // this.getAllAdminUserIds()
  },
  methods: {
    getAllRoles: function() {
      this.roles = []
      this.$http
        .get('/api/admin/account/roles')
        .then(rsp => {
          for (let i = 0; i < rsp.length; i++) {
            this.roles.push({
              id: rsp[i].id,
              name: this.adminRoles[rsp[i].name]
            })
          }
        })
        .catch(err => {
          this.$message.error('获取数据错误！')
          console.log(err)
        })
    },
    initFilter: function() {
      this.filter = {
        name: '',
      }
    },
    getAllAdminUsers: function(page = -1) {
      this.loading = true
      if (page == -1) {
        page = this.page.page
      }
    //   let param = {
    //     name: this.filter.name,
    //     student_id: '',
    //     role_id: this.filter.role_id ? this.filter.role_id : 0,
    //     department_id: this.filter.department_id ? this.filter.department_id : 0,
    //     page: page,
    //     limit: this.page.size
    //   }
      this.admins = []
      let skip = (page - 1) * this.page.size
      let top = this.page.size
      let querystr = '?skip=' + skip + '&top=' + top
      if (this.filter.name) {
        querystr = querystr + '&name=' + this.filter.name
      }

      this.$http
        .get('/hepApi/thesis' + querystr)
        .then(rsp => {
          this.page.page = parseInt(parseInt(rsp.skip) / this.page.size + 1)
          this.page.amounts = rsp.count
          // this.admins = rsp.users
          rsp.users = rsp.value
          for (let i = 0; i < rsp.users.length; i++) {
            this.admins.push({
              id: rsp.users[i].id,
              ChineseName: rsp.users[i].ChineseName,
              EnglishName: rsp.users[i].EnglishName,
              ChineseTitle: rsp.users[i].ChineseTitle,
              EnglishTitle: rsp.users[i].EnglishTitle,
              hidden: rsp.users[i].hidden
            })
          }
          this.loading = false
        })
        .catch(err => {
          console.log(err)
          this.loading = false
        })
    },
    pageChange: function(msg) {
      this.getAllAdminUserIds(msg)
    },
    newAdminPre: function() {
      this.newAdmin = {
        student_id: '',
        department: null,
        role: null,
        note: ''
      }
      this.dialogNew = true
    },
    updateUserPermission: function(id) {
      this.$confirm('确认要调管理员启用状态吗', '确认信息', {
        confirmButtonText: '确定',
        cancelButtonText: '取消'
      })
        .then(({ value }) => {
          this.$http
            .put('/api/admin/account/administrators/' + id + '/toggle')
            .then(rsp => {
              this.$message.success('操作成功')
              this.getAllAdminUsers()
            })
            .catch(err => {
              this.$message.error('出现错误')
              console.log(err)
            })
        })
        .catch(() => {
          // do nothing
        })
    },
    newAdminUser: function() {
      if (this.newAdmin.student_id.length != 10) {
        this.$message.error('需要填写正确的学号')
        return
      }
      if (!this.newAdmin.department) {
        this.$message.error('需要选择一个正确的一级部门')
        return
      }
      if (!this.newAdmin.role) {
        this.$message.error('需要选择一个正确的角色')
        return
      }
      this.$confirm('确认要增加该管理员吗', '确认信息', {
        confirmButtonText: '确定',
        cancelButtonText: '取消'
      })
        .then(({ value }) => {
          let params = {
            card: this.newAdmin.student_id,
            departmentId: this.newAdmin.department,
            roleId: this.newAdmin.role,
            note: this.newAdmin.note
          }
          this.$http
            .post('/api/admin/account/administrators', params)
            .then(rsp => {
              this.$message.success('操作成功')
              this.getAllAdminUsers()
              this.dialogNew = false
            })
            .catch(err => {
              this.$message.error('出现错误')
              console.log(err)
            })
        })
        .catch(() => {
          // do nothing
        })
    },
    deleteAdminUser: function(id) {
      this.$confirm('确认要删除该管理员吗', '确认信息', {
        confirmButtonText: '确定',
        cancelButtonText: '取消'
      })
        .then(({ value }) => {
          this.$http
            .delete('/api/admin/account/administrators/' + id)
            .then(rsp => {
              this.$message.success('操作成功')
              this.getAllAdminUsers()
            })
            .catch(err => {
              this.$message.error('出现错误')
              console.log(err)
            })
        })
        .catch(() => {
          // do nothing
        })
    },
    updateAdminUser: function() {
      if (!this.updateAdmin.department) {
        this.$message.error('需要选择一个正确的一级部门')
        return
      }
      if (!this.updateAdmin.role) {
        this.$message.error('需要选择一个正确的角色')
        return
      }
      this.$confirm('确认要修改该管理员吗', '确认信息', {
        confirmButtonText: '确定',
        cancelButtonText: '取消'
      })
        .then(({ value }) => {
          let params = {
            // id: this.updateAdmin.id,
            departmentId: this.updateAdmin.department,
            roleId: this.updateAdmin.role,
            note: this.updateAdmin.note
          }
          this.$http
            .put('/api/admin/account/administrators/' + this.updateAdmin.id, params)
            .then(rsp => {
              this.$message.success('操作成功')
              this.getAllAdminUsers()
              this.dialogUpdateAdmin = false
            })
            .catch(err => {
              this.$message.error('出现错误')
              console.log(err)
            })
        })
        .catch(() => {
          // do nothing
        })
    },
    changeAdmin: function(row) {
      this.updateAdmin = {
        id: row.id,
        student_id: row.student_id,
        department: row.departmentP_id,
        role: row.role_id,
        note: row.note
      }
      this.dialogUpdateAdmin = true
    }
  }
}
</script>

<style lang="scss" scoped></style>
