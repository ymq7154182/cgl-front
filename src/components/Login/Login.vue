<template>
  <div>
    <div class="login-a">
      <div class="login-b">
        <el-form :model="ruleForm" :rules="rules" ref="ruleForm" class="demo-ruleForm">
          <div class="wrap_center">
            <ul>
              <li><h2>用户登录</h2></li>
              <dl class="gg">
                <el-form-item prop="username">
                  <el-input v-model="ruleForm.username" placeholder="请输入用户名"></el-input>
                </el-form-item>
                <el-form-item prop="password">
                  <el-input type="password" placeholder="请输入密码" v-model="ruleForm.password" @keyup.enter.native="submitForm('ruleForm')"></el-input>
                </el-form-item>
                <el-form-item prop="isAutoLogin">
                  <label class="label">下次自动登录</label>
                  <el-switch on-text="" off-text="" v-model="ruleForm.isAutoLogin"></el-switch>
                </el-form-item>
                <div class="login-btn">
                  <el-button type="primary" :loading="isLoading" @click="submitForm('ruleForm')">登录</el-button>
                </div>
              </dl>
            </ul>
          </div>

        </el-form>

      </div>
    </div>
  </div>
</template>

<script>
    export default {
        data: function () {
          return {
            isLoading:false,
            ruleForm: {
              username: '',
              password: '',
              isAutoLogin: false
            },
            rules: {
              username: [
                { required: true, message: '请输入用户名', trigger: 'blur' },
                { min: 4, max: 16, message: '[用户名]请保持在[4]到[16]个字符', trigger: 'blur' }
              ],
              password: [
                { required: true, message: '请输入密码', trigger: 'blur' },
                { min: 4, max: 16, message: '[密码]请保持在[4]到[16]个字符', trigger: 'blur' }
              ]
            }
          }
        },
      mounted() {
        if(this.$store.state.user.login) {
          this.$router.push('/HomePage');
        }
        // this.$store.commit(types.TITLE, 'Login');
      },
      methods: {
        submitForm(formName) {
          this.isLoading = true;
          var querystring = require('querystring');
          this.$refs[formName].validate((valid) => {
            if (valid) {
              console.log('点击登录')
              console.log(this.$store.state.user.login)
              if (!this.$store.state.user.login) {
                this.$store.dispatch('doLogin',
                  {
                    "id":"2c948082619333da0161933438ff0001",
                    "username":"yangmingqi",
                    "name":"yangmingqi",
                  })
                this.$router.push('/HomePage');
                this.$message.success('欢迎登录系统');
                this.isLoading = false;
              }
            } else {
              console.log('error submit!!');
              this.isLoading = false;
              return false;
            }
          });
        }
      }
    }
</script>

<style>
  .login-a {
    width: 100%;
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    text-align: center;
  }
  .login-b {
    width: 100%;
    height: 100%;
    background-size: cover;
    overflow: hidden;
    background-image: url("http://zhongkeruitong.top:11030/%E5%9B%BE%E4%B9%A6%E9%A6%86%E7%B3%BB%E7%BB%9F%E5%9B%BE%E7%89%871.jpg");
    background-position: center center;
    box-shadow: 0 0px 3px rgba(0,0,0,.5);
    text-align: center;
  }
  .wrap_center ul {
    position: absolute;
    width: 300px;
    border-radius: 5px;
    box-shadow: 0 0px 5px rgba(0,0,0,.2);
    margin-top: 10%;
    margin-left: 40%;
    text-align: center;
  }
  .wrap_center li {
    text-align: center;
    color: #fff;
    font-size: 12px;
    line-height: 30px;
    padding: 0 0px 0px 0px;
    width: 100%;
  }
  .wrap_center li h2 {
    color: #FFFFFF;
    font-size: 20px;
    line-height: 40px;
    display: block;
    text-align: center;
    padding: 20px 0 5px 0;
  }

  .wrap_center li dl{
    width: 100%;
    text-align: center;
  }
  .label {
    color: white;
    line-height: 30px;
  }
  .login-btn {
    text-align: center;
  }
  .login-btn button {
    width: 100%;
    height: 36px;
  }
</style>
