<template>
  <div class="test-wrapper">
    test
    <slot></slot>
    <button @click="handleClick">click me to test this</button>
    <p>innerNum:{{innerNum}}</p>
  </div>
</template>

<script type="text/ecmascript-6">
  export default{
    created(){
      console.log('test created')
    },
    data(){
      return { 
        testdata:99,
        innerNum:null,
        ouboolean:'test' }
    },
    props:{
      outFunction:Function
    },
    methods:{
      handleClick(){
        this.innerNum = this.outFunction(9)
        // this.$emit('change')
      }
    }
  }
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
.test-wrapper
  margin-top 60px
</style>