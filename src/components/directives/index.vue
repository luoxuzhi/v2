<template>
  <div class="directives">
    <input v-focus:header>
    <div :key="key" v-for="(value,key,index) in obj">{{value}}--{{key}}--{{index}}</div>
  </div>
</template>

<script type="text/ecmascript-6">
  export default{
    data(){
      return {
        obj:{
          name:'xiaoming',
          age:18
        }
      }
    },
    directives:{
      focus:{
        inserted:(el)=>{
          el.focus()
        },
        unbind:(el,binding)=>{
          console.log(binding.arg)
        }
      }
    }
  }
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">

</style>
