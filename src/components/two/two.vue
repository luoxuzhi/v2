<template>
  <div class="two">
    two
    <!-- <input type="text" @input="handleInput" :value="valueone"> -->
  </div>
</template>

<script type="text/ecmascript-6">
  export default{
    name:'Two',
    data(){
      return {datatwo:'999999999999999'}
    },
    model:{
      prop:'valueone',
      event:'change'
    },
    props:['valueone'],
    methods:{
      handleInput(e){
        this.$emit('change',e.target.value)
      }
    },
    render(h){
      let {$slots} = this
      return h('div',{
        class:'two',
        attrs:{
          id:'two'
        }
      },[
        $slots.default,
        $slots.header,
        $slots.footer,
        'this is component two',
        'this is component two-1'
      ]
      )
    },
    beforeRouteEnter(to,from,next){
      if (from.path==='/one') {
        console.log('this is come from /one')
      }
      next(vm=>{
        console.log(vm.datatwo)
      })
    }
  }
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
  
</style>
