<template>
  <div class="banner">
    <div class="title">{{title}}</div>
    <div class="meetinfo">
      <i class="el-icon-date fixspace"></i>
      <time class="time fixspace">{{ dateBegin }}</time>
      <i class="el-icon-right fixspace"></i>
      <time class="time fixspace">{{ dateEnd }}</time>
    </div>
    <div class="meetinfo">
      <i class="el-icon-map-location fixspace"></i>
      <span class="fixspace">{{ location }}</span>
    </div>
    <div class="bottom clearfix">
        <div class="detaillink">
          <el-button type="text" class="button" @click="jump('/meet/detail/'+id)">Detail</el-button>
        </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Banner',
  props: {
    dateBegin: Date,
    dateEnd: Date,
    id: Number,
    title: String
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
  background:#1a63a0;
  padding-top: 20px;
}
.title{
  font-size: 20pt;
  color: #f9f9f9;
  font-weight: normal;
  margin-top: 10px;
  margin-bottom: 10px;
}
.fixspace{
  padding-left: 5px;
  padding-right: 5px;
  font-size: 10pt;
}
.detaillink{
  padding-left: 10px;
  padding-right: 10px;
  text-align: right;
  font-size: 20pt;
  font-weight: normal;
  color: #fff;
}
.meetinfo{
  text-align: left;
  margin-left: 20px;
}
</style>