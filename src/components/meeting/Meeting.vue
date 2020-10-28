<template>
  <div class="meeting">
      <el-menu
          default-active="1"
          mode="vertical"
          class="aside-menu"
          background-color="#996699"
          text-color="#990066"
          active-text-color="#ffffff">
          <el-menu-item index="1">
            <router-link class="seminarMenu" to='/meet/list'>
              <i class="el-icon-menu"></i>
              <span class="menuTitle">Seminar INFO</span>
            </router-link>
          </el-menu-item>
          <el-menu-item index="2">
            <a class="seminarMenu" href="http://hep.tsinghua.edu.cn/indico">
              <i class="el-icon-document"></i>
              <span class="menuTitle">INDICO</span>
            </a>  
          </el-menu-item>
      </el-menu>
  </div>
</template>

<script>
export default {
  name: 'Meeting',
  data: function() {
    return {
      
    }
  },
  methods: {
    jump: function(val) {
      console.log(val)
      this.$router.push({path: val})
    }
  }
}
</script>
<style scoped>
.meeting{
  height: 1000px;
  margin-top: 20px;
  font-size: 12pt;
}
.seminarMenu{
  text-decoration: none;
  display: flex;
  width: 100%;
  height: 100%;
  font-size: large;
  align-items: center;
  justify-content: space-between;
  color: unset;
}
.menuTitle{
  justify-content: center;
  flex-grow: 1;
}
</style>