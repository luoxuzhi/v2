export default {
  props:{
    message:String,
  },
  render(h){
    return h('div',{attrs:{id:999}},
      this.message
    )
  }
}