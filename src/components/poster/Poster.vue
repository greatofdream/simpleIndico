<template>
  <el-card class="banner">
      <div slot="header" class="clearfix"><a :href="pdfLink" target="_blank" style=" text-decoration: none;">
          <span class="title">{{title}}</span></a>
      </div>
  <div class="content">
    <div class="meetinfo">
      <i class="el-icon-user fixspace"></i>
      <span class="fixspace">{{speaker}}</span>
    </div>
    <div class="abstract">
        <div class="detaillink">
         {{abstract}}
        </div>
    </div>
  </div>
  </el-card>
</template>

<script>
export default {
  name: 'Poster',
  props: {
    id: Number,
    title: String,
    speaker: String,
    abstract: String,
    pdfLink: String,
  },
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
  vertical-align: center;
  margin-top: 20px;
}
.clearfix:before,
  .clearfix:after {
    display: table;
    content: "";
  }
  .clearfix:after {
    clear: both
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

</style>
