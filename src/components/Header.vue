<template>
  <div class="header">
    <div class="logowrap">
    <div class="logo-container">
      <img src="../assets/tuhep.png" alt="tuhep logo" width="80%">
      <div class="logotext"> Center for High Energy Physics, Tsinghua University</div>
    </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'Header'
}
</script>
<style scoped>
.header{
  background-color: #4f7e71;
}
.logo-container{
  height: 100%;
  margin-top: 20px;
  margin-bottom: 20px;
}
.logowrap{
  display: flex;
}
.logotext{
  color: #fff !important;
  font-size: 1.75rem;
}
</style>