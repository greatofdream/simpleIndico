<template>
  <div class="login">
    <img :src="imgSrc" width="100%" height="100%" alt="" />
    <div class="loginPart">
      <h2>Login</h2>
      <el-form>
        <div>
        <el-button type="primary" @click="login()">Login(OAuth)</el-button>
        </div>
      </el-form>
    </div>
  </div>
</template>
<script>
import { defineComponent } from '@vue/composition-api'

export default({
  name: 'welcome',
  data: function(){
    return {

    }
  },
  methods: {
    login: () => {
      // avoid hard code
      const route = router.resolve({ name: 'officialCheck', query: { token: 'TOKEN' } })
      window.location.href =
        'https://student.tsinghua.edu.cn/api/user/session/token?redirect_uri=' +
        encodeURIComponent(`${location.origin}${route.href}`)
  },
    
  },
})
</script>

<style lang="scss" scoped>
.loginPart{
    position:absolute;
    /*定位方式绝对定位absolute*/
    top:50%;
    left:50%;
    /*顶和高同时设置50%实现的是同时水平垂直居中效果*/
    transform:translate(-50%,-50%);
    /*实现块元素百分比下居中*/
    width:450px;
    padding:50px;
    background: rgba(0,0,0,.5);
    /*背景颜色为黑色，透明度为0.8*/
    box-sizing:border-box;
    /*box-sizing设置盒子模型的解析模式为怪异盒模型，
    将border和padding划归到width范围内*/
    box-shadow: 0px 15px 25px rgba(0,0,0,.5);
    /*边框阴影  水平阴影0 垂直阴影15px 模糊25px 颜色黑色透明度0.5*/
    border-radius:15px;
    /*边框圆角，四个角均为15px*/
  }
  .login{
    width:100%;
    height:100%;
  }

</style>