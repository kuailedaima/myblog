<template>
  <div id="technology">
    <button @click="write">写博客</button>
    <button @click="show">展示博客</button>
  </div>
</template>

<script>
export default {
    methods: {
      write(){
        this.$router.push('/writeblog')
      },
      show(){
        this.$router.push('/detail')
      }

    }
};
</script>

<style scoped>

</style>
