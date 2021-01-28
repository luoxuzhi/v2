<template>
  <div class="optionthreeone-wrapper" @click="num++">optionthreeone-------num:{{ num }}</div>
</template>

<script type="text/ecmascript-6">
  export default{
    data(){
      return {
        num:999
      }
    },
    inject:['app'],
    beforeRouteLeave (to, from, next) {
        console.log(!this.app.showTabs.includes(from.path.substring(1)))
      if (!this.app.showTabs.includes(from.path.substring(1))) {
        this.$destroy()
      }
      next()
    }
  }
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">

</style>