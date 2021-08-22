<template>
  <div class="ruleone-wrapper" v-loading="loading">
    <div class="handlediv item" @click="handleClick">点击模拟文件上传，后台3s后处理完成并推送前端结果</div>
    <div class="item">serverResponse: {{ serverResponse }}</div>
    <div class="item">websocketMsg: {{ websocketMsg }}</div>
  </div>
</template>

<script type="text/ecmascript-6">
import axios from 'axios'
import { ws } from '@/utils'
export default {
  data() {
    return {
      serverResponse: '',
      websocketMsg: '',
      loading:false
    }
  },
  methods: {
    handleClick() {
      this.loading=true
        this.$message('模拟文件上传，3s后上传完成')
      axios.get('/wss').then(res => {
        this.serverResponse = res.data
      })
    }
  },
  mounted() {
    ws.onmessage = event => {
      const {msg,isCompleted} = JSON.parse(event.data)
      this.websocketMsg = msg
      this.loading=false
      if(isCompleted) this.$message.success('文件上传成功')
    }
  }
}
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
.handlediv{
  cursor pointer
}
.item{
  line-height 40px
}
</style>