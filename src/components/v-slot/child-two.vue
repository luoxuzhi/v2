<template>
  <div class="another-slot">
    <div>
      <slot name="header" msg="999">this is default header</slot>
    </div>
    <slot data="99999"> this is default body.</slot>
    <div @click="handleFooterClick">
      <slot name="footer" message="this is footer message">
        this is default footer
      </slot>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
  export default{
    // render(h){
    //   return h('div',[
    //     h('main',this.$scopedSlots.default()),
    //     h('header',this.$scopedSlots.header({msg:99}))
    //   ])
    // },
    props:{
      level:{
        // required:true,
        type:Number
      }
    },
    methods:{
      handleFooterClick(){
        this.$emit('footer-click',789)
      }
    },
    mounted(){
      this.$on('footer-click',(val)=>{
        console.log(val)
      })
    }
  }
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">

</style>
