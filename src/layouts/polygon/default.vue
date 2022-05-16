<template>
  <div id="polygon" >
    <Header></Header>
    <div>
      <Nuxt />
    </div>
    <Footer></Footer>
  </div>
</template>
<script>
import Footer from "./footer.vue";
import Header from "./header.vue";
export default {
  components: {
    Header,
    Footer
  }
};
</script>
<style lang="scss">
#polygon {
  background: #202024;
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  overflow: hidden;
}
</style>
