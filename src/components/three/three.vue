
<template>
  <div class="cliclme" @click="onFuntion">
    <!-- <anchors :list="list"></anchors> -->
    three
  </div>
</template>
<script type="text/ecmascript-6">
  export default{
    data(){
      return {
        msg:'hahaaha'
      }
    },
    props:{
      name:{
        type:String,
        default:'wangxiaoshuai'
      },
      list:Array
    },
    created(){
      this.$on('test',(val,valone)=>{
        console.log(val,valone)
      })
    },
    methods:{
      onFuntion(){
        this.$emit('test',7,8)
      }
    }
    // render(h){
    //   // const {msg,name} = this
    //   return h('div',{},'this is render function')
    // }
  }
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
  .list-item {
    display: inline-block;
    margin-right: 10px;
  }
  .list-enter-active, .list-leave-active {
    transition: all 1s;
  }
  .list-enter, .list-leave-to
  /* .list-leave-active for below version 2.1.8 */ {
    opacity: 0;
    transform: translateY(30px);
  }
</style>
