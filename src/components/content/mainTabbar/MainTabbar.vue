<template>
<el-menu
  :default-active="activeIndex2"
  class="el-menu-demo"
  mode="horizontal"
  @select="handleSelect"
  background-color="#545c64"
  text-color="#fff"
  active-text-color="#ffd04b">
  <el-menu-item index="1">主页</el-menu-item>
  <el-menu-item index="2">技术</el-menu-item>
  <el-menu-item index="3">消息中心</el-menu-item>
  <el-menu-item index="4"><a href="https://www.ele.me" target="_blank">订单管理</a></el-menu-item>
  <el-menu-item index="5" class="login" @click="sign">登陆/注册</el-menu-item>
</el-menu>
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
      },
      sign(){
        console.log('登陆');
        this.$router.push('/login').catch(err => {
          console.log('输出报错',err)
        })
        console.log('zhuc');
      }
    }
};
</script>

<style scoped>
  .login {
    float: right ;
  }

</style>
