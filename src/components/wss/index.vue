<template>
  <div class="ruleone-wrapper">
    <div @click="handleClick">click me to request server</div>
    <div>serverResponse:{{ serverResponse }}</div>
    <div>websocketMsg:{{ websocketMsg }}</div>
  </div>
</template>

<script type="text/ecmascript-6">
import axios from 'axios'
import { ws } from '@/utils'
export default {
  data() {
    return {
      serverResponse: '',
      websocketMsg: ''
    }
  },
  methods: {
    handleClick() {
      axios.get('/wss').then(res => {
        this.serverResponse = res.data
      })
    }
  },
  mounted() {
    ws.onmessage = event => {
      this.websocketMsg = event.data
    }
  }
}
</script>

<style scoped lang="stylus" rel="stylesheet/stylus"></style>