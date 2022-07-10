<template>
    <el-container class="containerbody">
      <el-aside width="auto">
      <Meeting></Meeting>
      </el-aside>
      <el-main>
        <el-breadcrumb separator-class="el-icon-arrow-right">
          <el-breadcrumb-item :to="{ path: '/seminar/' }">Home</el-breadcrumb-item>
          <el-breadcrumb-item :to="{ path: '/seminar/meet/list' }">SeminarInfo</el-breadcrumb-item>
          <el-breadcrumb-item :to="{ path: '/seminar/meet/detail' }">Detail</el-breadcrumb-item>
        </el-breadcrumb>
          <Speach v-for="mi in meetinfo" :key="mi.id" :poster="mi.poster" :date="mi.date" :timeBegin="mi.timeBegin" :timeEnd="mi.timeEnd" :title="mi.title" :id="mi.id"
           :speaker="mi.speaker" :speakerImage="mi.speakerImage" :abstract="mi.abstract" :room="mi.room" :pdfLink="mi.pdfLink" :videoLink="mi.videoLink"></Speach>
      </el-main>
    </el-container>
</template>

<script>
import Meeting from '../Aside'
import Speach from './Speach'
export default {
  name: 'Meetdetail',
  components: {
      Speach,
      Meeting
  },
  props:{
    id: String
  },
  data: function() {
    return {
      meetinfo: [
          {
            title: 'Search for Neutrinoless Double Beta Decay at SNO+', date: '2020-9-16', timeBegin: '9:30', timeEnd: '11:00', id: 0,
            speakerImage: "http://hep.tsinghua.edu.cn/highlights/0vbb.png",
            poster: "http://hep.tsinghua.edu.cn/fileRepo/2020seminar/0/DBD-SNO+.docx",
            speaker: "Mark Chen",
            abstract: "Brief introduction to double beta decay, SNO+ and double beta decay in SNO+. Data taking in SNO+, including water phase and scintillator filling. The upcoming pure scintillator phase and Te-loading for neutrinoless double beta decay.",
            room: "zoom ID: 6212198453",
            videoLink: "http://hep.tsinghua.edu.cn/highlights/MarkChen.mp4",
            pdfLink: "http://hep.tsinghua.edu.cn/highlights/SNO+%20DBD%20Tsinghua%20small.pdf"
          },
          {
            title: "Testing Seesaw Models: From mesons and Colliders",
            date: '2020-9-23',
            timeBegin: '9:00',
            timeEnd: '',
            id: 1,
            speakerImage: "http://hep.tsinghua.edu.cn/fileRepo/2020seminar/1/DBD-HanTao.jpg",
            poster: "http://hep.tsinghua.edu.cn/fileRepo/2020seminar/1/中微子研讨会通知-DBD-HanTao.pdf",
            speaker: "Tao Han",
            abstract: "",
            room: "zoom ID: 6212198453",
            videoLink: "",
            pdfLink: ""
          }
      ]
    }
  },
  created: function() {
    this.$axios.get('/tuhepApi/meeting/talk.json')
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
