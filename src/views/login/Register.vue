<template>
  <div id="register">
      <div>昵称<input type="text" placeholder="输入昵称" v-model="nickname"/></div>
      <div>账号<input type="text" placeholder="输入手机号或邮箱" v-model="account"/></div>
      <div>密码<input type="password" v-model="password"/></div>
      <button @click="signup">注册</button>
  </div>
</template>

<script>
import qs from 'qs'
export default {
  data(){
    return {
      nickname:null,
      account:null,
      password:null
    }
  },
    methods: {
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

</style>
