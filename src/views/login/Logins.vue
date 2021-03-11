<template>
  <div>
    <div id="logins" v-if="islogin">
    <el-dialog
      title="登录"
      :visible.sync="centerDialogVisible"
      width="30%"
      center>
  <div class="phone">
    <input node-type="phone-num" 
          class="phone-input" 
          type="text" value="" 
          placeholder="手机号"
          v-model="useraccount">
  </div>
  <div class="phone">
    <input node-type="phone-num" 
          class="phone-input" 
          type="text" value="" 
          placeholder="输入密码"
          v-model="userpassword">
  </div>
  <div class="remember">
    <input id="remember_password" class="remebber_pass" type="checkbox" />记住密码
  </div>
  
  <div class="phone">
    <button class="login-button" @click="login">登录</button>
  </div>
  <div class="phone">
    <span class="forgetpass"><a>忘记密码</a></span>
  </div>
  <br>
  <div class="register">
    <span>没有账号？<a href="#" @click="changeInterface">立即注册一个</a></span>
  </div>
  <!-- <span slot="footer" class="dialog-footer">
    <el-button @click="centerDialogVisible = false">取 消</el-button>
    <el-button type="primary" @click="centerDialogVisible = false">确 定</el-button>
  </span> -->
</el-dialog>
  </div>
<registers ref="register" v-show="!islogin"/>
  <!-- 注册界面 -->
  <!-- <div>
    <div id="logins" v-if="!islogin">
    <el-dialog
      title="注册"
      :visible.sync="centerDialogVisible"
      width="30%"
      center>
  <div class="phone">
    <input node-type="phone-num" 
          class="phone-input" 
          type="text" value="" 
          placeholder="手机号">
  </div>
  <div class="phone">
    <input node-type="phone-num" 
          class="phone-input" 
          type="text" value="" 
          placeholder="输入密码">
  </div>
  
  <div class="phone">
    <button class="login-button">注册</button>
  </div>
</el-dialog>
  </div> -->
  <!-- </div> -->
</div>
</template>

<script>
import Vue from 'vue';
import {Dialog,Button} from 'element-ui';
Vue.use(Dialog);
Vue.use(Button);

import Registers from './Registers'
import qs from 'qs'
export default {
    data() {
      return {
        useraccount:null,
        userpassword:null,
        centerDialogVisible: false,
        islogin: true
      };
    },

    components:{
      Registers
    },
   
    // props: {
    //     iscenterDialogVisible:null
    // },
    methods: {
      jump(){
        // this.centerDialogVisible = !this.centerDialogVisible
        this.centerDialogVisible = true;
        this.islogin = true
      },

      changeInterface(){
        this.islogin = !this.islogin;
        this.$refs.register.DialogVisibleChange()
      },

      login(){
            // console.log(this.useraccount);
            // console.log(this.userpassword);
            let data = {
                useraccount:this.useraccount,
                userpassword:this.userpassword
            }
            console.log(qs.stringify(data));

            // postHomeAPI(qs.stringify(data)).then(res =>{
            //     console.log(res);
            // })
            if(this.useraccount === null || this.useraccount.length ==0) {
                alert("账号不能为空");
            } else {
                if(this.userpassword === null || this.userpassword.length ==0) {
                    alert("密码不能为空");
                } else{
                    this.$axios.post("/login",qs.stringify(data)).then(res=>{
                    //回调处理
                    // console.log(res)
                        switch(res){
					    case 0: 
						    alert("用户名或密码错误!");
						    break;
					    case 1:
                            alert("登陆成功！")
                            this.$router.push('/')
						    break;
					    case 2:
                            alert("出错了请稍后！")
						    break;
				        }
                    }).catch(err=>{
                        console.log(err)
                     })
                }
            }
        },
    },

};
</script>

<style scoped>
  .phone {
    margin-bottom: 20px;
  }
  .phone-input, .login-button{
    /* width: 314px; */
    width: 90%;
    height: 38px;
    border: 1px solid;
    border-color: black;
    /* border: 0; */
    margin: 0 17px;
    color: #000;
    font-size: 14px;
    line-height: 38px;
    font-family: "Microsoft YaHei";
  }

  input :focus {
    border-color: red;
    outline: 0;
  }

  .login-button {
    background-color: #007fff;
  }

  .forgetpass {
    float: right;
    padding-right: 30px;
  }

  span {
    font-size: 14px;
    font-family: "Microsoft YaHei"
  }
  .remember{
    margin-left:20px;
    margin-bottom: 20px;
  }
  .remember_pass {
    float: left;
    padding-left: 40px;
  }

  .register {
    margin-top: 20px;
    height: 14px;
    width: 90%;
    text-align: center;
  }

</style>
