<template>
  <div>
    <div class="shortcut">
      <!--<div style="float: left">-->
      <!--<img src="../../assets/334.jpg" height="80">-->
      <!--<div>融合大数据与教育AI服务平台</div>-->
      <!--</div>-->
      <div class="fl">
        <img src="../../assets/img/99999.jpg" height="70" style="margin-left: 40px;margin-top: 10px">
      </div>
      <ul class="fr">
        <li @click="gotopachong"><a href="#">数据爬虫</a></li>
        <li @click="gotoData"><a href="#">数据清洗</a></li>
        <li><a href="#">文本分类</a></li>
        <li @click="gotoChineseParticiple"><a href="#">中文分词</a></li>
        <li><a href="#">用户文献图谱</a></li>
        <li><a href="#">数据集</a></li>
        <li><a href="#">工程库</a></li>
        <li><a href="#">算法库</a></li>
        <!--<li>-->
          <!--&lt;!&ndash;<el-button type="primary" round class="buttonlogin" @click="login" v-if="flag">登录</el-button>&ndash;&gt;-->
          <!--&lt;!&ndash;<el-avatar :size="50" :src="circleUrl" v-if="flag===0" style="margin-top: 10px"></el-avatar>&ndash;&gt;-->
          <!--&lt;!&ndash;<div v-if="flag===0" style="float: right;margin-left: 20px;">&ndash;&gt;-->
            <!--&lt;!&ndash;<el-dropdown  trigger="click" @command="handleCommand" style="height: 50px">&ndash;&gt;-->
               <!--&lt;!&ndash;<span class="el-dropdown-link">&ndash;&gt;-->
                 <!--&lt;!&ndash;{{username}}<i class="el-icon-arrow-down el-icon&#45;&#45;right"></i>&ndash;&gt;-->
               <!--&lt;!&ndash;</span>&ndash;&gt;-->
              <!--&lt;!&ndash;<el-dropdown-menu slot="dropdown">&ndash;&gt;-->
                <!--&lt;!&ndash;<el-dropdown-item command="set">设置</el-dropdown-item>&ndash;&gt;-->
                <!--&lt;!&ndash;<el-dropdown-item command="out">退出登录</el-dropdown-item>&ndash;&gt;-->
              <!--&lt;!&ndash;</el-dropdown-menu>&ndash;&gt;-->
            <!--&lt;!&ndash;</el-dropdown>&ndash;&gt;-->
          <!--&lt;!&ndash;</div>&ndash;&gt;-->
        <!--</li>-->
      </ul>
    </div>
    <div class="home">
      <div class="part1">
        <div class="list1 list" @click="gotopachong">
          <div class="word"><i class="ymq-iconbug1" style=" font-size: 60px;"></i></div>
          <div class="word2">
            <span>数据爬虫</span>
          </div>
        </div>
        <div class="list2 list" @click="gotoData">
          <div class="word"><i class="ymq-iconshujuwajue" style=" font-size: 60px;"></i></div>
          <div class="word2">
            <span>数据清洗</span>
          </div>
        </div>
        <div class="list3 list">
          <div class="word"><i class="ymq-iconliebiao" style=" font-size: 60px;"></i></div>
          <div class="word2">
            <span>文本分类</span>
          </div>
        </div>
        <div class="list4 list" @click="gotoChineseParticiple">
          <div class="word"><i class="ymq-icontranslate" style=" font-size: 60px;"></i></div>
          <div class="word2">
            <span>中文分词</span>
          </div>
        </div>
      </div>
      <div class="part2">
        <div class="list5 lists">
          <div class="word"><i class="ymq-iconbranches" style=" font-size: 60px;"></i></div>
          <div class="word2">
            <span>用户文献图谱</span>
          </div>
        </div>
        <div class="list6 lists">
          <div class="word"><i class="ymq-iconfile-text" style=" font-size: 60px;"></i></div>
          <div class="word2">
            <span>数据集</span>
          </div>
        </div>
        <div class="list7 lists">
          <div class="word"><i class="ymq-iconsever" style=" font-size: 60px;"></i></div>
          <div class="word2">
            <span>工程库</span>
          </div>
        </div>
        <div class="list8 lists">
          <div class="word"><i class="ymq-iconcontainer-fill" style=" font-size: 60px;"></i></div>
          <div class="word2">
            <span>算法库</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
    export default {
        name: "AIuilt",
      methods: {
        gotoData () {
          const {href} = this.$router.resolve({
            path: `/DataClear`
          })
          window.open(href, '_blank')
        },
        gotoChineseParticiple () {
          const {href} = this.$router.resolve({
            path: `/ChineseParticiple`
          })
          window.open(href, '_blank')
        },
        gotopachong () {
          var href = 'http://58.119.112.15:11010'
          window.open(href, '_blank')
        }
      }
    }
</script>

<style scoped>
  .shortcut {
    height: 80px;
    line-height: 80px;
    background-color: white;
  }
  .el-dropdown-link {
    cursor: pointer;
  }
  .fr {
    float: right;
    margin-right: 200px;
  }
  .fl {
    float: left;
  }
  a {
    text-decoration: none; /*取消下划线*/
    font-size: 16px;
    color: black;
  }
  a:hover {
    color: #66CCFF;
  }
  ul {
    list-style: none;
  }
  .shortcut li {
    float: left;
    margin-left: 40px;
  }
  .buttonlogin {
    width: 100px;
    transition: all 0.6s;
  }
  .buttonlogin:hover{
    box-shadow: 0 2px 2px black;
    transform: translateY(-5px);
  }
  .home {
    width: 70%;
    height: 500px;
    /*background-color: red;*/
    margin: 5% auto;
  }
  .part1 {
    height: 50%;
    display: flex;
  }
  .part1 div {
    flex: 1;
    margin-right: 10px;
  }
  .part2 {
    height: 50%;
    display: flex;
    margin-top: 10px;
  }
  .part2 div {
    flex: 1;
    margin-right: 10px;
  }
  .list {
    text-align: center;
    transition: all 0.6s;
  }
  .list:hover {
    transform: translateY(-10px);
    box-shadow: 0 5px 5px grey;
    cursor: pointer;
  }
  .lists {
    text-align: center;
    transition: all 0.6s;
  }
  .lists:hover {
    transform: translateY(10px);
    box-shadow: 0 5px 5px grey;
  }
  .list1 {
    background-color: #00d44c;
  }
  .list2 {
    background-color: #0dc2b3;
  }
  .list3 {
    background-color: #4abdea;
  }
  .list4 {
    background-color: #fd786f;
  }
  .list5 {
    background-color: #4abdea;
  }
  .list6 {
    background-color: #fd786f;
  }
  .list7 {
    background-color: #00d44c;
  }
  .list8 {
    background-color: #0dc2b3;
  }
  .word {
    margin-top: 60px;
    color: white;
  }
  .word2 {
    margin-top: 30px;
    color: white;
    font-weight: bold;
  }
</style>
