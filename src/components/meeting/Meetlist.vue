<template>
  <el-container class="containerbody">
      <el-aside width="auto">
      <Meeting></Meeting>
      </el-aside>
      <el-main>
          <el-breadcrumb separator-class="el-icon-arrow-right">
            <el-breadcrumb-item :to="{ path: '/' }">Home</el-breadcrumb-item>
            <el-breadcrumb-item :to="{ path: '/meet/list' }">SeminarInfo</el-breadcrumb-item>
          </el-breadcrumb>
          <Banner class="banner" v-for="mi in meetinfo" :key="mi.id" :dateBegin="mi.dateBegin" :dateEnd="mi.dateEnd" :title="mi.title" :id="mi.id"></Banner>
      </el-main>
  </el-container>
</template>

<script>
import Meeting from '../Aside'
import Banner from './Banner'

export default {
  name: 'Meetlist',
  components: {
      Meeting,
      Banner
  },
  data: function() {
    return {
      meetinfo: [
          { title: '2020 Seminar Series on Lepton Flavor Violation and New Physics', dateBegin: '2020-9-16', dateEnd: '2020-9-26', id: 0, priority:0}
      ]
    }
  },
  created: function() {
    this.$axios.get('/tuhepApi/meeting/config.json')
      .then(response => {
        console.log(response)
        this.meetinfo = response.data.meetinfo.sort(function(a,b){return a.priority-b.priority})
      })
  }
}
</script>
<style scoped>
.el-main {
  text-align: center;
}
.containerbody{
  width: 100%;
}
.el-container {
  margin-bottom: 40px;
}
.el-aside{
  overflow: unset;
}
.banner{
  margin: 10px;
}
</style>
