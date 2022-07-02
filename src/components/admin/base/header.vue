<template>
  <div class="header-container">
    <el-row class="header-row">
      <el-col :span="12" class="header-title">
        <span @click="toIndex">高能物理中心空间</span>
      </el-col>
      <el-col :span="4">
        <div class="invisible">invisible</div>
      </el-col>
      <el-col :span="8">
        <div v-if="login" class="header-info">
          <div class="header-name" @click="toHome">欢迎，{{ userInfo.name }}</div>
          <div class="header-btn" @click="logout">登出</div>
        </div>
        <div v-if="!login" class="header-info">
          <div class="header-btn" @click="loginAction">登录</div>
        </div>
      </el-col>
    </el-row>
    <!--  <div class="header-title">校友会管理后台</div> -->
  </div>
</template>

<script>
// import actions from '@/store/actions'
import store from '@/store/store'
// import mutations from '@/store/mutation-types'

export default {
  name: 'myheader',
  data: function() {
    return {}
  },
  computed: {
    userInfo() {
      return store.state.user.info
    },
    login() {
      return !this.userInfo.name == ''
    }
  },
  mounted: function() {
    // if (this.userInfo.name == '') {
    //   this.$http
    //     .get('/api/admin/account/administrators/self')
    //     .then(rsp => {
    //       let data = {}
    //       if (rsp.userRole) {
    //         data.name = rsp.name
    //         data.card = rsp.id
    //         data.department = rsp.department
    //         data.permission = rsp.userRole.role.name
    //       } else {
    //         data.name = rsp.name
    //         data.card = rsp.id
    //         data.department = rsp.department
    //         data.permission = null
    //       }
    //       store.commit(mutations.user.USER_SET_INFO, data)
    //     })
    //     .catch(err => {
    //       console.log(err)
    //     })
    // }
  },
  methods: {
    logout: function() {
      // this.$http.put('/api/admin/logout').then(rsp => {
      //   actions.clear()
      //   this.$router.push('/')
      // })
      window.href = '/logout'
    },
    loginAction: function() {
    //   actions.login()
    },
    toIndex: function() {
      this.$router.push({ name: 'admin-base' })
    },
    toHome: function() {
      this.$router.push({ name: 'admin-base' })
    }
  }
}
</script>

<style lang="scss" scoped>
.invisible {
  visibility: hidden;
}
.header-container {
  height: 100%;
  .header-row {
    height: 100%;
    .header-title {
      font-size: 25px;
      font-weight: bolder;
      line-height: 60px;
      padding-left: 5%;
      user-select: none;
      cursor: pointer;
    }
    .header-btn {
      font-weight: bolder;
      font-size: 15px;
      line-height: 60px;
      user-select: none;
      cursor: pointer;
      float: right;
      padding-left: 30px;
      padding-right: 30px;
    }
    .header-name {
      font-weight: bolder;
      font-size: 18px;
    }
  }
  .header-info {
    div {
      display: inline-block;
      height: 60px;
      line-height: 60px;
      user-select: none;
      cursor: pointer;
    }
  }
}
.btn {
  color: #ffffff;
}
</style>
