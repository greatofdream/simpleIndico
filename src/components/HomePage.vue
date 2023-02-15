<template>
  <div class="homepage">
    <el-container>
      <el-header height="auto" class="container">
        <el-menu
          :default-active="activeHeadIndex"
          class="head-menu"
          mode="horizontal"
          background-color="#78C2AD"
          text-color="#fff"
          active-text-color="#000">
          <el-menu-item class="item" index="1"><a href="http://hep.tsinghua.edu.cn/" class="navbutton">主页<br/>Home</a></el-menu-item>
          <el-menu-item class="item" index="2"><a href="http://hep.tsinghua.edu.cn/about.html" class="navbutton">中心简介<br/>About</a></el-menu-item>
          <el-menu-item class="item" index="3"><a href="http://hep.tsinghua.edu.cn/committee.html" class="navbutton">学术委员会<br/>Committee</a></el-menu-item>
          <el-menu-item class="item" index="4"><a href="http://hep.tsinghua.edu.cn/committee.html" class="navbutton">中心成员<br/>Member</a></el-menu-item>
          <el-menu-item class="item" index="5"><a href="http://hep.tsinghua.edu.cn/research.html" class="navbutton">研究方向<br/>Research</a></el-menu-item>
          <el-menu-item class="item" index="6"><a href="http://hep.tsinghua.edu.cn/empolyment.html" class="navbutton">招聘信息<br/>Employment</a></el-menu-item>
          <el-menu-item class="item" index="7"><a href="http://hep.tsinghua.edu.cn/" class="navbutton">发表<br/>Publication</a></el-menu-item>
          <el-menu-item class="item" index="8"><a href="http://hep.tsinghua.edu.cn/thesis.html" class="navbutton">论文<br/>Thesis</a></el-menu-item>
          <el-menu-item class="item" index="9"><a href="http://hep.tsinghua.edu.cn/" class="navbutton">文件下载<br/>File Download</a></el-menu-item>
          <el-menu-item class="item" index="10"><a href="http://hep.tsinghua.edu.cn/training.html" class="navbutton">学术训练<br/>Training</a></el-menu-item>
          <el-menu-item class="item" index="11"><router-link to='/meet/list' class="navbutton">会议记录<br/>Meeting Info</router-link></el-menu-item>
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
      activeHeadIndex: "11",
      navinfo: [
        {href:'hep.tsinghua.edu.cn', text: '主页/brHome'},
        {href:'hep.tsinghua.edu.cn', text: '主页/brHome'},
        {href:'hep.tsinghua.edu.cn', text: '主页/brHome'},
        {href:'hep.tsinghua.edu.cn', text: '主页/brHome'},
        {href:'hep.tsinghua.edu.cn', text: '主页/brHome'},
        {href:'hep.tsinghua.edu.cn', text: '主页/brHome'},
        {href:'hep.tsinghua.edu.cn', text: '主页/brHome'},
        {href:'hep.tsinghua.edu.cn', text: '主页/brHome'},
        {href:'hep.tsinghua.edu.cn', text: '主页/brHome'},
        {href:'hep.tsinghua.edu.cn', text: '主页/brHome'},
      ]
    }
  },
  methods: {
    
  }
}
</script>
<style scoped>
@import '../styles/media.css';
.containerbody{
  /*height: 1000px;*/
  background-color: #fff;
}
.el-menu-item{
  padding-left: 0 !important;
  padding-right: 0 !important;
}
.navbutton{
  text-decoration: none;
  font-size: 1rem;
  font-weight: 400;
  line-height: 1.5;
  padding-top: 0.5rem;
  padding-bottom: 0.5rem;
  padding-left: 0.5rem;
  padding-right: 0.5rem;
  display: block;
}
.item{
  flex-basis: 0;
  flex-grow: 1;
}
.head-menu{
  display: flex;
  justify-content: center;
  list-style: none;
  padding: 0.5rem 1rem;
  flex-wrap: wrap;
}
</style>
