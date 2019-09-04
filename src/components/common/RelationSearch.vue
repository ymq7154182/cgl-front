<template>
  <div class="login-a">
    <el-row style="margin-top: 5px;">
      <el-col :span="22"><div class="grid-content fs36">共现检索</div></el-col>
      <el-col :span="2"><div class="grid-content fs36"><el-button type="primary" size="small" icon="el-icon-back" @click="goBackHome">返回主页</el-button></div></el-col>
    </el-row>
    <el-row>
      <Sidebar></Sidebar>
    </el-row>
    <el-row>
      <el-col :span="6">&nbsp;</el-col>
      <el-col :span="12">
        <el-row :gutter="20">
          <el-col :span="10">
            <el-input
              placeholder="查询词一"
              prefix-icon="el-icon-search"
              v-model="inputOne"
              class="inputOne">
            </el-input>
          </el-col>
          <el-col :span="10">
            <el-input
              placeholder="查询词二"
              prefix-icon="el-icon-search"
              v-model="inputTwo"
              class="inputOne">
            </el-input>
          </el-col>
          <el-col :span="4">
            <el-button
              type="primary"
              size="medium"
              icon="el-icon-search"
              @click="searchContent"
            >
              检索
            </el-button>
          </el-col>
          <!--<el-row>-->
          <!--<el-col>-->
          <!--<el-button type="text" @click="dialogVisible = true">点击打开 Dialog</el-button>-->

          <!--<el-dialog-->
          <!--title="提示"-->
          <!--:visible.sync="dialogVisible"-->
          <!--width="30%"-->
          <!--:before-close="handleClose">-->
          <!--<span>这是一段信息</span>-->
          <!--<span slot="footer" class="dialog-footer">-->
          <!--<el-button @click="dialogVisible = false">关闭</el-button>-->
          <!--</span>-->
          <!--</el-dialog>-->
          <!--</el-col>-->
          <!--</el-row>-->
        </el-row>


      </el-col>
      <el-col :span="6">
        <el-row>
          <el-col>
            <el-button type="text" @click="dialogVisible = true" v-if="show">实体关系来源</el-button>

            <el-dialog
              :visible.sync="dialogVisible"
              width="50%"
              @open="look()"
              :before-close="handleClose">

              <div id="container" style="width:900px ;height:500px"></div>

              <span slot="footer" class="dialog-footer">
                  <el-button @click="dialogVisible = false">关闭</el-button>
                </span>
            </el-dialog>
          </el-col>
        </el-row>
      </el-col>
    </el-row>


    <el-row  class="row-bg" justify="space-around">

      <el-col :span="16" style="margin-left: 15%;">

        <div v-for="item in tableData.slice((currentPage-1)*pagesize,currentPage*pagesize)" :key="item.all" class="text item">
          <el-card class="box-card" shadow="hover">
            <el-row>
              <el-col>
                <el-row>
                  <el-col>
                    <div class="title">{{item.lit_title}}</div>
                  </el-col>
                </el-row>
                <el-row>
                  <el-col :span="24" class="lit_text">
                    <span v-html="item.lit_text" class="lit_text"></span>
                  </el-col>
                </el-row>
                <el-row :gutter="20">

                  <el-col :span="6">
                    <el-tag type="success" class="author">[作者]： {{item.lit_author}}</el-tag>
                  </el-col>
                  <el-col :span="6">
                    <el-tag class="publisher">出版社：{{item.lit_publisher}}</el-tag>
                    <!--<div class="publisher">出版社：{{item.lit_publisher}}</div>-->
                  </el-col>
                  <el-col :span="6">
                    <el-button  size="mini" round>下载<i class="el-icon-download el-icon--right"></i></el-button>
                  </el-col>

                </el-row>



              </el-col>
            </el-row>

            <!--</div>-->

          </el-card>

        </div>


        <!--<el-scrollbar  style="height: 100%">-->

        <!--<div v-for="item in tableData.slice((currentPage-1)*pagesize,currentPage*pagesize)" :key="item.all" class="text item">-->
        <!--<el-card class="box-card" shadow="hover">-->
        <!--<el-row>-->
        <!--<el-col>-->
        <!--<el-row>-->
        <!--<el-col>-->
        <!--<div class="title">{{item.lit_title}}</div>-->
        <!--</el-col>-->
        <!--</el-row>-->
        <!--<el-row>-->
        <!--<el-col :span="24" class="lit_text">-->
        <!--<span v-html="item.lit_text" class="lit_text"></span>-->
        <!--</el-col>-->
        <!--</el-row>-->
        <!--<el-row :gutter="20">-->

        <!--<el-col :span="6">-->
        <!--<el-tag type="success" class="author">[作者]： {{item.lit_author}}</el-tag>-->
        <!--</el-col>-->
        <!--<el-col :span="6">-->
        <!--<el-tag class="publisher">出版社：{{item.lit_publisher}}</el-tag>-->
        <!--&lt;!&ndash;<div class="publisher">出版社：{{item.lit_publisher}}</div>&ndash;&gt;-->
        <!--</el-col>-->
        <!--<el-col :span="6">-->
        <!--<el-button  size="mini" round>下载<i class="el-icon-download el-icon&#45;&#45;right"></i></el-button>-->
        <!--</el-col>-->

        <!--</el-row>-->



        <!--</el-col>-->
        <!--</el-row>-->

        <!--&lt;!&ndash;</div>&ndash;&gt;-->

        <!--</el-card>-->

        <!--</div>-->
        <!--</el-scrollbar>-->
        <div>

          <!--<el-pagination-->
          <!--@size-change="handleSizeChange"-->
          <!--@current-change="handleCurrentChange"-->
          <!--:current-page="currentPage"-->
          <!--:page-sizes="[3, 10, 20, 30, 40]"-->
          <!--:page-size="3"-->
          <!--layout="total, sizes, prev, pager, next, jumper"-->
          <!--prev-text="上一页"-->
          <!--next-text="下一页"-->
          <!--:total="tableData.length">-->
          <!--</el-pagination>-->
        </div>


        <!--<el-table-->
        <!--:data="tableData"-->
        <!--stripe-->
        <!--style="width: 100%">-->
        <!--<el-table-column>-->
        <!--</el-table-column>-->
        <!--</el-table>-->
        <!--<table>-->
        <!--<tr>-->
        <!--<td>-->
        <!--<div>-->
        <!--ewfwfw-->
        <!--</div>-->
        <!--<div>-->
        <!--fewewfwef-->
        <!--</div>-->
        <!--</td>-->
        <!--</tr>-->
        <!--</table>-->

      </el-col>
    </el-row>
    <el-row>
      <el-col>
        <el-pagination
          @size-change="handleSizeChange"
          @current-change="handleCurrentChange"
          :current-page="currentPage"
          :page-sizes="[3, 20, 30, 40]"
          :page-size="size"
          layout="total, sizes, prev, pager, next, jumper"
          prev-text="上一页"
          next-text="下一页"
          :total="tableData.length"
          v-if="show">
        </el-pagination>
      </el-col>
    </el-row>
    <!--<el-container>-->
      <!--<el-header >-->
        <!--<el-row style="margin-top: 5px;">-->
          <!--<el-col :span="22"><div class="grid-content fs36">共现检索</div></el-col>-->
          <!--<el-col :span="2"><div class="grid-content fs36"><el-button type="primary" size="small" icon="el-icon-back" @click="goBackHome">返回主页</el-button></div></el-col>-->
        <!--</el-row>-->
        <!--<el-row>-->
          <!--<Sidebar></Sidebar>-->
        <!--</el-row>-->
        <!--&lt;!&ndash;<el-row>&ndash;&gt;-->
          <!--&lt;!&ndash;<el-col :span="22"><div class="grid-content fs36">共现检索</div></el-col>&ndash;&gt;-->
          <!--&lt;!&ndash;<el-col :span="2"><div class="grid-content fs36"><el-button type="primary" size="small" icon="el-icon-back" @click="goBackHome">返回主页</el-button></div></el-col>&ndash;&gt;-->
        <!--&lt;!&ndash;</el-row>&ndash;&gt;-->
      <!--</el-header>-->
      <!--<el-main style="margin-top:200px;" >-->
        <!--<el-row>-->
          <!--<el-col :span="6">&nbsp;</el-col>-->
          <!--<el-col :span="12">-->
            <!--<el-row :gutter="20">-->
              <!--<el-col :span="10">-->
                <!--<el-input-->
                  <!--placeholder="查询词一"-->
                  <!--prefix-icon="el-icon-search"-->
                  <!--v-model="inputOne"-->
                  <!--class="inputOne">-->
                <!--</el-input>-->
              <!--</el-col>-->
              <!--<el-col :span="10">-->
                <!--<el-input-->
                  <!--placeholder="查询词二"-->
                  <!--prefix-icon="el-icon-search"-->
                  <!--v-model="inputTwo"-->
                  <!--class="inputOne">-->
                <!--</el-input>-->
              <!--</el-col>-->
              <!--<el-col :span="4">-->
                <!--<el-button-->
                  <!--type="primary"-->
                  <!--size="medium"-->
                  <!--icon="el-icon-search"-->
                  <!--@click="searchContent"-->
                <!--&gt;-->
                  <!--检索-->
                <!--</el-button>-->
              <!--</el-col>-->
              <!--&lt;!&ndash;<el-row>&ndash;&gt;-->
                <!--&lt;!&ndash;<el-col>&ndash;&gt;-->
                  <!--&lt;!&ndash;<el-button type="text" @click="dialogVisible = true">点击打开 Dialog</el-button>&ndash;&gt;-->

                  <!--&lt;!&ndash;<el-dialog&ndash;&gt;-->
                    <!--&lt;!&ndash;title="提示"&ndash;&gt;-->
                    <!--&lt;!&ndash;:visible.sync="dialogVisible"&ndash;&gt;-->
                    <!--&lt;!&ndash;width="30%"&ndash;&gt;-->
                    <!--&lt;!&ndash;:before-close="handleClose">&ndash;&gt;-->
                    <!--&lt;!&ndash;<span>这是一段信息</span>&ndash;&gt;-->
                    <!--&lt;!&ndash;<span slot="footer" class="dialog-footer">&ndash;&gt;-->
                  <!--&lt;!&ndash;<el-button @click="dialogVisible = false">关闭</el-button>&ndash;&gt;-->
                <!--&lt;!&ndash;</span>&ndash;&gt;-->
                  <!--&lt;!&ndash;</el-dialog>&ndash;&gt;-->
                <!--&lt;!&ndash;</el-col>&ndash;&gt;-->
              <!--&lt;!&ndash;</el-row>&ndash;&gt;-->
            <!--</el-row>-->


          <!--</el-col>-->
          <!--<el-col :span="6">-->
            <!--<el-row>-->
              <!--<el-col>-->
                <!--<el-button type="text" @click="dialogVisible = true" v-if="show">实体关系来源</el-button>-->

                <!--<el-dialog-->
                  <!--:visible.sync="dialogVisible"-->
                  <!--width="50%"-->
                  <!--@open="look()"-->
                  <!--:before-close="handleClose">-->

                  <!--<div id="container" style="width:900px ;height:500px"></div>-->

                  <!--<span slot="footer" class="dialog-footer">-->
                  <!--<el-button @click="dialogVisible = false">关闭</el-button>-->
                <!--</span>-->
                <!--</el-dialog>-->
              <!--</el-col>-->
            <!--</el-row>-->
          <!--</el-col>-->
        <!--</el-row>-->


        <!--<el-row  class="row-bg" justify="space-around">-->

          <!--<el-col :span="16" style="margin-left: 15%;height: 500px">-->

            <!--<div v-for="item in tableData.slice((currentPage-1)*pagesize,currentPage*pagesize)" :key="item.all" class="text item">-->
              <!--<el-card class="box-card" shadow="hover">-->
                <!--<el-row>-->
                  <!--<el-col>-->
                    <!--<el-row>-->
                      <!--<el-col>-->
                        <!--<div class="title">{{item.lit_title}}</div>-->
                      <!--</el-col>-->
                    <!--</el-row>-->
                    <!--<el-row>-->
                      <!--<el-col :span="24" class="lit_text">-->
                        <!--<span v-html="item.lit_text" class="lit_text"></span>-->
                      <!--</el-col>-->
                    <!--</el-row>-->
                    <!--<el-row :gutter="20">-->

                      <!--<el-col :span="6">-->
                        <!--<el-tag type="success" class="author">[作者]： {{item.lit_author}}</el-tag>-->
                      <!--</el-col>-->
                      <!--<el-col :span="6">-->
                        <!--<el-tag class="publisher">出版社：{{item.lit_publisher}}</el-tag>-->
                        <!--&lt;!&ndash;<div class="publisher">出版社：{{item.lit_publisher}}</div>&ndash;&gt;-->
                      <!--</el-col>-->
                      <!--<el-col :span="6">-->
                        <!--<el-button  size="mini" round>下载<i class="el-icon-download el-icon&#45;&#45;right"></i></el-button>-->
                      <!--</el-col>-->

                    <!--</el-row>-->



                  <!--</el-col>-->
                <!--</el-row>-->

                <!--&lt;!&ndash;</div>&ndash;&gt;-->

              <!--</el-card>-->

            <!--</div>-->


            <!--&lt;!&ndash;<el-scrollbar  style="height: 100%">&ndash;&gt;-->

              <!--&lt;!&ndash;<div v-for="item in tableData.slice((currentPage-1)*pagesize,currentPage*pagesize)" :key="item.all" class="text item">&ndash;&gt;-->
                <!--&lt;!&ndash;<el-card class="box-card" shadow="hover">&ndash;&gt;-->
                  <!--&lt;!&ndash;<el-row>&ndash;&gt;-->
                    <!--&lt;!&ndash;<el-col>&ndash;&gt;-->
                      <!--&lt;!&ndash;<el-row>&ndash;&gt;-->
                        <!--&lt;!&ndash;<el-col>&ndash;&gt;-->
                          <!--&lt;!&ndash;<div class="title">{{item.lit_title}}</div>&ndash;&gt;-->
                        <!--&lt;!&ndash;</el-col>&ndash;&gt;-->
                      <!--&lt;!&ndash;</el-row>&ndash;&gt;-->
                      <!--&lt;!&ndash;<el-row>&ndash;&gt;-->
                        <!--&lt;!&ndash;<el-col :span="24" class="lit_text">&ndash;&gt;-->
                          <!--&lt;!&ndash;<span v-html="item.lit_text" class="lit_text"></span>&ndash;&gt;-->
                        <!--&lt;!&ndash;</el-col>&ndash;&gt;-->
                      <!--&lt;!&ndash;</el-row>&ndash;&gt;-->
                      <!--&lt;!&ndash;<el-row :gutter="20">&ndash;&gt;-->

                        <!--&lt;!&ndash;<el-col :span="6">&ndash;&gt;-->
                          <!--&lt;!&ndash;<el-tag type="success" class="author">[作者]： {{item.lit_author}}</el-tag>&ndash;&gt;-->
                        <!--&lt;!&ndash;</el-col>&ndash;&gt;-->
                        <!--&lt;!&ndash;<el-col :span="6">&ndash;&gt;-->
                          <!--&lt;!&ndash;<el-tag class="publisher">出版社：{{item.lit_publisher}}</el-tag>&ndash;&gt;-->
                          <!--&lt;!&ndash;&lt;!&ndash;<div class="publisher">出版社：{{item.lit_publisher}}</div>&ndash;&gt;&ndash;&gt;-->
                        <!--&lt;!&ndash;</el-col>&ndash;&gt;-->
                        <!--&lt;!&ndash;<el-col :span="6">&ndash;&gt;-->
                          <!--&lt;!&ndash;<el-button  size="mini" round>下载<i class="el-icon-download el-icon&#45;&#45;right"></i></el-button>&ndash;&gt;-->
                        <!--&lt;!&ndash;</el-col>&ndash;&gt;-->

                      <!--&lt;!&ndash;</el-row>&ndash;&gt;-->



                    <!--&lt;!&ndash;</el-col>&ndash;&gt;-->
                  <!--&lt;!&ndash;</el-row>&ndash;&gt;-->

                  <!--&lt;!&ndash;&lt;!&ndash;</div>&ndash;&gt;&ndash;&gt;-->

                <!--&lt;!&ndash;</el-card>&ndash;&gt;-->

              <!--&lt;!&ndash;</div>&ndash;&gt;-->
            <!--&lt;!&ndash;</el-scrollbar>&ndash;&gt;-->
            <!--<div>-->

            <!--&lt;!&ndash;<el-pagination&ndash;&gt;-->
            <!--&lt;!&ndash;@size-change="handleSizeChange"&ndash;&gt;-->
            <!--&lt;!&ndash;@current-change="handleCurrentChange"&ndash;&gt;-->
            <!--&lt;!&ndash;:current-page="currentPage"&ndash;&gt;-->
            <!--&lt;!&ndash;:page-sizes="[3, 10, 20, 30, 40]"&ndash;&gt;-->
            <!--&lt;!&ndash;:page-size="3"&ndash;&gt;-->
            <!--&lt;!&ndash;layout="total, sizes, prev, pager, next, jumper"&ndash;&gt;-->
            <!--&lt;!&ndash;prev-text="上一页"&ndash;&gt;-->
            <!--&lt;!&ndash;next-text="下一页"&ndash;&gt;-->
            <!--&lt;!&ndash;:total="tableData.length">&ndash;&gt;-->
            <!--&lt;!&ndash;</el-pagination>&ndash;&gt;-->
            <!--</div>-->


            <!--&lt;!&ndash;<el-table&ndash;&gt;-->
            <!--&lt;!&ndash;:data="tableData"&ndash;&gt;-->
            <!--&lt;!&ndash;stripe&ndash;&gt;-->
            <!--&lt;!&ndash;style="width: 100%">&ndash;&gt;-->
            <!--&lt;!&ndash;<el-table-column>&ndash;&gt;-->
            <!--&lt;!&ndash;</el-table-column>&ndash;&gt;-->
            <!--&lt;!&ndash;</el-table>&ndash;&gt;-->
            <!--&lt;!&ndash;<table>&ndash;&gt;-->
            <!--&lt;!&ndash;<tr>&ndash;&gt;-->
            <!--&lt;!&ndash;<td>&ndash;&gt;-->
            <!--&lt;!&ndash;<div>&ndash;&gt;-->
            <!--&lt;!&ndash;ewfwfw&ndash;&gt;-->
            <!--&lt;!&ndash;</div>&ndash;&gt;-->
            <!--&lt;!&ndash;<div>&ndash;&gt;-->
            <!--&lt;!&ndash;fewewfwef&ndash;&gt;-->
            <!--&lt;!&ndash;</div>&ndash;&gt;-->
            <!--&lt;!&ndash;</td>&ndash;&gt;-->
            <!--&lt;!&ndash;</tr>&ndash;&gt;-->
            <!--&lt;!&ndash;</table>&ndash;&gt;-->

          <!--</el-col>-->
        <!--</el-row>-->
        <!--<el-row>-->
          <!--<el-col>-->
            <!--<el-pagination-->
              <!--@size-change="handleSizeChange"-->
              <!--@current-change="handleCurrentChange"-->
              <!--:current-page="currentPage"-->
              <!--:page-sizes="[3, 20, 30, 40]"-->
              <!--:page-size="size"-->
              <!--layout="total, sizes, prev, pager, next, jumper"-->
              <!--prev-text="上一页"-->
              <!--next-text="下一页"-->
              <!--:total="tableData.length"-->
              <!--v-if="show">-->
            <!--</el-pagination>-->
          <!--</el-col>-->
        <!--</el-row>-->





      <!--</el-main>-->
    <!--</el-container>-->
  </div>
</template>

<script>
    import Sidebar from "@/components/common/Sidebar";
    import echarts from 'echarts'



    export default {

        data: function () {
          return {
            show: false,
            inputOne: '',
            inputTwo: '',
            currentPage: 1,
            pagesize: 3,
            dialogVisible: false,
           tableData: [
              // {"lit_author":"原浩鹏;杨维涛;徐征军;","lit_text":"研究发现在<span style='color:red'>细菌</span>氧化的过程中,含砷<span style='color:red'>金矿</span>中的毒砂很容易被氧化分解,而雄黄无法被<span style='color:red'>细菌</span>氧化分解且会影响<span style='color:red'>细菌</span>的活性","lit_id":"48474","lit_title":"[期刊] 新城金矿厚大矿体开采方法","lit_publisher":"创新实践"},
              // {"lit_author":"","lit_text":"北衙<span style='color:red'>金矿</span>矿石内部和矿区环境中分离到的<span style='color:red'>细菌</span>相同点是分离到的<span style='color:red'>细菌</span>均为放线菌门和厚壁菌门的<span style='color:red'>细菌</span>","lit_id":"161822","lit_title":"[期刊] 资讯","lit_publisher":"中国食品药品监管"},
              // {"lit_author":"洪汉烈,彭长琪,陈文怡","lit_text":"根据国外现有报导，世界上<span style='color:red'>细菌</span>氧化预处理提金的主要研究企业和采用的工艺是1商非公司的艺已在南非的<span style='color:red'>金矿</span>巴西的<span style='color:red'>金矿</span>澳大利亚的<span style='color:red'>金矿</span>和<span style='color:red'>金矿</span>以及加纳的<span style='color:red'>金矿</span>建厂投人工业生产","lit_id":"152070","lit_title":"[期刊] 湖北阳新富水金矿金的显微研究","lit_publisher":"矿物学报"},
              // {"lit_author":"张玉华,吴学敏","lit_text":"其他如黄铁矿型的黄金洞<span style='color:red'>金矿</span>含锑的龙山砷锑<span style='color:red'>金矿</span>含铜的石棉银山及天马山<span style='color:red'>金矿</span>含雄黄碳质的东北寨及板其<span style='color:red'>金矿</span>等四大类难处理<span style='color:red'>金矿</span>的<span style='color:red'>细菌</span>浸出的效果则不太理想","lit_id":"153093","lit_title":"[期刊] 湖南省湘西金矿1~#尾矿库老尾矿工艺矿物研究","lit_publisher":"黄金"},
              // {"lit_author":"刁乃昌;","lit_text":"4米难选<span style='color:red'>金矿</span><span style='color:red'>细菌</span>氧化的发展与改革正 1986年10月以来,南非  <span style='color:red'>金矿</span>已成功地应用了<span style='color:red'>细菌</span>氧化法预处理难选<span style='color:red'>金矿</span>回收金","lit_id":"581064","lit_title":"[期刊] 抚顺南口前金矿同位素地质年代研究","lit_publisher":"矿物岩石地球化学通讯"}
            ]
          }
        },

      components: {
          Sidebar,
      },
      mounted() {

      },
      created(){

      },
      methods: {
        handleSizeChange: function (size) {
          this.pagesize = size;
        },
        handleCurrentChange: function(currentPage){
          this.currentPage = currentPage;
        },
        look() {
          this.$nextTick(() => {
            // 渲染chart
            let myChart = echarts.init(document.getElementById('container'));
            let option = {
              title : {
                text: '实体关系来源',
                // subtext: '纯属虚构',
                x:'center'
              },
              tooltip : {
                trigger: 'item',
                formatter: "{a} <br/>{b} : {c} ({d}%)"
              },
              legend: {
                orient: 'vertical',
                left: 'left',
                data: ['直接访问','邮件营销','联盟广告','视频广告','搜索引擎']
              },
              series : [
                {
                  name: '访问来源',
                  type: 'pie',
                  radius : '55%',
                  center: ['50%', '60%'],
                  data:[
                    {value:335, name:'直接访问'},
                    {value:310, name:'邮件营销'},
                    {value:234, name:'联盟广告'},
                    {value:135, name:'视频广告'},
                    {value:1548, name:'搜索引擎'}
                  ],
                  itemStyle: {
                    emphasis: {
                      shadowBlur: 10,
                      shadowOffsetX: 0,
                      shadowColor: 'rgba(0, 0, 0, 0.5)'
                    }
                  }
                }
              ]
            };
            // if (option && typeof option === "object") {
            //   myChart.setOption(option, true);
            // }
            myChart.setOption(option);
            //
            // //建议加上以下这一行代码，不加的效果图如下（当浏览器窗口缩小的时候）。超过了div的界限（红色边框）
            // window.addEventListener('resize',function() {myChart.resize()});
          })


        },

        goBackHome() {
            this.$router.push({
              path: '/HomePage',
              query: {

              }
            })
          },
        handleClose(done) {
          this.$confirm('确认关闭？')
            .then(_ => {
              done();
            })
            .catch(_ => {});
        },
        searchContent() {
          var url = 'http://localhost:8080/api/tableData';
          this.show = true;
          this.$axios.get(url,this.$qs.stringify({
            word1: this.inputOne,
            word2: this.inputTwo,

          })).then((res) => {
            this.tableData = res.data.data;
            console.log(this.tableData)
          }).catch((err) =>{
            console.log(err)
          })
          // this.$message(`您想要搜索的是${this.inputContent}`);
        },
        // handleSizeChange: function (size) {
        //   this.pagesize = size;
        // },
        // handleCurrentChange: function (currentPage) {
        //   this.currentPage = currentPage;
        // }
      }


    }
</script>

<style scoped>
  .login-a {
    width: 100%;
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    text-align: center;
    color: white;
    background-color: white;
  }
  .grid-content {
    border-radius: 4px;
    min-height: 36px;
    font-family: 'SimHei';
    font-weight: bold;
  }
  .fs36 {
    font-size: 36px;
    letter-spacing: 22px;
    color: #606266;
  }

  .el-row {
    margin-bottom: 20px;
    &:last-child {
       margin-bottom: 0;
     }
    }
  .el-col {
    border-radius: 4px;
  }
  .grid-content {
    border-radius: 4px;
    min-height: 36px;
    font-family: 'SimHei';
    font-weight: bold;
  }
  .fs28 {
    font-size: 28px;
    letter-spacing: 10px;
  }
  .el-dropdown-menu {

    border: 1px solid #EBEEF5;
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
    letter-spacing: 2px ;
    color: #606266;
    cursor: pointer;
    outline: 0;
  }
  .inputOne {
    box-shadow: 0 2px 4px rgba(0, 0, 0, .12), 0 0 6px rgba(0, 0, 0, .04)
  }
  .text {
    font-size: 14px;
  }

  .item {
    margin-bottom: 18px;
  }

  .clearfix:before,
  .clearfix:after {
    display: table;
    content: "";
  }
  .clearfix:after {
    clear: both
  }
  .row-bg {
    padding: 10px 0;
  }

  .box-card {
    width: available;
    background: rgba(255,255,255,0.7);

  }
  #three_dot_view{
    width: auto;
    height: 20px;
    margin-top: 18px;
  }
  .link-top {
    width: auto;
    height: 1px;
    border-top: solid #ACC0D8 1px;
    margin-bottom: 8px;
  }
  .title {
    font-weight: bold;
    font-family: "microsoft yahei";
    font-size: 20px;
    margin-right: 600px;
    color: #999999;

  }
  .lit_text{
    margin-top: 15px;
    font-size: medium;
  }
  .author {
    font-family: "Arial Black";
    font-weight: bold;
  }
  .publisher {
    font-family: "Arial Black";
    font-weight: bold;
    font-size: small;
  }
  .el-scrollbar_wrap {
    overflow:hidden;

  }

  #container{
    /*border: 1px solid red;*/
    margin: 0 auto;
  }


</style>
