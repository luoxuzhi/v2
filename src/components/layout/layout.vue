<template>
  <div class="layout">
    <div class="float-layout">
      <div class="left">left</div>
      <div class="right">right</div>
      <div class="middle">middle</div>
    </div>
    <div class="two">
      <div class="two-left">two-left</div>
      <div class="two-right">two-right</div>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
  export default{}
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
  .float-layout
    overflow hidden
    height 300px
    margin-bottom 10px
  .left
    float left
    width 300px
    height 300px
    background #0A4CFE
  .right
    float right
    width 300px
    height 300px
    background #0A4CFE
  .middle
    height 300px
    margin-left 300px
    margin-right 300px
    background #AB9AFA
    transition all 1s ease-in
    &:hover
      background #FF5200
  .two-left
    float left
    width 300px
    height 300px
    background #000
  .two-right
    margin-left 300px
    height 300px
    background #0A4CFE
</style>
