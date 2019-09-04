<!-- 关联图谱 -->
<template>
  <el-container>
    <el-header >
      <el-row style="margin-top: 5px;">
        <el-col :span="22"><div class="grid-content fs36">关联图谱</div></el-col>
        <el-col :span="2"><div class="grid-content fs36"><el-button type="primary" icon="el-icon-back" @click="goBackHome">返回主页</el-button></div></el-col>
      </el-row>
      <el-row class="sibebar">
        <Sidebar />
      </el-row>
    </el-header>
    <el-container class="row1">
      <el-main style="line-height: normal">
        <el-row style="margin-top: 60px">
          <el-col :span="12" style="margin-left: 250px">
            <el-input
              placeholder="请输入内容"
              v-model="input10"
              clearable>
            </el-input>
          </el-col>
          <el-col :span="3">
            <el-button type="primary" @click="searchButton">查询</el-button>
          </el-col>
        </el-row>
        <el-row>
          <el-col :span="4">
            <el-button type="primary" @click="dialogVisible = true">热词发现</el-button>
            <el-dialog
              :visible.sync="dialogVisible"
              width="60%"
              :before-close="handleClose">
              <div>
                <el-row>
                  <el-col :span="12" style="margin-left: 25%">
                    <el-input v-model="hotInput" placeholder="请输入内容" clearable></el-input>
                  </el-col>
                  <el-col :span="4">
                    <el-button type="primary" @click="hotFind">查询</el-button>
                  </el-col>
                </el-row>
                <el-row>
                  <el-col>
                    <div id="con" style="height: 600px;width: 100%">

                    </div>
                  </el-col>
                </el-row>
              </div>
              <span slot="footer" class="dialog-footer">
                <el-button @click="dialogVisible = false">取 消</el-button>
                <el-button type="primary" @click="dialogVisible = false">确 定</el-button>
              </span>
            </el-dialog>
          </el-col>
        </el-row>
        <el-row>

          <div id="container" style="height: 600px;width: 100%">

          </div>
        </el-row>
      </el-main>
      <el-aside width="400px" style="line-height: normal">
        <div>
          <el-row>
            <el-col :span="6" style="margin-top: 150px">
              <div style="font-size: 20px">文献推荐</div>
            </el-col>
          </el-row>
          <el-row style="margin-top: 20px">
            <el-col :span="24">
              <el-card class="card">
                <div v-for="item in this.CorrelationData" :key="item">
                  <div>
                    <span>{{item.id}}</span>
                    <span>{{item.title}}</span>
                    <span>{{item.author}}</span>
                  </div>

                </div>
              </el-card>
            </el-col>
          </el-row>
        </div>
      </el-aside>

    </el-container>
  </el-container>
  <!--<div class="login-a">-->
  <!---->
  <!--</div>-->
  <!--</div>-->
</template>

<script>

  import Sidebar from "@/components/common/Sidebar";
  import echarts from 'echarts'
  import $ from 'jquery'


  export default {

    data: function () {
      return {
        hotInput: '',
        dialogVisible: false,
        CorrelationData: []

      }
    },
    components: {
      Sidebar
    },
    mounted() {
      var url = 'http://localhost:8080/api/CorrelationData';
      this.$axios.get(url).then((res) => {
        this.CorrelationData = res.data.data;
        console.log(this.CorrelationData)
      })
    },
    methods: {
      goBackHome() {
        this.$router.push({
          path: '/HomePage',
          query: {

          }
        })
      },
      searchButton(){
        var dom = document.getElementById("container");
        var myChart = echarts.init(dom);
        var app = {};
        let option = null;
        myChart.showLoading();
        $.get('http://localhost:8080/api/npmdepgraph', function (data) {
          myChart.hideLoading();
          myChart.setOption(option = {
            title: {
              text: ''
            },
            animationDurationUpdate: 1500,
            animationEasingUpdate: 'quinticInOut',
            series : [
              {
                type: 'graph',
                layout: 'none',
                // progressiveThreshold: 700,
                data: data.data.nodes.map(function (node) {
                  return {
                    x: node.x,
                    y: node.y,
                    id: node.id,
                    name: node.label,
                    symbolSize: node.size,
                    itemStyle: {
                      normal: {
                        color: node.color
                      }
                    }
                  };
                }),
                edges: data.data.edges.map(function (edge) {
                  return {
                    source: edge.sourceID,
                    target: edge.targetID
                  };
                }),
                label: {
                  emphasis: {
                    position: 'right',
                    show: true
                  }
                },
                roam: true,
                focusNodeAdjacency: true,
                lineStyle: {
                  normal: {
                    width: 0.5,
                    curveness: 0.3,
                    opacity: 0.7
                  }
                }
              }
            ]
          }, true);
        });
        if (option && typeof option === "object") {
          myChart.setOption(option, true);
        }
      },
      hotFind(){

        // var dom = document.getElementById("con");
        // var myChart = echarts.init(dom);
        // var app = {};
        // let option = null;
        // option = {
        //   xAxis: {
        //     type: 'category',
        //     data: ['2010', '2011', '2012', '2013', '2014', '2015', '2016']
        //   },
        //   yAxis: {
        //     type: 'value'
        //   },
        //   series: [{
        //     data: [820, 932, 901, 934, 1290, 1330, 1320],
        //     type: 'line'
        //   }]
        // };
        //
        // if (option && typeof option === "object") {
        //   myChart.setOption(option, true);
        // }
        var dom = document.getElementById("con");
        var myChart = echarts.init(dom);
        var app = {};
        let option = null;

        myChart.showLoading();

        $.get('http://localhost:8080/api/life_expectancy', function (data) {
          myChart.hideLoading();

          var itemStyle = {
            normal: {
              opacity: 0.8,
              shadowBlur: 10,
              shadowOffsetX: 0,
              shadowOffsetY: 0,
              shadowColor: 'rgba(0, 0, 0, 0.5)'
            }
          };

          var sizeFunction = function (x) {
            var y = Math.sqrt(x / 5e8) + 0.1;
            return y * 80;
          };
          // Schema:
          var schema = [
            {name: 'Income', index: 0, text: '热词引用量', unit: '万'},
            {name: 'LifeExpectancy', index: 1, text: '人均使用量', unit: '个'},
            {name: 'Population', index: 2, text: '总数', unit: ''},
            {name: 'Country', index: 3, text: '国家', unit: ''}
          ];

          option = {
            baseOption: {
              timeline: {
                axisType: 'category',
                orient: 'vertical',
                autoPlay: true,
                inverse: true,
                playInterval: 1000,
                left: null,
                right: 0,
                top: 20,
                bottom: 20,
                width: 55,
                height: null,
                label: {
                  normal: {
                    textStyle: {
                      color: '#999'
                    }
                  },
                  emphasis: {
                    textStyle: {
                      color: '#fff'
                    }
                  }
                },
                symbol: 'none',
                lineStyle: {
                  color: '#555'
                },
                checkpointStyle: {
                  color: '#bbb',
                  borderColor: '#777',
                  borderWidth: 2
                },
                controlStyle: {
                  showNextBtn: false,
                  showPrevBtn: false,
                  normal: {
                    color: '#666',
                    borderColor: '#666'
                  },
                  emphasis: {
                    color: '#aaa',
                    borderColor: '#aaa'
                  }
                },
                data: []
              },
              backgroundColor: '#404a59',
              title: [{
                text: data.data.timeline[0],
                textAlign: 'center',
                left: '63%',
                top: '55%',
                textStyle: {
                  fontSize: 100,
                  color: 'rgba(255, 255, 255, 0.7)'
                }
              }, {
                text: '热词引用趋势',
                left: 'center',
                top: 10,
                textStyle: {
                  color: '#aaa',
                  fontWeight: 'normal',
                  fontSize: 20
                }
              }],
              tooltip: {
                padding: 5,
                backgroundColor: '#222',
                borderColor: '#777',
                borderWidth: 1,
                formatter: function (obj) {
                  var value = obj.value;
                  return schema[3].text + '：' + value[3] + '<br>'
                    + schema[1].text + '：' + value[1] + schema[1].unit + '<br>'
                    + schema[0].text + '：' + value[0] + schema[0].unit + '<br>'
                    + schema[2].text + '：' + value[2] + '<br>';
                }
              },
              grid: {
                top: 100,
                containLabel: true,
                left: 30,
                right: '110'
              },
              xAxis: {
                type: 'log',
                name: '各国平均引用',
                max: 100000,
                min: 300,
                nameGap: 25,
                nameLocation: 'middle',
                nameTextStyle: {
                  fontSize: 18
                },
                splitLine: {
                  show: false
                },
                axisLine: {
                  lineStyle: {
                    color: '#ccc'
                  }
                },
                axisLabel: {
                  formatter: '{value} '
                }
              },
              yAxis: {
                type: 'value',
                name: '人均引用',
                max: 100,
                nameTextStyle: {
                  color: '#ccc',
                  fontSize: 18
                },
                axisLine: {
                  lineStyle: {
                    color: '#ccc'
                  }
                },
                splitLine: {
                  show: false
                },
                axisLabel: {
                  formatter: '{value} 次'
                }
              },
              visualMap: [
                {
                  show: false,
                  dimension: 3,
                  categories: data.data.counties,
                  calculable: true,
                  precision: 0.1,
                  textGap: 30,
                  textStyle: {
                    color: '#ccc'
                  },
                  inRange: {
                    color: (function () {
                      var colors = ['#bcd3bb', '#e88f70', '#edc1a5', '#9dc5c8', '#e1e8c8', '#7b7c68', '#e5b5b5', '#f0b489', '#928ea8', '#bda29a'];
                      return colors.concat(colors);
                    })()
                  }
                }
              ],
              series: [
                {
                  type: 'scatter',
                  itemStyle: itemStyle,
                  data: data.data.series[0],
                  symbolSize: function(val) {
                    return sizeFunction(val[2]);
                  }
                }
              ],
              animationDurationUpdate: 1000,
              animationEasingUpdate: 'quinticInOut'
            },
            options: []
          };

          for (var n = 0; n < data.data.timeline.length; n++) {
            option.baseOption.timeline.data.push(data.data.timeline[n]);
            option.options.push({
              title: {
                show: true,
                'text': data.data.timeline[n] + ''
              },
              series: {
                name: data.data.timeline[n],
                type: 'scatter',
                itemStyle: itemStyle,
                data: data.data.series[n],
                symbolSize: function(val) {
                  return sizeFunction(val[2]);
                }
              }
            });
          }

          myChart.setOption(option);

        });
        if (option && typeof option === "object") {
          myChart.setOption(option, true);
        }
      }

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
    background-color: #E0E0E0;
  }
  .grid-content {
    border-radius: 4px;
    min-height: 36px;
    font-family: 'SimHei';
    font-weight: bold;
    text-align: center;
  }
  .fs36 {
    font-size: 36px;
    letter-spacing: 22px;
    color: #606266;
  }
  .sibebar{
    text-align: center;
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
  .el-aside {

    color: #333;
    text-align: center;
    line-height: 200px;
  }

  .el-main {

    color: #333;
    text-align: center;
    line-height: 160px;
  }
  .row1{
    margin-top: 70px;
    background: white;
    box-shadow: 0 2px 4px rgba(0, 0, 0, .12), 0 0 6px rgba(0, 0, 0, .04);
    margin-left: 20px;
    margin-right: 20px;
    height: 600px;
  }
  .card{
    width: 90%;
    height: 25%;
  }

</style>
