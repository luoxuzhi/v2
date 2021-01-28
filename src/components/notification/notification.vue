<template>
  <transition name="fade"
    @after-leave="afterLeave"
    @after-enter="afterEnter">
    <div
      v-show="visible"
      :style="style"
      @mouseleave="handleMouseleave"
      @mouseenter="handleMouseenter"
      class="notification">
      <span class="content">{{content}}</span>
      <a @click="handleClose" class="close">{{btn}}</a>
    </div>
  </transition>
</template>

<script type="text/ecmascript-6">
  export default{
    name:'Notification',
    props:{
      content:{
        type:String,
        required:true
      },
      btn:{
        type:String,
        default:'关闭'
      }
    },
    data(){
      return {
        visible:false,
        verticalOffset:0,
        autoClose:true,
        autoCloseTime:2000,
        height:0
      }
    },
    computed:{
      style(){
        return {
          position:'fixed',
          right:'10px',
          bottom:`${this.verticalOffset}px`
        }
      }
    },
    methods:{
      handleClose(e){
        e.preventDefault()
        this.$emit('close')
      },
      afterLeave(){
        this.$emit('closed')
      },
      createTimer(){
        if (this.autoClose && this.autoCloseTime) {
          this.timer = setTimeout(()=>{
            this.visible = false
          }, this.autoCloseTime)
        }
      },
      clearTimer(){
        if (!this.timer) return
        clearTimeout(this.timer)
      },
      afterEnter(){
        this.height = this.$el.offsetHeight
      },
      handleMouseenter(){
        this.clearTimer()
      },
      handleMouseleave(){
        this.createTimer()
      }
    },
    mounted(){
      this.createTimer()
    },
    beforeDestroy(){
      this.clearTimer()
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
  .notification
    width 200px
    padding 10px
    background #634E4E
    transition all .5s
    .content
      color #999
    .close
      float right
      color #A70808
      font-size 12px
      cursor pointer
  .fade-enter,.fade-leave-to
    opacity 0
    transform translateY(100%)
</style>
