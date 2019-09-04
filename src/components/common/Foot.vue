<template>
  <div class="foot">
    <el-row style="height: 100px">
      <el-col :span="4">
        <img src="../../../static/img/wzlogo.png" class="img">
      </el-col>
      <el-col :span="2">
        <div class="Line"></div>
      </el-col>
      <el-col :span="4" class="col">
        <span><i class="ymq-iconhome"></i> 关于我们</span>
      </el-col>
      <el-col :span="4" class="col">
        <span><i class="ymq-iconwindows"></i> 产品服务</span>
      </el-col>
      <el-col :span="4" class="col">
        <span><i class="el-icon-setting"></i> 开发者中心</span>
      </el-col>
      <el-col :span="3" class="col">
        <span><i class="el-icon-phone-outline"></i> 联系我们</span>

      </el-col>
      <el-col :span="1" class="col" style="margin-left: 50px;margin-top: 14px">
        <img src="../../assets/img/erweima.jpg" class="img2">
        <!--<img src="../../../static/img/erweima.jpg" class="img2">-->
      </el-col>
    </el-row>



  </div>
</template>

<script>
    export default {
        name: "Foot.vue"
    }
</script>

<style scoped>
  .foot{
    width: 100%;
    height: 100px;
    background-color: #356DA6;
  }
  .img{
    width: 150px;
    margin-top: 30px;
    margin-left: 125px;
  }
  .Line{
    float: left;
    width: 0.1em;
    height: 3em;
    margin-left: 70px;
    background: #9FC1E4;
    margin-top: 25px}
  .col{
    margin-top: 40px;
    color: #9FC1E4;
    letter-spacing: 8px;

  }
  .img2{
    width: 75px;
  }

</style>
