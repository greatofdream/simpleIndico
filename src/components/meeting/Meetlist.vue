<template>
  <el-container class="containerbody">
      <el-aside width="200px" height="1000px">
      <Meeting></Meeting>
      </el-aside>
      <el-main>
          <Banner v-for="mi in meetinfo" :key="mi.id" :dateBegin="mi.dateBegin" :dateEnd="mi.dateEnd" :title="mi.title" :id="mi.id"></Banner>
      </el-main>
  </el-container>
</template>

<script>
import Meeting from './Meeting'
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
          { title: '2020 Seminar Series on Lepton Flavor Violation and New Physics', dateBegin: '2020-9-16', dateEnd: '2020-9-26', id: 0}
      ]
    }
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
</style>