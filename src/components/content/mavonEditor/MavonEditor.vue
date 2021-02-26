<template>
  <div id="mavoneditor">
      <mavon-editor v-model="value" 
                    ref= md
                    @imgAdd="$imgAdd" 
                    @save="save"/>
  </div>
</template>

<script>
import Vue from 'vue'
import mavonEditor from 'mavon-editor'
import 'mavon-editor/dist/css/index.css'

import qs from 'qs'
Vue.use(mavonEditor)
export default {
  data(){
    return {
      value: '',
    }
  },
    methods: {
      // 绑定@imgAdd event
      $imgAdd(pos, $file){
        let data = {
          image:'234'
        }
        console.log($file);
        console.log(data);
        // 第一步.将图片上传到服务器.
        // var formdata = new FormData();
        // formdata.append('image', $file);
        // console.log(formdata.image);
        this.$axios.post("/savefile",qs.stringify(data)).then(res =>{
          console.log(res);
        }).catch(err =>{
          console.log(err);
        })

      },
      save(){
        console.log(this.$refs.md.d_render);
        console.log(this.$refs.md.d_value);
      }

    }
};
</script>

<style scoped>

</style>
