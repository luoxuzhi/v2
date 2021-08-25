<template>
  <div class="notify-instance">
    <el-button size="mini" @click="notify">autoclose-notify</el-button>
    <el-button size="mini" @click="notifyUnclose">unautoclose-notify</el-button>
    <el-button size="mini" @click="autoclosemessage">atuoeclose-message</el-button>
    <el-button size="mini" @click="unclosemessage">unautoclose-message</el-button>
    <el-button size="mini" @click="vueFunction">vueFunction,autoclosemessage</el-button>
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
