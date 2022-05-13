<template>
  <div>
    <Header></Header>
    <div class="content">
      <Nuxt />
    </div>
    <Footer></Footer>
  </div>
</template>
<script>
  import Header from './header.vue'
  import Footer from './footer.vue'
  export default {
    components: {
      Header,
      Footer
    }
  }

</script>
<style lang="scss">
  body {
    background: #202024;
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  } 
</style>

