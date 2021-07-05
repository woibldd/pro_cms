<template>
  <div id="Header"  :class="{fixed:fixed,header:true}">
       <div class="header_wapper">
          <slot></slot>
       </div>
  </div>
</template>

<script>
export default {
  name: "Header",
  props:{
   fixed:{
     type:Boolean,
     default:()=>true
   }
  },
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
.header{
  .header_wapper{
     width: 100vw;
  }
}
.fixed{
  position:fixed;
  top: 0;
  left: 0px;
  z-index: 99;
}
</style>
