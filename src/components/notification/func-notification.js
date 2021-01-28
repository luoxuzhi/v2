/*
* @Author: Administrator
* @Date:   2018-08-01 19:24:16
* @Last Modified by:   lxz
* @Last Modified time: 2019-07-25 13:57:01
*/
import Notification from './notification'

export default {
  extends:Notification,
  computed:{
    style(){
      return {
        position:'fixed',
        right:'10px',
        bottom:`${this.verticalOffset}px`
      }
    }
  },
  data(){
    return {
      verticalOffset:0,
      autoClose:true,
      autoCloseTime:2000,
      visible:false,
      height:0
    }
  },
  mounted(){
    this.createTimer()
  },
  methods:{
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
  beforeDestroy(){
    this.clearTimer()
  }

}