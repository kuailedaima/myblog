<template>
  <div id="logins">
    <el-dialog
      title="登陆"
      :visible.sync="centerDialogVisible"
      width="30%"
      center>
  <!-- <span>需要注意的是内容是默认不居中的</span> -->
  <!-- <span>登陆</span><input type="text"/> -->
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
          placeholder="密码">
  </div>
  <span slot="footer" class="dialog-footer">
    <el-button @click="centerDialogVisible = false">取 消</el-button>
    <el-button type="primary" @click="centerDialogVisible = false">确 定</el-button>
  </span>
</el-dialog>
  </div>
</template>

<script>
import Vue from 'vue';
import {Dialog,Button} from 'element-ui';
Vue.use(Dialog);
Vue.use(Button);
export default {
    data() {
      return {
        centerDialogVisible: false
      };
    },
   
    // props: {
    //     iscenterDialogVisible:null
    // },
    methods: {
      jump(){
        this.centerDialogVisible = !this.centerDialogVisible
      }

    },
};
</script>

<style scoped>
  .phone {
    margin-bottom: 20px;
  }
  .phone-input{
    width: 314px;
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

  .phone-input input :focus {
    border-color: red;
    outline: 0;
  }

</style>
