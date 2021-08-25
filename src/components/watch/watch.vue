<template>
  <div class="watch-wrapper">
    <div @click="handleClick">click me to add num:{{ num }}</div>
    <div @click="handleClickObj">click me to change obj:{{ obj }}</div>
    <div @click="show = !show">toggle component</div>
    <div @click="switchComponent">switchComponent</div>
    <el-input type="text" v-model="obj.a" />
    <el-button size="mini" @click="appendToBody"
      >click to appen this.$el to body</el-button
    >
    <test-child></test-child>
    <test v-if="show"> </test>
    <component :is="type"></component>
    <el-button size="mini" @click="changeItems"
      >click to change items</el-button
    >
    <ul>
      <li :key="item" v-for="item in items">{{ item }}</li>
    </ul>
    <p @click="copyArr">copy test</p>
    <router-link to="/watch/one">one</router-link>
    <router-link to="/watch/two">two</router-link>
    <keep-alive>
      <router-view></router-view>
    </keep-alive>
  </div>
</template>

<script type="text/ecmascript-6">
import Test from '@/components/test/test'
export default {
  data() {
    return {
      num: 0,
      obj: {
        a: 18,
        b: {
          name: 'xiaowang',
          height: 180
        }
      },
      arr: [1, 2, 3, 4, 5],
      show: false,
      type: 'A',
      items: ['a', 'b', 'c', 'd']
    }
  },
  created() {
    // console.log('this.obj:',this.obj)
  },

  render(h) {
    return h('div', 'components')
  },
  components: {
    Test,
    TestChild: {
      template: '<div>child</div>',
      created() {
        // console.log('child created')
      },
      mounted() {
        console.log('watch child mounted')
      }
    },
    A: {
      template: '<div>A</div>',
      created() {
        // console.log('A created')
      }
    },
    B: {
      template: '<div>B</div>',
      created() {
        // console.log('B created')
      }
    },

  },
  mounted() {
    // console.log('watch component:',this.$data)
    console.log('watch mounted')
    // console.log(this.arr.filter(item=>item>3))
  },
  methods: {
    copyArr() {
      let newArr = [...this.arr]
      newArr[2] = Math.random().toFixed(3) * 1000
      console.log('this.arr:', this.arr)
      console.log('newArr:', newArr)
    },
    changeItems() {
      let random = Math.random().toFixed(3) * 1000
      console.log(random)
      // this.items[2] = random
      // this.items.splice(2, 1, random)
      // this.$set(this.items,2,random)
      // let arr = this.items.slice()
      // arr[2] = random
      // this.items = arr
    },
    switchComponent() {
      this.type = this.type === 'A' ? this.type = 'B' : this.type = 'A'
    },
    appendToBody() {
      document.body.append(this.$el)
    },
    handleClick() {
      this.num++
    },
    handleClickObj() {
      // this.obj.a++
      // this.obj.b.height++
      // console.log(storage.get('second'))
    }
  },
  watch: {
    num() {
      console.log('num is changed by click')
    },
    // obj:{
    //   deep:true,
    //   handler(){
    //     console.log('obj.a is changed')
    //   },
    //   immediate:true
    // }
    'obj.b.height'(newVal) {
      console.log('obj.b.height is changed and value is: ', newVal)
    },
    obj: {
      handler(newVal, oldVal) {
        console.log('obj change')
      },
      deep: false
    },
    '$route'(to, from) {
      console.log(to, from)
    }
  }
}
</script>

<style scoped lang="stylus" rel="stylesheet/stylus"></style>
