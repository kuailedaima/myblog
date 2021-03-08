<template>
  <div id="detail">
      <article v-html="value" ></article>
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
            value: `<blockquote>
            <div class="hljs-center">
<h1><a id="_2"></a>图片</h1>
</div>
<h1><a id="_5"></a>飞飞飞</h1>
<p><img src="http://localhost:3000/image/blogillstration/AmKQ_pjZll2PmyCT6dyUWEai.png" alt="image.png" /></p>`
,
            defaultData: "preview"
        }
    },
    methods: {

    }
};
</script>

<style scoped>

</style>
