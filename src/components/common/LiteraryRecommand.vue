<!-- 文情推荐 -->
<template>

  	<div class="login-a">
	 	<el-container>
	      <el-header >
      		<el-row style="margin-top: 5px;">
              <el-col :span="22"><div class="grid-content fs36">文情推荐</div></el-col>
              <el-col :span="2"><div class="grid-content fs36"><el-button type="primary" icon="el-icon-back" @click="goBackHome">返回主页</el-button></div></el-col>
            </el-row>
	        <el-row>
	          <Sidebar />
	        </el-row>
	      </el-header>
	    </el-container>
    </div>
  </div>
</template>

<script>
    import Sidebar from "@/components/common/Sidebar"; 
    export default {
      data: function () {
        return {
        }
      },
      components: {
        Sidebar
      },
      mounted() {
        
      },
      methods: {
      	goBackHome() {
      		this.$router.push({
      			path: '/HomePage',
      			query: {

      			}
      		})
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
</style>
