<template>
  <div id="app">
    <!-- <div id="nav"> -->
      <!-- <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link> -->
    <!-- </div> -->
    <!-- <div id="maintabbar">
      <main-tabbar/>
    </div> -->
    <!-- 博客头部 -->
    <header>
      <main-tabbar/>
    </header>
    <!-- 博客主体 -->
    <div id="content">
      <div id="main">
        <logins ref="logins"/>
      </div>
      <!-- 侧边栏 -->
      <div id="sidebar">
        <sidebar/>
      </div>
    </div>
    <!-- 博客底部 -->
    <footer></footer>

    
    <router-view/>
  </div>
</template>

<script>
import MainTabbar from './components/content/mainTabbar/MainTabbar'
import Sidebar from './views/sideBar/Sidebar'
import Logins from './views/login/Logins.vue';
export default {
  components:{
    MainTabbar,
    Sidebar,
    Logins
  },
  methods:{
    login(){
      this.$refs.logins.jump();
    }
  }
}
</script>
<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}

#maintabbar {
  width: 100%;
}

#sidebar {
  width: 30%;
  float: right;
  background: rgb(17, 153, 130);
}

</style>
