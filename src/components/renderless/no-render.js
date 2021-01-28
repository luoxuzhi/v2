
export default{
  props:['value'],
  data(){
    return {
      newTag:''
    }
  },
  methods:{
    removeTag(tag){
      this.$emit('input',this.value.filter(t => t !== tag))
    },
    addTag(){
      if (!this.newTag) return
      this.$emit('input',[...this.value,this.newTag])
      this.newTag = ''
    },
  },
  render(){
    return this.$scopedSlots.default({
      tags:this.value,
      removeTag:this.removeTag,
      inputAttrs:{
        value:this.newTag
      },
      inputEvents:{
        input:e => this.newTag = e.target.value,
        keydown:e => {
          if (e.keyCode === 13) {
            // e.preventDefault()
            this.addTag()
          }
        }
      }
    })
  }
}

