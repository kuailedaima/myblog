<template>
  <div id="technology">
    <button @click="write">写博客</button>
  </div>
</template>

<script>
export default {
    methods: {
      write(){
        this.$router.push('/writeblog')
      }

    }
};
</script>

<style scoped>

</style>
