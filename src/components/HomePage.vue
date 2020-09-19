<template>
  <div class="homepage">
    <el-container style="height: 1000px;">
      <el-header>
        <el-menu
          :default-active="activeHeadIndex"
          class="head-menu"
          mode="horizontal"
          background-color="#78C2AD"
          text-color="#fff"
          active-text-color="#000">
          <el-menu-item index="1"><router-link to='/meet/list' class="navbutton">Meeting Info</router-link></el-menu-item>
          <el-menu-item index="2"><a href="http://hep.tsinghua.edu.cn/about.html" class="navbutton">About TUHEP</a></el-menu-item>
          <el-menu-item index="3"><a href="http://hep.tsinghua.edu.cn/committee.html" class="navbutton">Committee</a></el-menu-item>
          <el-menu-item index="4"><a href="http://hep.tsinghua.edu.cn/committee.html" class="navbutton">Member</a></el-menu-item>
          <el-menu-item index="5"><a href="http://hep.tsinghua.edu.cn/research.html" class="navbutton">Research</a></el-menu-item>
          <el-menu-item index="6"><a href="http://hep.tsinghua.edu.cn/empolyment.html" class="navbutton">Employment</a></el-menu-item>
          <el-menu-item index="7"><a href="http://hep.tsinghua.edu.cn/" class="navbutton">Publication</a></el-menu-item>
          <el-menu-item index="8"><a href="http://hep.tsinghua.edu.cn/" class="navbutton">Thesis</a></el-menu-item>
          <el-menu-item index="9"><a href="http://hep.tsinghua.edu.cn/" class="navbutton">File Download</a></el-menu-item>
          <el-menu-item index="10"><a href="http://hep.tsinghua.edu.cn/" class="navbutton">Training</a></el-menu-item>
        </el-menu>
      </el-header>
      <el-container class="containerbody">
        <router-view/>
      </el-container>
    </el-container>
  </div>
</template>

<script>
export default {
  name: 'HomePage',
  data: function() {
    return {
      activeHeadIndex: "1",
    }
  },
  methods: {
    
  }
}
</script>
<style scoped>
.containerbody{
  height: 1000px;
  background-color: #fff;
}
.navbutton{
  text-decoration: none;
  font-size: 1rem;
  font-weight: 400;
  line-height: 1.5;
}
</style>