<template>
  <div class="banner">
  <div v-if="poster!=''" class="portrait">
    <a :href="poster" target="_blank">
    <img :src="speakerImage">
    </a>
  </div>
  <div class="content">
    <div class="title">{{title}}</div>
    <div class="meetinfo">
      <i class="el-icon-date fixspace"></i>
      <time class="time fixspace">{{date}}</time>
      <time class="time fixspace">{{ timeBegin }}</time>
      <i class="el-icon-right fixspace"></i>
      <time class="time fixspace">{{ timeEnd }}</time>
    </div>
    <div class="meetinfo">
      <i class="el-icon-map-location fixspace"></i>
      <span class="fixspace">{{ location }}</span>
      <span class="fixspace">{{speaker}}</span>
    </div>
    <div class="abstract">
        <div class="detaillink">
         {{abstract}}
        </div>
        <div class="download fixspace">
          <i class="el-icon-link fixspace"></i> pdf: <span v-if="pdfLink==''">wait to upload</span>
          <a v-else :href="pdfLink" target="_blank">download</a>
        </div>
        <div class="download fixspace">
          <i class="el-icon-link fixspace"></i>video: <span v-if="videoLink==''">wait to upload</span>
          <a v-else :href="videoLink" target="_blank">download</a>
        </div>
    </div>
  </div>
  </div>
</template>

<script>
export default {
  name: 'Banner',
  props: {
    date: String,
    timeBegin: String,
    timeEnd: String,
    id: Number,
    title: String,
    speakerImage: String,
    speaker: String,
    abstract: String,
    room: String,
    videoLink: String,
    pdfLink: String,
    poster: String
  },
  data: function() {
    return {
      location: "Tsinghua University"
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
.current{
    border: 1px solid rgb(12, 218, 91);
}
.time {
  font-size: 13px;
  color: #999;
}
.banner{
  width: 100%;
  background:#046e66;
  padding-top: 20px;
  display: flex;
  vertical-align: center;
  margin-top: 20px;
}
.portrait{
  height: 300px;
  margin-left: 20px;
  margin-bottom: 10px;
}
.abstract{
  margin-left: 10px;
}
img{
  height: 300px;
}
.title{
  font-size: 20pt;
  color: #f9f9f9;
  font-weight: normal;
  margin-top: 10px;
  margin-bottom: 10px;
  text-align: center;

}
.fixspace{
  /*margin-top: 10px;*/
  margin-bottom:10px;
  padding-left: 5px;
  padding-right: 5px;
  font-size: 13pt;
  color: #010911;
}
.detaillink{
  padding-left: 10px;
  padding-right: 10px;
  text-align: left;
  font-size: 13pt;
  font-weight: normal;
  color: #fff;
  max-height: 110px;
  overflow: hidden;
  text-overflow: ellipsis;
}
.download{
  text-align: left;
}
.meetinfo{
  text-align: left;
  margin-left: 20px;
  max-height: 30px;
  overflow: hidden;
}
.content{
  flex-grow: 1;
}
</style>
