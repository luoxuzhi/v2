<template>
  <div class="notify-instance">
    <button @click="notify">autoclose-notify</button>
    <button @click="notifyUnclose">unautoclose-notify</button>
    <button @click="autoclosemessage">atuoeclose-message</button>
    <button @click="unclosemessage">unautoclose-message</button>
    <button @click="vueFunction">vueFunction,autoclosemessage</button>
  </div>
</template>

<script type="text/ecmascript-6">
import Vue from 'vue'
export default {
  methods: {
    notify() {
      this.$notify({
        content: 'test autoClose',
        btn: 'close',
      })
    },
    notifyUnclose() {
      this.$notify({
        content: 'test unautoclose',
        btn: 'close',
        autoClose: false,
      })
    },
    autoclosemessage() {
      this.$message({
        content: 'test message',
      })
    },
    unclosemessage() {
      this.$message({
        content: 'unclosemessage',
        btn: 'close',
        autoClose: false,
      })
    },
    vueFunction() {
      Vue.message({
        content: 'this message created by Vue.message ',
      })
    },
  },
}
</script>

<style scoped lang="stylus" rel="stylesheet/stylus"></style>
