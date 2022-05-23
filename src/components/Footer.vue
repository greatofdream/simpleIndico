<template>
  <div class="footer">
    <div class="logowrap">
    <div class="contactInfo text-white ">
      <div class="text-uppercase">联系方式 Contact</div>
      北京市 海淀区 清华大学 高能物理研究中心，100084 <br>
      Center for High Energy Physics,  Tsinghua University,  Beijing 100084, China<br>
      Phone: (86)10-62796961 &nbsp;&nbsp;&nbsp; Fax: (86) 10-62792296 &nbsp;&nbsp;&nbsp;
       E-mail: <a href="mailto:hep@mail.tsinghua.edu.cn">hep@mail.tsinghua.edu.cn</a>
    </div>
    <div class="siteInfo text-white">
        <h6 class="text-uppercase">校内站点 Related Sites in School</h6>
        <ul class="list-unstyled">
          <li>
            <a href="https://www.tsinghua.edu.cn/" target="_blank">清华大学 Tsinghua University</a>
          </li>
          <li>
            <a href="http://www.phys.tsinghua.edu.cn/" target="_blank">清华大学物理系 Department of Physics</a>
          </li>
          <li>
            <a href="http://www.ep.tsinghua.edu.cn/" target="_blank">清华大学工程物理系 Department of Engineering Physics</a>
          </li>
        </ul>
                
    </div>
    </div>
    <div class="footer-copyright text-white">
      © 2020 Copyright: Center for High Energy Physics, Tsinghua University. All rights reserved.
    </div>
  </div>
</template>
<script>
export default {
  name: 'Footer'
}
</script>
<style scoped>
.footer{
  text-align: center;
  background-color: #4f7e71;
  font-size: small;
}
.logowrap{
  width: 80%;
  margin: auto;
  display: flex;
  flex-wrap: wrap;
  padding-top: 1.5rem;
}
.contactInfo{
  width: 60%;
  text-align: left;
}
.siteInfo{
  width: 40%;
  text-align: left;
}
.text-white {
  color: #fff !important;
}
.text-uppercase {
  font-size: 1rem;
  text-transform: uppercase !important;
  margin-top: 0.5rem;
  margin-bottom: 0.5rem;
}
a {
  color: #78C2AD;
  text-decoration: none;
  background-color: transparent;
}
.list-unstyled {
  padding-left: 0;
  list-style: none;
}
.footer-copyright{
  padding-top: 1rem;
  padding-bottom: 1rem;
}
</style>