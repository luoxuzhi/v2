<template>
  <div class="ruleone-wrapper" v-loading="loading">
    <el-button size="mini" class="handlediv item" @click="handleClick"
      >点击模拟文件上传，后台3s后处理完成并推送前端结果</el-button
    >
    <el-button size="mini" class="handlediv item" @click="handleAdd"
      >初始数字是:
      {{ num }}，点击数字自增，如果打开了其它浏览器窗口会同步更新</el-button
    >
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
      loading: false,
      num: 99
    }
  },
  methods: {
    handleClick() {
      this.loading = true
      this.$message('模拟文件上传，3s后上传完成')
      axios.get('/wss').then(res => {
        this.serverResponse = res.data
      })
    },
    handleAdd() {
      axios.get('/wss/add', { params: { num: this.num + 1 } }).then(res => {
        this.serverResponse = res.data
      })
    }
  },
  mounted() {
    ws.onmessage = event => {
      const { msg, isCompleted, num } = JSON.parse(event.data)
      this.websocketMsg = msg
      this.loading = false
      if (isCompleted) this.$message.success('文件上传成功')
      if (num) this.num = Number(num) // 因为后端JSON.stringfy(data)了
    }
  }
}
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
.handlediv {
  cursor: pointer;
}
</style>
