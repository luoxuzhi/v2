<template>
  <div class="one">

    <!-- <span @click="handleClick">click me</span>
    <slot></slot> -->
  </div>
</template>

<script type="text/ecmascript-6">
export default {
  methods: {
    handleClick() {
      this.bus.$emit('message', Math.random())
      this.$emit('messageinner')
    }
  }
}
</script>

<style scoped lang="stylus" rel="stylesheet/stylus"></style>
