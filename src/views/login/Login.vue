<template>
  <div id="login">
      <div>账号：<input type="text" placeholder="邮箱" v-model="useraccount"/></div>
      <div>密码：<input type="password" v-model="userpassword"/></div>
      <button @click="login">登陆</button>
      <div>第一次使用？<a href="" @click="register">创建一个账户</a></div>
  </div>
</template>

<script>
import {postHomeAPI} from '../../network/api'
import qs from 'qs'
export default {
    data(){
        return{
            useraccount:null,
            userpassword:null
        }
    },
    methods: {
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
        register(){
            this.$router.push('/register')
        }
    }
};
</script>

<style scoped>
    #login > div {
        margin: 4px;
    }

    input {
        width: 30%;
        height: 20px;
        border: 1px solid rgb(122, 89, 211);
        border-radius: 10px;
        background-color: #f8f8f8;
        /* outline: none; */
    }
    input :focus {
        width: 30%;
        height: 20px;
        border: 1px solid black;
        border-radius: 10px;
    }

</style>
