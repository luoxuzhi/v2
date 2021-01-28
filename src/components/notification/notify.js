/*
* @Author: Administrator
* @Date:   2018-08-01 19:25:06
* @Last Modified by:   lxz
* @Last Modified time: 2019-10-18 16:21:52
*/
import Vue from 'vue'
import Notification from './notification'

const NotificationConstructor = Vue.extend(Notification)

// console.log('***************:',new NotificationConstructor({data:{
//   num:8888
// },propsData:{content:'console test'},
//   mounted(){
//     console.log('mounted')
//   }
// }).$mount())

// console.log('***************:',new NotificationConstructor({data:{
//   num:8888
// },propsData:{content:'console test'}}))



let instances = []
let seed = 1

const removeInstance = (instance) => {
  if (!instance) return
  const len = instances.length
  const index = instances.findIndex(inst=> inst.id===instance.id)
  instances.splice(index, 1)

  if (len <= 1) return

  const removeHeight = instance.height

  // 只计算大于index的 所以用for循环
  for (let i = index; i<len-1; i++) {
    instances[i].verticalOffset = parseInt(instances[i].verticalOffset)-removeHeight-16
  }
}

const notify = (options) => {
  // add $isServer 判断
  if (Vue.prototype.$isServer) return

  const {autoClose,...rest} = options

  let verticalOffset = 0

  const id = `notification_${seed++}`

  // 这里要调用 $mount() 方法的原因是要使得创建的组件包含 $el 选项
  // 因为不调用这个方法的时候 组件只走了beforeCreate、created这两个钩子
  // $el 选项不可见，无法通过原生 js 插入到 DOM，
  // 调用后会走完 beforeMount mounted 钩子，写在 mounted 钩子里的定时器即可创建完成
  const instance = new NotificationConstructor({
    propsData:{
      ...rest
    },
    data:{
      autoClose:autoClose === undefined ? true : autoClose
    },
  }).$mount()

  instance.id = id

  instance.visible = true

  // 要遍历整个数组，所以用forEach
  instances.forEach(item=>{
    verticalOffset += item.$el.offsetHeight + 16
  })

  verticalOffset += 16

  instance.verticalOffset = verticalOffset

  instance.$on('close',()=>{
    instance.visible = false
  })

  instance.$on('closed',()=>{
    removeInstance(instance)
    document.body.removeChild(instance.$el)
    instance.$destroy()
  })

  document.body.appendChild(instance.$el)

  instances.push(instance)

  // why here need return instance ?
  return instance
}

export default notify