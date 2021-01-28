<!-- <template>
  <div class="render-wrapper">render</div>
</template> -->

<script type="text/ecmascript-6">
export default {
  data() {
    return {
      obj: { name: 'xiaowang', age: 18 }
    }
  },
  props: {
    message: {
      default: ''
    }
  },
  beforeMount() {
    console.log('before mount')
  },
  render(h) {
    const { message, $slots } = this
    return h(
      'div',
      {
        class: ['class1', { isMessage: message ? true : false }, message ? 'is-message' : ''],
        attrs: { id: 'id-test' },
        slot: 'default'
      },
      5555
    )
  },
  mounted() {
    console.log('mounted')
  },
  created() {
    console.log(this.$options)
    const { name, age, height = 181 } = this.obj
    console.log(height)
  }
}
</script>

<style scoped lang="stylus" rel="stylesheet/stylus"></style>