<template>
  <div id="mavoneditor">
      <mavon-editor v-model="value" 
                    ref= md
                    @imgAdd="$imgAdd" 
                    @imgDel="$imgDel"
                    @htmlCode="htmlcode"
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
      img_file: {}
    }
  },
    methods: {
      // 绑定@imgAdd event
      $imgAdd(pos, $file){
        this.img_file[pos] = $file;
        // console.log(data);
        // 第一步.将图片上传到服务器.
        // var formdata = new FormData();
        // formdata.append('image',$file);
        // let data = {
        //   img:formdata
        // }
        // console.log(formdata);
        // let config = {
        //    headers:{'Content-Type': 'multipart/form-data'}
        // }
        

      },
       $imgDel(pos){
            delete this.img_file[pos];
        },
      save(){
        this.uploadimg()
        console.log(this.$refs.md.d_render);
        console.log(this.$refs.md.d_value);
      },

      uploadimg(){
        console.log("dddd");
        var formdata = new FormData();
        for(var _img in this.img_file){
          formdata.append(_img, this.img_file[_img]);
        }
        let config = {
           headers:{'Content-Type': 'multipart/form-data'}
        }

        this.$axios.post("/savefile",formdata,config).then(res =>{
          console.log(res);
          for(var img in res){
            console.log(res[img]);
            this.$refs.md.$img2Url(img, res[img]);
          }
        }).catch(err =>{
          console.log(err);
        })
      },

      htmlcode(){
        console.log();
      }

    }
};
</script>

<style scoped>

</style>
