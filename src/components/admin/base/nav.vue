<template>
  <div class="sidebar-container">
    <el-menu default-active="2" class="sidebar">
      <el-menu-item index="1" @click="jump('hepProfile')">
        <i class="el-icon-info"></i>
        <span slot="title">个人信息</span>
      </el-menu-item>
      <el-submenu index="2" v-if="ManagePermission">
        <template slot="title">
          <i class="el-icon-tickets"></i>
          <span>文章管理</span>
        </template>
        <el-menu-item index="2-1" @click="jump('hepThesis')">学位论文</el-menu-item>
        <el-menu-item index="2-2" @click="jump('hepJournal')">期刊文章</el-menu-item>
      </el-submenu>
      <el-submenu index="3" v-if="ManagePermission">
        <template slot="title">
          <i class="el-icon-menu"></i>
          <span>用户管理</span>
        </template>
        <el-menu-item index="3-1" @click="jump('hepUser')">用户列表</el-menu-item>
      </el-submenu>
      <el-submenu index="4" v-if="ManagePermission">
        <template slot="title">
          <i class="el-icon-edit-outline"></i>
          <span>会议管理</span>
        </template>
        <!-- FIXME: missing route -->
        <el-menu-item index="4-1" @click="jump('hepMeeting')">主办会议列表</el-menu-item>
        <el-menu-item index="4-2" @click="jump('hepSeminar')">参与会议列表</el-menu-item>
      </el-submenu>
      <el-submenu index="5" v-if="ManagePermission">
        <template slot="title">
          <i class="el-icon-setting"></i>
          <span>资讯管理</span>
        </template>
        <el-menu-item index="5-1" @click="jump('hepNews')">新闻管理</el-menu-item>
        <el-menu-item index="5-2" @click="jump('hepLink')">链接管理</el-menu-item>
        <el-menu-item index="5-3" @click="jump('hepHighlight')">高光管理</el-menu-item>
        <el-menu-item index="5-4" @click="jump('hepPicture')">轮播图管理</el-menu-item>
      </el-submenu>
    </el-menu>
  </div>
</template>

<script>
// import actions from '@/store/actions'
// import store from '@/store/store'

export default {
  name: 'sidebar',
  props: ['type'],
  data: function() {
    return {
      expandNews: false,
      expandSingle: false
    }
  },
  computed: {
    ManagePermission: function() {
    //   let permissions = ['Administrator', 'Office Manager']
    //   return permissions.indexOf(store.state.user.info.permission) != -1
        return true
    }
  },
  created: function() {
    // actions.getFilters()
  },
  methods: {
    jump: function(val) {
      console.log(val)
      this.$router.push({ name: val })
    }
  }
}
</script>

<style lang="scss">
.sidebar-container {
  height: 100%;
}
.sidebar {
  /*background: rgba(108, 37, 169, 0.7);*/
  /*color: #ffffff;*/
  overflow-y: scroll;
  /*padding-bottom: 60px;*/
  height: 100%;
}
.sidebar-container {
  overflow: -moz-hidden-unscrollable;
  height: 100%;
}

.sidebar::-webkit-scrollbar {
  display: none;
}

.sidebar {
  -ms-overflow-style: none;
  height: 100%;
  overflow: auto;
}
</style>
