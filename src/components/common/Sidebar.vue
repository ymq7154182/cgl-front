<template>
  <div>
    <!--<div style="background-color: #3467A5;height: 50px">-->
      <!--<div class="headtext" >-->
        <!--海量文情大数据的知识图谱构建与智能服务平台-->
      <!--</div>-->
      <!--&lt;!&ndash;<transition name="bounce">&ndash;&gt;-->
        <!--&lt;!&ndash;&ndash;&gt;-->
      <!--&lt;!&ndash;</transition>&ndash;&gt;-->


    <!--</div>-->
    <div class="home_fornt">
      <div class="shouye flex-item item1" style="cursor: pointer">
        <a style="margin-left: 20px"  @click="goBackHome">首页</a>
      </div>
      <div class="zstp flex-item item">
        <el-dropdown :hide-on-click="false" @command="handleCommand" style="cursor: pointer">
           <span class="fs28">
              知识图谱
            </span>

          <el-dropdown-menu slot="dropdown" style="background-color: #4F77AF;">
            <el-dropdown-item command="GoldPic">垂直图谱</el-dropdown-item>
            <el-dropdown-item command="CorrelationPic">领域知识库</el-dropdown-item>
            <!--<el-dropdown-item command="LiteraryRecommand" ><a href="http://58.119.112.13:11009/static/index.html#/login" style="color: white">领域图谱</a></el-dropdown-item>-->
          </el-dropdown-menu>
        </el-dropdown>
      </div>
      <div class="flex-item item">
        <el-dropdown :hide-on-click="false" @command="handleCommand" style="cursor: pointer">
            <span class="fs28">
              精准检索
            </span>
          <el-dropdown-menu slot="dropdown" style="background-color: #4F77AF;" >
            <el-dropdown-item command="RelationSearch">智慧推荐</el-dropdown-item>
            <!--<el-dropdown-item command="RuleSearch">规则检索</el-dropdown-item>-->
            <!--<el-dropdown-item command="PicSearch">图谱检索</el-dropdown-item>-->
            <!--<el-dropdown-item command="HotPredict">热点预测</el-dropdown-item>-->
          </el-dropdown-menu>
        </el-dropdown>
      </div>
      <div class="flex-item item">
        <el-dropdown :hide-on-click="false" @command="handleCommand" style="cursor: pointer">
            <span class="fs28" @click="QA">
              智能问答
            </span>
          <!--<el-dropdown-menu slot="dropdown" style="background-color: #4F77AF;">-->
            <!--&lt;!&ndash;<el-dropdown-item command="RetrievalQA">检索式问答</el-dropdown-item>&ndash;&gt;-->
            <!--&lt;!&ndash;<el-dropdown-item command="ProduceQA">生成式问答</el-dropdown-item>&ndash;&gt;-->
            <!--&lt;!&ndash;<el-dropdown-item command="MixtureQA">混合式问答</el-dropdown-item>&ndash;&gt;-->
          <!--</el-dropdown-menu>-->
        </el-dropdown>
      </div>
      <div class="flex-item item">
        <el-dropdown :hide-on-click="false" @command="handleCommand" style="cursor: pointer">
            <span class="fs28">
              热点预测
            </span>
          <el-dropdown-menu slot="dropdown" style="background-color: #4F77AF;">
            <!--<el-dropdown-item command="FeatureKnowledge">特征知识库</el-dropdown-item>-->
            <!--<el-dropdown-item command="CorrelationKnowledge">关联知识库</el-dropdown-item>-->
          </el-dropdown-menu>
        </el-dropdown>
      </div>
      <div class="flex-item item">
        <el-dropdown :hide-on-click="false" @command="handleCommand" style="cursor: pointer">
            <span class="fs28" @click="gotoAI">
              智能工具
            </span>
          <el-dropdown-menu slot="dropdown" style="background-color: #4F77AF;">
            <el-dropdown-item command="SmartCrawler">数据爬虫</el-dropdown-item>
            <el-dropdown-item command="DataClear">数据清洗</el-dropdown-item>
            <el-dropdown-item command="text">文本分类</el-dropdown-item>
            <el-dropdown-item command="ChineseParticiple">中文分词</el-dropdown-item>
            <el-dropdown-item command="info">用户图谱</el-dropdown-item>
            <el-dropdown-item command="DownloadPart">数据集</el-dropdown-item>
            <el-dropdown-item command="Projectbace">工程库</el-dropdown-item>
            <el-dropdown-item command="Bace">算法库</el-dropdown-item>
          </el-dropdown-menu>
        </el-dropdown>
      </div>
      <!--<img src="../../assets/img/wzlogo.png" style="width: 600px;position: absolute;top: 250px;left: 100px">-->


    </div>


    <!--<canvas id="Mycanvas" style="width: 100%;position: absolute;top: 500px"></canvas>-->
  </div>
</template>

<script>

    export default {
      inject: ['reload'],
      data: function () {
        return {
          show: false
        }
      },
      components: {

      },
      mounted() {
        this.show=true

      },
      methods: {
        handleCommand(command) {
          var url = ''
          this.$router.push({
            path: `/${command}`,
            query: {
            }
          })
          if (command === 'CorrelationPic') {
            url = 'http://114.242.223.253:8080/SSMLibrary/gold64.jsp'
            window.open(url, '_blank')
            this.goBackHome()
          }
          if (command === 'GoldPic') {
            url = 'http://114.242.223.253:8080/SSMLibrary/connection.jsp'
            window.open(url, '_blank')
            this.goBackHome()
          }
          if (command === 'info') {
            url = 'http://114.242.223.253:8080/SSMLibrary/literatureupload.jsp'
            window.open(url, '_blank')
            this.goBackHome()
          }
          if (command === 'ChineseParticiple') {
            const {href} = this.$router.resolve({
              path: `/${command}`
            })
            // this.$router.push({
            //   path: `/${command}`,
            //   query: {
            //   }
            // })
            // url = 'http://114.242.223.253:8080/SSMLibrary/literatureupload.jsp'
            window.open(href, '_blank')
            this.goBackHome()
          }
          if (command === 'SmartCrawler') {
            var urls = 'http://58.119.112.15:11010'
            window.open(urls, '_bank')
            this.goBackHome()
          }
          if (command === 'DataClear') {
            const {href} = this.$router.resolve({
              path: `/DataClear`
            })
            window.open(href, '_bank')
            this.goBackHome()
          }
          if (command === 'ChineseParticiple') {
            const {href} = this.$router.resolve({
              path: `/ChineseParticiple`
            })
            window.open(href, '_bank')
            this.goBackHome()
          }

        },
        goBackHome(){
          this.$router.push("/HomePage")
          this.reload()
        },
        gotoAI () {
          // this.$router.push('/AIuilt')
          const {href} = this.$router.resolve({
            path: `/AIuilt`
          })
          window.open(href, '_blank')
        },
        QA () {
          var url = 'http://58.119.112.11:11004/chatbot'
          window.open(url, '_blank')
        }
      }
    }
</script>

<style scoped>

  .home_fornt {
    display: flex;
    flex-direction: row;
    flex-wrap: nowrap;
    align-items: flex-start;
    width: 100%;
    height: 100px;
    background-size: 100% 100%;
    background-color: #3467A5;
    /*background-image: url("../../assets/img/bgImg.png");*/
    font-size: 24px;
    color: white;
    letter-spacing: 5px;


  }

  .home_3{
    height: 387px;
    background-color: #4F77AF;
  }
  .headtext{
    margin: 0 auto;width: 600px;line-height: 50px;font-size: 28px;color: #dea726;
    /*margin-left: 40px;*/
  }
  /*.headtext:hover{*/
    /*color: #dea726;*/
  /*}*/
  .bounce-enter-active {
    animation: bounce-in 1s;
  }
  .bounce-leave-active {
    animation: bounce-in 1s reverse;
  }
  @keyframes bounce-in {
    0% {
      transform: scale(0);
    }
    50% {
      transform: scale(1.5);
    }
    100% {
      transform: scale(1);
    }
  }

  .item1 {
    margin-left: 115px;
  }
  .item {
    margin-left: 60px;
  }
  .flex-item {
    margin-top: 50px;
  }
  .wzlogo {

  }
  .fs28 {
    font-size: 22px;
    letter-spacing: 8px;
    color: white;
  }
  .fs28:hover{
    color: red;
  }
  .shouye:hover{
    color: red;
  }
  .ff {
    height: 50px;
  }
  .ff:hover{
    background-color: grey;
  }

  .el-dropdown-menu {
    color: white !important;
    border-radius: 4px;
    min-height: 36px;
    overflow: auto;
  }
  .el-dropdown-menu__item {
    list-style: none;
    line-height: 36px;

    font-family: 'SimHei';
    font-weight: bold;
    font-size: 20px ;
    letter-spacing: 0px ;
    color: white;
    cursor: pointer;
    outline: 0;
  }

</style>
