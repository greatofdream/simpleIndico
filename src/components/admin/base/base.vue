<template>
  <el-container ref="container" style="height: 100%;">
    <el-header class="header">
      <myheader></myheader>
    </el-header>
    <el-container ref="container" style="height: calc(100% - 60px);">
      <el-aside :width="width">
        <sidebar :type="type"></sidebar>
      </el-aside>
      <el-main>
        <router-view />
      </el-main>
    </el-container>
  </el-container>
</template>

<script>
import sidebar from '@/components/admin/base/nav'
import myheader from '@/components/admin/base/header'

export default {
  name: 'admin-base',
  components: {
    sidebar,
    myheader
  },
  data: function() {
    return {
      type: 'admin',
      width: '300px'
    }
  },
  mounted: function() {
    if (this.$refs.container.$el.offsetWidth < 1300) {
      this.width = '200px'
    }
  }
}
</script>

<style scoped>
.header {
  background: #60199d;
  color: #ffffff;
}
.base-container {
  height: 100%;
  width: 100%;
}
.nav {
  height: 100%;
  width: 15%;
  display: inline-block;
  float: left;
}
.main-content {
  height: 100%;
  display: inline-block;
  /*width: 80%;*/
  width: 85%;
  background: #f7f7f7;
  padding: 20px;
  padding-bottom: 80px;
}
</style>
