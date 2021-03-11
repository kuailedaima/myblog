<template>
  <div id="register">
    <el-dialog
      title="注册"
      :visible.sync="DialogVisible"
      width="30%"
      center>
    <div class="phone">
      <input node-type="phone-num" class="phone-input" type="text" 
      value="" placeholder="手机号" v-model="account">
    </div>
    <div class="phone">
      <input node-type="phone-num" class="phone-input" type="text" 
      value="" placeholder="昵称" v-model="nickname">
    </div>
    <div class="phone">
      <input node-type="phone-num" class="phone-input" type="text" 
      value="" placeholder="输入密码" v-model="password">
    </div>
  
    <div class="phone">
      <button class="login-button" @click="signup">注册</button>
    </div>
  </el-dialog>
  </div>
</template>

<script>
import Vue from 'vue';
import {Dialog,Button} from 'element-ui';
Vue.use(Dialog);
Vue.use(Button);

import qs from 'qs'
export default {
    data(){
        return {
            DialogVisible:false,
            nickname:null,
            account:null,
            password:null
        }
    },
    methods: {
      DialogVisibleChange(){
          this.DialogVisible = !this.DialogVisible
      },

      signup() {
        let data = {
          nickname:this.nickname,
          account:this.account,
          password:this.password
        }
        if(this.nickname === null || this.nickname.length === 0) {
          alert("昵称不能为空");
        } else if(this.account === null || this.account.length === 0) {
          alert("账号不能为空");
        } else if(this.password === null || this.password.length === 0) {
          alert("密码不能为空");
        } else {
          this.$axios.post("/register",qs.stringify(data)).then(res => {
          console.log(res);
          switch(res){
            case -1 :
              alert("用户名已经存在！");
              break;
            case 0:
              alert("注册失败");
              break;
            case 1:
              alert("注册成功");
              this.$router.push('/login');
              break;
          }
        }).catch(err =>{
          console.log(err);
          alert("出错了，请稍后!");
        })
        }
        
      }
    }
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


</style>
