<template>
  <div class="meeting" style="background-color: #78C2AD">
      <el-menu
          default-active="1"
          class="aside-menu">
          <el-menu-item index="1">
            <router-link to='/meet/list'>
              <i class="el-icon-menu"></i>
              <span>Meeting List</span>
            </router-link>
          </el-menu-item>
          <el-menu-item index="2">
            <router-link to='/meet/list'>
              <i class="el-icon-document"></i>
              <span>Meeting Notify</span>
            </router-link>  
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
}
</style>