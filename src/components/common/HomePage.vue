<template>
  <div class="home_general">
    <Sidebar />
    <div class="imgBack">
      <el-row>
        <el-col :span="4">
          <canvas id="Canvas" style="width:900px;height:387px"></canvas>
        </el-col>
        <!--<el-col :span="20">-->
          <!--<img src="../../assets/img/0000.png" style="height: 480px;width:100%">-->
        <!--</el-col>-->
      </el-row>

    </div>
    <img src="../../assets/img/wzlogo2.png" style="width: 200px;position: absolute;top: 280px;left: 11%">
    <div  class="text1">海量文情大数据的</div>
    <div class="text2">知识图谱构建与智能服务平台</div>
    <div style="width: 100%;">
      <canvas id="Mycanvas" style="width: 100%;margin-top: 130px"></canvas>
    </div>
    <div class="mt35" style="position: absolute;top: 500px;width: 100%">
      <div class="title bgColor">
        <div class="lineColor">——————</div>
        <div style="margin-left: 50px;margin-right:50px;font-size: 22px">
          Knowledge graph<br/>
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;知识图谱
        </div>

        <div class="lineColor">——————</div>
      </div>
      <div class="kg_contnet mt18" style="height: 348px">
        <div class="kg_img mt15"><img src="../../assets/img/33333333.png" class="imgss"/></div>

        <div class="kg_introduce">
          <p style="font-size: 18px;letter-spacing: 3px;font-size: 22px">知识图谱详细解析</p>
          <p style="text-indent: 2em;font-size: 15px;letter-spacing: 3px;margin-top:8px;margin-bottom:8px;">知识图谱是图书情报界称为知识域可视化或知识领域映射地图，其目的在于发现显示知识发展的结构信息。在地质学金矿领域，我们通过文献的摘要和正文部分构建了45万对关系三元组，以图谱形式展示，方便用户发现这些知识之间的联系。</p>
          <el-button type="primary" style="background-color: #527595">查看更多</el-button>
        </div>

      </div>
    </div>
    <div class="mt35">
      <div class="title bgColor">
        <div class="lineColor">——————</div>
        <div style="margin-left: 50px;margin-right:50px; font-size: 22px;">
          Precise retrieval<br/>
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;精准检索
        </div>
        <div class="lineColor">——————</div>
      </div>
      <div class="kg_contnet mt18" style="height: 402px">
        <div class="kg_introduce">
          <p style="font-size: 18px;letter-spacing: 3px;;font-size: 22px">精准搜索详细解析</p>
          <p style="text-indent: 2em;font-size: 15px;letter-spacing: 3px;margin-top:8px;margin-bottom:8px;">精确检索是指检索词与资源库中某一字段完全相同的检索方式。目前采用基于Lucene的搜索服务器EiasticSearch，它提供了一个分布式多用户能力的全文搜索引擎，通过IK集成分词器实现基于RESTful web接口实现用户的复杂检索请求。</p>
          <el-button type="primary" style="background-color: #527595">查看更多</el-button>
        </div>
        <div class="kg_img mt15" style="margin-left: 50px;"><img src="../../assets/img/per_img.png" class="imgss"/></div>
      </div>
    </div>
    <div class="mt35 " style="background-color: #E9EEF5;">
      <div class="title bgColor">
        <div class="lineColor">——————</div>
        <div style="margin-left: 50px;margin-right:50px;font-size: 22px;">
          Domain Knowledge Base<br/>
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;领域知识库
        </div>
        <div class="lineColor">——————</div>
      </div>
      <div class="kg_contnet mt18" style="height: 180px">
        <div class="dbk_img" style="margin-top:10px;"><img src="../../assets/img/dkb_img.png" class="imgss"/></div>
        <div class="kg_introduce dkb">
          <p style="text-indent: 2em;font-size: 15px;letter-spacing: 3px;">领域知识库指某一领域内结构化的规则集合，是知识工程中结构化，易操作，易利用，全面有组织的知识集群。用户在此部分可以看到更全面的实体关联信息，包括实体本身内容、实体关联内容、实体包含规则信息。</p>
        </div>
      </div>
    </div>
    <div class="mt35">
      <div class="title ">
        <div class="lineColor">——————</div>
        <div style="margin-left: 50px;margin-right:50px;font-size: 22px">
          Intelligent question and answer<br/>
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;智能问答
        </div>
        <div class="lineColor">——————</div>
      </div>
      <div class="znwd_content">
        <!--<div class="znwd_img"><img src="../../../static/img/znwd_img.png"/></div>-->
        <div style="width: 800px">
          <el-carousel :interval="4000" type="card" height="250px">
            <el-carousel-item>
              <div style="width: 100%;border: 1px solid black">
                <img src="../../assets/img/123.png" style="width: 300px;height: 200px;margin-left: 15%">

              </div>
              <div style="margin-left: 40%;margin-top: 10px">生成式问答</div>


            </el-carousel-item>
            <el-carousel-item>
              <div style="width: 100%;border: 1px solid black">
                <img src="../../assets/img/555.png" style="width: 300px;height: 200px;margin-left: 15%">
              </div>
              <div style="margin-left: 40%;margin-top: 10px">检索式问答</div>


            </el-carousel-item>
            <el-carousel-item>
              <div style="width: 100%;border: 1px solid black">
                <img src="../../assets/img/666.png" style="width: 300px;height: 200px;margin-left: 15%">
              </div>
              <div style="margin-left: 40%;margin-top: 10px">混合问答</div>

            </el-carousel-item>
          </el-carousel>
        </div>

        <div class="znwd_introduce bgColor">
          <div class="znwd_wenzi">
            <p style="text-indent: 2em;font-size: 15px;letter-spacing: 3px;margin-top:8px;margin-bottom:8px;">智能问答系统是将积累的无序语料信息，进行有序和科学的整理，并建立基于知识的分类模型。将用户的问题整理为规范的问答库形式，以支撑各种形式问题的智能问答，方便用户进行答案查找。</p>
          </div>
        </div>

      </div>
    </div>
    <div class="mt35">
      <div class="title ">
        <div class="lineColor">——————</div>
        <div style="margin-left: 50px;margin-right:50px;font-size: 22px">
          Intelligent tool<br/>
              &nbsp;&nbsp;&nbsp;&nbsp;智能工具
        </div>
        <div class="lineColor">——————</div>
      </div>
      <div class="kg_contnet mt18" style="height: 348px">
        <div class="kg_introduce">
          <p style="text-indent: 2em;font-size: 15px;letter-spacing: 3px;margin-top:8px;margin-bottom:8px;">系统在智能工具部分为用户提供了用户个人文档处理服务，包括分词、标注以及用户个人文档图谱生成，以便用户快速理解文献信息。</p>
          <el-button type="primary" style="background-color: #527595">查看更多</el-button>
        </div>
        <div class="kg_img mt15" style="margin-left: 50px;"><img src="../../../static/img/zntools_img.png" class="imgss"/></div>
      </div>
      <!--<div class="part2">-->
        <!--<div class="morepart" @click="gotopage1">-->
          <!--<div class="circlemore">-->
            <!--<i class="el-icon-data-line styleword"></i>-->
          <!--</div>-->
          <!--<div class="word1">-->
            <!--<span>数据清洗</span>-->
          <!--</div>-->
        <!--</div>-->
        <!--<div class="morepart" @click="gotopage2">-->
          <!--<div class="circlemore">-->
            <!--<i class="el-icon-reading styleword"></i>-->
          <!--</div>-->
          <!--<div class="word1">-->
            <!--<span>中文分词</span>-->
          <!--</div>-->
        <!--</div>-->
        <!--<div class="morepart">-->
          <!--<div class="circlemore">-->
            <!--<i class="el-icon-office-building styleword"></i>-->
          <!--</div>-->
          <!--<div class="word1">-->
            <!--<span>智慧爬虫</span>-->
          <!--</div>-->
        <!--</div>-->
        <!--<div class="morepart">-->
          <!--<div class="circlemore">-->
            <!--<i class="el-icon-guide styleword"></i>-->
          <!--</div>-->
          <!--<div class="word1">-->
            <!--<span>智能分类</span>-->
          <!--</div>-->
        <!--</div>-->
        <!--<div class="morepart">-->
          <!--<div class="circlemore">-->
            <!--<i class="el-icon-s-operation styleword"></i>-->
          <!--</div>-->
          <!--<div class="word1">-->
            <!--<span>用户文献图谱</span>-->
          <!--</div>-->
        <!--</div>-->
        <!--<div class="morepart">-->
          <!--<div class="circlemore">-->
            <!--<i class="el-icon-download styleword"></i>-->
          <!--</div>-->
          <!--<div class="word1">-->
            <!--<span>下载区</span>-->
          <!--</div>-->
        <!--</div>-->
      <!--</div>-->
    </div>

    <Foot style="margin-top: 30px"></Foot>
  </div>
</template>

<script>
    import Sidebar from "@/components/common/Sidebar";
    import Foot from "@/components/common/Foot";
    export default {
      inject: ['reload'],
      data: function () {
        return {
        }
      },
      components: {
        Sidebar,
        Foot
      },

      mounted() {
        // this.reload()
        this.getLineShow()
        this.getShow()

      },
      methods: {
        getLineShow() {
          //定义画布宽高和生成点的个数
          var WIDTH = window.innerWidth, HEIGHT = 550, POINT = 45;

          var canvas = document.getElementById('Mycanvas');
          canvas.width = WIDTH,
            canvas.height = HEIGHT;
          var context = canvas.getContext('2d');
          context.strokeStyle = 'rgba(0,0,0,0.02)',
            context.strokeWidth = 1,
            context.fillStyle = 'rgba(241,123,135,0.08)';
          var circleArr = [];

          //线条：开始xy坐标，结束xy坐标，线条透明度
          function Line (x, y, _x, _y, o) {
            this.beginX = x,
              this.beginY = y,
              this.closeX = _x,
              this.closeY = _y,
              this.o = o;
          }
          //点：圆心xy坐标，半径，每帧移动xy的距离
          function Circle (x, y, r, moveX, moveY) {
            this.x = x,
              this.y = y,
              this.r = r,
              this.moveX = moveX,
              this.moveY = moveY;
          }
          //生成max和min之间的随机数
          function num (max, _min) {
            var min = arguments[1] || 0;
            return Math.floor(Math.random()*(max-min+1)+min);
          }
          // 绘制原点
          function drawCricle (cxt, x, y, r, moveX, moveY) {
            var circle = new Circle(x, y, r, moveX, moveY)
            cxt.beginPath()
            cxt.arc(circle.x, circle.y, circle.r, 0, 2*Math.PI)
            cxt.closePath()
            cxt.fill();
            return circle;
          }
          //绘制线条
          function drawLine (cxt, x, y, _x, _y, o) {
            var line = new Line(x, y, _x, _y, o)
            cxt.beginPath()
            cxt.strokeStyle = 'rgba(0,0,0,'+ o +')'
            cxt.moveTo(line.beginX, line.beginY)
            cxt.lineTo(line.closeX, line.closeY)
            cxt.closePath()
            cxt.stroke();

          }
          //初始化生成原点
          function init () {
            circleArr = [];
            for (var i = 0; i < POINT; i++) {
              circleArr.push(drawCricle(context, num(WIDTH), num(HEIGHT), num(15, 2), num(10, -10)/40, num(10, -10)/40));
            }
            draw();
          }

          //每帧绘制
          function draw () {
            context.clearRect(0,0,canvas.width, canvas.height);
            for (var i = 0; i < POINT; i++) {
              drawCricle(context, circleArr[i].x, circleArr[i].y, circleArr[i].r);
            }
            for (var i = 0; i < POINT; i++) {
              for (var j = 0; j < POINT; j++) {
                if (i + j < POINT) {
                  var A = Math.abs(circleArr[i+j].x - circleArr[i].x),
                    B = Math.abs(circleArr[i+j].y - circleArr[i].y);
                  var lineLength = Math.sqrt(A*A + B*B);
                  var C = 1/lineLength*7-0.009;
                  var lineOpacity = C > 0.03 ? 0.03 : C;
                  if (lineOpacity > 0) {
                    drawLine(context, circleArr[i].x, circleArr[i].y, circleArr[i+j].x, circleArr[i+j].y, lineOpacity);
                  }
                }
              }
            }
          }
          init();
          setInterval(function () {
            for (var i = 0; i < POINT; i++) {
              var cir = circleArr[i];
              cir.x += cir.moveX;
              cir.y += cir.moveY;
              if (cir.x > WIDTH) cir.x = 0;
              else if (cir.x < 0) cir.x = WIDTH;
              if (cir.y > HEIGHT) cir.y = 0;
              else if (cir.y < 0) cir.y = HEIGHT;

            }
            draw();
          }, 16);
          //调用执行
          // window.onload = function () {
          //
          // }



        },
        getShow() {
          var c = $("#Canvas")[0];
          var ctx = c.getContext("2d");
          var color_gold="255,255,255";
          var ww,wh;
          var center={x: 0,y: 0};

          function getWindowSize(){
            ww=$(window).outerWidth();
            wh=$(window).outerHeight();
            c.width=ww;
            c.height=wh;
            center={x: ww/2,y: wh/2};

            ctx.restore();
            ctx.translate(center.x,center.y);
          }
          getWindowSize();

          $(window).resize(getWindowSize);

          var enemies=Array(10).fill({}).map(
            function(obj){
              return {
                r: Math.random()*200,
                deg: Math.random()*360,
                opacity: 0
              }
            }
          );

          setInterval(draw,10);
          var time=0;

          var deg_to_pi=Math.PI/180;

          function Point(r,deg){
            return {
              x: r*Math.cos(deg_to_pi*deg),
              y: r*Math.sin(deg_to_pi*deg),
            };
          }

          function Color(op){
            return "rgba("+color_gold+","+op+")";
          }

          function draw(){
            time+=1;

            ctx.fillStyle = "#4E78B1";
            ctx.beginPath();
            ctx.rect(-2000,-2000,4000,4000);
            ctx.fill();

            ctx.strokeStyle="rgba(255,255,255,0.1)";
            ctx.moveTo(-ww/2,0);
            ctx.lineTo(ww/2,0);
            ctx.moveTo(0,-wh/2);
            ctx.lineTo(0,wh/2);
            ctx.stroke();

            ctx.strokeStyle=Color(1);
            var r=200;
            var deg=time;
            var newpoint=Point(r,deg);
            var line_deg = (time/2) % 360;
            // console.log(line_deg);

            var line_deg_len=100;

            for(var i=0;i<line_deg_len;i++){
              // var deg = (time-i);
              var deg1 = (line_deg-i-1) ;
              var deg2 = (line_deg-i) ;

              var point1=Point(r,deg1);
              var point2=Point(r,deg2);
              var opacity=1-(i/line_deg_len)-0.3;
              if (i==0) opacity=1;
              ctx.beginPath();
              // ctx.fillStyle="white";
              ctx.fillStyle=Color(opacity);
              ctx.moveTo(0,0);
              ctx.lineTo(point1.x,point1.y);
              ctx.lineTo(point2.x,point2.y);
              // ctx.stroke();
              ctx.fill();
            }

            enemies.forEach(function(obj){
              ctx.fillStyle=Color(obj.opacity);
              var obj_point=Point(obj.r,obj.deg);

              ctx.beginPath();
              ctx.arc(
                obj_point.x,obj_point.y,
                4,0,2*Math.PI
              );
              ctx.fill();

              ctx.strokeStyle= Color(obj.opacity);
              var x_size=6;
              ctx.lineWidth=4;
              ctx.beginPath();
              ctx.moveTo(obj_point.x-x_size,obj_point.y+x_size);
              ctx.lineTo(obj_point.x+x_size,obj_point.y-x_size);
              ctx.moveTo(obj_point.x+x_size,obj_point.y+x_size);
              ctx.lineTo(obj_point.x-x_size,obj_point.y-x_size);
              ctx.stroke();

              if (Math.abs(obj.deg - line_deg)<=1){
                obj.opacity=1;
                $(".message").text("Detected: "+ obj.r.toFixed(3) + " at " +obj.deg.toFixed(3));
              }
              obj.opacity*=0.99;

              ctx.strokeStyle= Color(obj.opacity);
              ctx.lineWidth=1;
              ctx.beginPath();
              ctx.arc(
                obj_point.x,obj_point.y,
                10*(1/(obj.opacity+0.0001)),0,2*Math.PI
              );
              ctx.stroke();


            });

            ctx.strokeStyle=Color(1);
            var split =120;
            var feature =15;
            var start_r=230;
            var len = 5;

            for(var i=0;i<split;i++){
              ctx.beginPath();
              var deg = (i/120) * 360;

              if (i%feature==0){
                len=10;
                ctx.lineWidth=3;
              }else{
                len=5;
                ctx.lineWidth=1;
              }


              var point1 =Point(start_r,deg);
              var point2 =Point(start_r+len,deg);

              ctx.moveTo(point1.x,point1.y);
              ctx.lineTo(point2.x,point2.y);

              ctx.stroke();

            }

            function CondCircle(r,lineWidth,func_cond){

              ctx.lineWidth=lineWidth;
              ctx.strokeStyle=Color(1);

              ctx.beginPath();
              for(var i=0;i<=360;i++){
                var point =Point(r,i);
                if (func_cond(i)){
                  ctx.lineTo(point.x,point.y);
                }else{
                  ctx.moveTo(point.x,point.y);
                }
              }
              ctx.stroke();

            }
            // CondCircle(300);

            CondCircle(300,2,function(deg){
              return ((deg+time/10)%180)<90;
            });
            CondCircle(100,1,function(deg){
              return (deg%3)<1;
            });
            CondCircle(190,1,function(deg){
              return true;
            });


          }
        },
        gotopage1 () {
          const {href} = this.$router.resolve({
            path: `/DataClear`
          })
          window.open(href, '_blank')
        },
        gotopage2 () {
          const {href} = this.$router.resolve({
            path: `/ChineseParticiple`
          })
          window.open(href, '_blank')
          // this.goBackHome()
        }

      }
    }
</script>

<style scoped>
  .home_general {
    margin: 0px;
    padding: 0px;

  }
  .mt35 {
    margin-top: 35px;
  }
  .title {
    display: flex;
    flex-direction: row;
    flex-wrap: nowrap;
    align-items: center;
    justify-content: center ;
    width: 100%;
    height: 80px;

    font-size: 18px;
  }
  .bgColor {
    background-color: #E9EDF6;
    margin-top: 73px;
    height: 117px;
  }
  .lineColor {
    color: #96989C;
  }
  .imgss{
    transition: all 0.2s linear;
    border: 1px solid black;
    width: 300px;
  }
  .imgss:hover{
    transform: scale(1.1, 1.1);
    filter: contrast(130%);
  }
  .kg_contnet {
    display: flex;
    flex-direction: row;
    flex-wrap: nowrap;
    align-items: center;
    justify-content: center ;
    align-content: center;
    width: 100%;
    /*height: 348px;*/

  }
  .znwd_content {
    display: flex;
    flex-direction: column;
    flex-wrap: nowrap;
    align-items: center;
    justify-content: center ;
    width: 100%;
  }
  .mt18 {
    margin-top: 18px;
  }
  .kg_img {
    height: 180px;
    width: 30%;

  }
  .imgBack{
    height: 387px;
    background-image: url("http://zhongkeruitong.top:11030/%E5%9B%BE%E4%B9%A6%E9%A6%86%E7%B3%BB%E7%BB%9F%E5%9B%BE%E7%89%872.png");
    display: flex;
    flex-direction: row;
    flex-wrap: nowrap;
    align-items: flex-start;
    width: 100%;
    background-size: 100% 100%;
    background-color: #4E78B1;
  }
  .mt15 {
    margin-top: 15px;
  }
  .kg_introduce {
    width: 500px;
  }
  .dkb {
    margin-top: -20px;
    border: 1px solid #DADDE2;
  }
  .dbk_img {
    height: 120px;
    width: 30%;
  }
  .znwd_img {
    margin-top: 20px;
  }
  .znwd_introduce {
    width: 100%;

  }
  .znwd_wenzi {
    height: 60px;
    width: 60%;
    margin: 0 auto;
    padding-top: 25px;
  }
  .el-carousel__item h3 {
    color: #475669;
    font-size: 14px;
    opacity: 0.75;
    line-height: 200px;
    margin: 0;
  }

  .el-carousel__item:nth-child(2n) {
    background-color: white;
  }

  .el-carousel__item:nth-child(2n+1) {
    background-color: white;
  }
  .text1{
    position: absolute;top: 250px;left: 16%;font-size: 36px;color: white;font-weight: bold;
    letter-spacing: 5px;
  }
  .text2{
    position: absolute;top: 300px;left: 23%;font-size: 36px;color: white;font-weight: bold;
    letter-spacing: 5px;
  }
  .part2 {
    width: 80%;
    margin: 0 auto;
    height: 170px;
    display: flex;
  }
  .part2 .morepart {
    flex: 1;
    margin-left: 20px;
  }
  .morepart {
    width: 100%;
    transition: all 0.6s;
  }
  .morepart:hover {
    cursor: pointer;
    transform: translateY(-10px);
  }
  .circlemore {
    height: 100px;
    width: 100px;
    border-radius: 50%;
    margin: 0 auto;
    background-color: #4B89ED;
    box-shadow: 0 5px 5px grey;
    text-align: center;
  }
  .styleword {
    font-size: 40px;
    color: white;
    line-height: 100px
  }
  .word1 {
    text-align: center;
    margin-top: 20px;
    font-size: 22px;
  }
</style>
