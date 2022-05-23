<template>
    <el-container class="containerbody">
      <el-aside width="auto">
      <Meeting></Meeting>
      </el-aside>
      <el-main>
        <el-breadcrumb separator-class="el-icon-arrow-right">
          <el-breadcrumb-item :to="{ path: '/' }">Home</el-breadcrumb-item>
          <el-breadcrumb-item :to="{ path: '/conference/list' }">ConferenceFiles</el-breadcrumb-item>
          <el-breadcrumb-item :to="{ path: '/conference/detail' }">Detail</el-breadcrumb-item>
        </el-breadcrumb>
          <Poster v-for="mi in meetinfo" :key="mi.id"  :title="mi.title" :id="mi.id"
           :speaker="mi.author" :posterId="mi.posterId" :abstractId="mi.abstractId" :abstract="mi.abstract" :pdfLink="mi.filename"></Poster>
      </el-main>
    </el-container>
</template>

<script>
import Meeting from '../Aside'
import Poster from './Poster'
export default {
  name: 'Meetdetail',
  components: {
      Poster,
      Meeting
  },
  props:{
    id: String
  },
  data: function() {
    return {
      meetinfo: [
          {
            title: "Testing Seesaw Models: From mesons and Colliders",
            id: 1,
            speaker: "Tao Han",
            abstract: "",
            pdfLink: ""
          }
      ]
    }
  },
  created: function() {
    this.$axios.get('/tuhepApi/poster/poster.json')
      .then(response => {
        console.log(response)
        this.meetinfo = response.data[this.id]
      })
  }
}
</script>
<style scoped>
.el-aside{
  overflow: unset;
}
</style>
