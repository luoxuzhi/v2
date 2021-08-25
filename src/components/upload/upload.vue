<template>
  <div class="upload-wrapper">
    <el-upload
      ref="upload"
      :auto-upload="false"
      :multiple="true"
      action="/koaserver/uploadfiles"
      :file-list="fileList"
      :http-request="customHttpRequest"
      :before-remove="handleRemove"
    >
      <i class="el-icon-plus"></i>
    </el-upload>
    <el-dialog :visible.sync="dialogVisible">
      <img width="100%" :src="dialogImageUrl" alt="" />
    </el-dialog>
    <p>注：无论上传一个文件还是多个文件，都只调一次接口</p>
    <el-button size="mini" type="primary" @click="useSeperateInterface"
      >useSeperateInterfaceUpload(单文件、多文件接口不同)</el-button
    >
    <el-button size="mini" type="primary" @click="useTotalInterface"
      >useTotalInterfaceUpload(同一接口上传)</el-button
    >
    <el-button size="mini" type="primary" @click="playMusic"
      >点击播放像我这样的人</el-button
    >

    <!-- 本地图片循环渲染要用require -->
    <!-- <div v-for="item in list" :key="item">
      <img class="image" :src="require('../../assets/'+item+'.png')" alt="">
    </div> -->
    <test :out-function="outFunc" @change="outFunc"
      >this is father num change by child by props function:{{ num }}</test
    >
    <div>computed getter and setter review:</div>
    <div>
      <div>
        computedValue:
        <el-input size="mini" type="text" v-model="computedValue" />
      </div>
      <div>computedValue setter:{{ computedSet }}</div>
    </div>
    <audio src="/uploads/6600_20190913224853.mp3" ref="audio"></audio>
  </div>
</template>

<script>
import Test from '@/components/test/test'
import axios from 'axios'
export default {
  components: { Test },
  data() {
    return {
      dialogImageUrl: '',
      dialogVisible: false,
      ouboolean: 'upload',
      num: 5,
      fileList: [],
      list: ['one', 'two', 'three'],
      computedSet: 0,
      fileData: '',
      uploadFileUrl: '/koaserver/uploadfile',
      uploadFilesUrl: '/koaserver/uploadfiles'
    }
  },
  methods: {
    outFunc(value) {
      // console.log('verify this parent components:',this.dialogVisible)
      // this.ouboolean = !this.ouboolean
      // console.log('this.ouboolean:',this.ouboolean)
      this.num++
      this.computedValue += 1
      return this.num * value
    },
    handleRemove(file, fileList) {
      console.log(file, fileList)
    },
    handlePreview(file) { },
    // 使用分开的接口
    useSeperateInterface() {
      this.fileData = new FormData()
      this.$refs.upload.submit()
      let url = this.isMulFile ? this.uploadFilesUrl : this.uploadFileUrl
      axios.post(url, this.fileData).then(res => {
        this.$refs.upload.clearFiles()
      }).catch(err => console.log(err))
    },
    // 单文件多文件使用同一个接口
    useTotalInterface() {
      this.fileData = new FormData()
      this.$refs.upload.submit()
      this.fileData.append('name', 'xiaoluo')
      axios.post('/koaserver/upload', this.fileData).then(res => {
        this.$refs.upload.clearFiles()
      }).catch(err => console.log(err))
    },
    // 多文件上传的时候，有多少个文件就会执行多少次customHttpRequest
    customHttpRequest(file) {
      // append files还是file与后台协商
      // this.fileData.append('files',file.file)
      this.fileData.append('file', file.file)
    },
    playMusic() {
      this.$refs.audio.play()
    },
    handleNumChange() {
      console.log('this num:', this.num)
    }
  },
  watch: {
    num: 'handleNumChange'
  },
  computed: {
    computedValue: {
      get() {
        return this.computedSet
      },
      set(val) {
        console.log(val)
        this.computedSet = val++
      }
    },
    isMulFile() {
      return this.$refs.upload.uploadFiles.length > 1
    }
  }
}
</script>

<style lang="stylus">
.upload-wrapper {
  .el-icon-plus {
    font-size: 40px;
  }
}

.image {
  width: 100px;
  height: 100px;
}
</style>