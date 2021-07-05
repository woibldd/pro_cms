<template>
  <div id="Header">
      
  </div>
</template>

<script>
export default {
  name: "Header",
  computed:{
   
  },
  data() {
    return {
     
      info: {

      }
    };
  },
  updated(){
      console.log(11111)
  },
  async mounted() {
    await this.$nextTick();
  },
  methods: {
    onChange() {},
    onclose() {
      console.log(arguments);
    },
  },

  filters: {
   
  },
};
</script>
<style lang="scss" scoped>

</style>
