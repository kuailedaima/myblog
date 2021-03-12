<template>
<el-menu
  :default-active="activeIndex2"
  class="el-menu-demo"
  mode="horizontal"
  @select="handleSelect"
  background-color= "#545c64"
  text-color="#fff"
  active-text-color="#ffd04b">
  <el-menu-item index="1">主页</el-menu-item>
  <el-menu-item index="2">技术</el-menu-item>
  <el-menu-item index="3">心情随笔</el-menu-item>
  <el-menu-item index="4">留言板</el-menu-item>
  <el-menu-item index="5" class="login" @click="sign">登录/注册</el-menu-item>
  <el-menu-item indx="6" v-if="false">登录成功</el-menu-item>
</el-menu>
<!-- background-color="#545c64" -->
</template>

<script>
import Vue from 'vue';
import {Menu,Submenu, MenuItem,MenuItemGroup} from 'element-ui';
Vue.use(Menu)
Vue.use(Submenu)
Vue.use(MenuItem)
Vue.use(MenuItemGroup)
export default {
    data() {
      return {
        activeIndex: '1',
        activeIndex2: '1'
      };
    },

    methods: {
      handleSelect(key, keyPath) {
        console.log(key, keyPath);
        let index = Number(key);
        switch(index){
          case 1:
            console.log("主页");
            this.$router.push('/homepage').catch(()=>{})
            break;
          case 2:
            console.log("技术");
            this.$router.push('/technology').catch(()=>{})
            break;
          case 3:
            console.log("心情随笔");
            this.$router.push('/essay').catch(()=>{})
            break;
          case 4:
            console.log("留言板");
            this.$router.push('/message').catch(()=>{})
            break;
        }
      },
      sign(){
        console.log('登陆');
        // this.$router.push('/login').catch(err => {
        //   console.log('输出报错',err)
        // });
        this.$parent.login();
      },
    }
};
</script>

<style scoped>
  .login {
    float: right ;
  }

  #headimg {
    width: 50px;
    height: 50px;
    border-radius: 50%;
    border-color: chartreuse;
    background-color: red;
    float: right;
  }

</style>
