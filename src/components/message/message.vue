<template>
  <transition
    @after-enter="setHeight"
    @after-leave="afterLeave"
    name="message-fade">
    <div
      v-show="visible"
      @mouseenter="handleMouseenter"
      @mouseleave="handleMouseleave"
      :style="style"
      class="message">
      <div class="up">{{content}}</div>
      <div class="down">
        <a @click="handleClose" class="close">{{btn}}</a>
      </div>
    </div>
  </transition>
</template>

<script type="text/ecmascript-6">
  export default{
    name:'Message',
    props:{
      content:{
        type:String,
        required:true
      },
      btn:{
        type:String,
        default:'确定'
      },
      autoClose:{
        type:Boolean,
        default:true
      },
      autoCloseTime:{
        type:Number,
        default:2000
      }
    },
    data(){
      return {
        visible:false,
        verticalOffset:0,
        height:0,
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
    mounted(){
      this.createTimer()
    },
    methods:{
      handleClose(e){
        e.preventDefault()
        this.visible = false
      },
      setHeight(){
        this.height = this.$el.offsetHeight
      },
      afterLeave(){
        this.$emit('closed')
      },
      createTimer(){
        if (this.autoClose && this.autoCloseTime) {
          this.timer=setTimeout(()=>{
            this.visible = false
          }, this.autoCloseTime)
        }
      },
      clearTimer(){
        if (!this.timer) return
        clearTimeout(this.timer)
      },
      handleMouseleave(){
        this.createTimer()
      },
      handleMouseenter(){
        console.log('heheda')
        this.clearTimer()
      }
    },
    beforeDestroy(){
      this.clearTimer()
    }
  }
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
  .message
    width 300px
    border 1px solid #CAC5C5
    transition all .3s
    background #9B8787
    border-radius 4px
    .up
      padding 10px
      min-height 20px
      border-bottom 1px solid #CAC5C5
    .down
      position relative
      height 20px
      padding 4px
      .close
        position absolute
        right 10px
        top 50%
        font-size 12px
        transform translateY(-50%)
        color #BF1313
        cursor pointer
    &.message-fade-enter,&.message-fade-leave-to
      opacity 0
      transform translateY(50px)
</style>
