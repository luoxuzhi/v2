<template>
	<div>
		{{ num }}----
		<el-button @click="changenum">click</el-button>
	</div>
</template>

<script type="text/ecmascript-6">
import debounce from './debounce'
export default{
  data(){
    return {num:9}
  },
  props:{
    value:''
  },
  // model:{
  //   prop:'value',
  //   event:'change'
  // },
  methods:{
    changenum(){
      this.num++
      this.$emit('input',this.num)
    }
  },
  watch:{
    value(newVal){
      this.num = newVal
    }
  },
  created(){
    let handler = debounce((newNum)=>console.log(newNum),2000)
    this.$watch('num',handler)
  }
}
</script>

<style scoped lang="stylus" rel="stylesheet/stylus"></style>
