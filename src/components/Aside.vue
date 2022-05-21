<template>
  <div class="meeting">
  <button @click="collapseStatus" style="width:100%;">
    <i v-if="isCollapse" class="el-icon-d-arrow-left"></i>
    <i v-else class="el-icon-d-arrow-right"></i>
  </button>
      <el-menu
	:collapse="isCollapse" 
          default-active="$route.path"
          router="true"
          mode="vertical"
          class="aside-menu"
          background-color="#d3dce6"
          >
          <el-menu-item index="/meet/list">
            <router-link class="seminarMenu" to='/meet/list'>
              <i class="el-icon-menu"></i>
              <span class="menuTitle">Seminar INFO</span>
            </router-link>
          </el-menu-item>
          <el-menu-item index="/conference/list">
            <router-link class="seminarMenu" to='/conference/list'>
              <i class="el-icon-menu"></i>
              <span class="menuTitle">Conference Files</span>
            </router-link>
          </el-menu-item>
          <el-menu-item index="3">
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
      isCollapse: false
    }
  },
  mounted(){
    window.onresize = () => {
      return this.isCollapse = document.body.clientWidth<600;
    }
  },
  methods: {
    jump: function(val) {
      console.log(val)
      this.$router.push({path: val})
    },
    collapseStatus: function() {
      this.isCollapse = !this.isCollapse
    }
  }
}
</script>
<style scoped>
.meeting{
  /*height: 1000px;*/
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
