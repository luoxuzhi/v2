/*
* @Author: Administrator
* @Date:   2018-08-02 22:01:12
* @Last Modified by:   Administrator
* @Last Modified time: 2018-08-03 22:21:19
*/
import Vue from 'vue'
import Message from './message'

const MessageConstructor = Vue.extend(Message)

let seed = 1
let instances = []

const removeInstance = (instance) => {
  if (!instance) return
  const len = instances.length
  const index = instances.findIndex(inst=>inst.id===instance.id)
  instances.splice(index, 1)
  if (len<=1) return
  const removeHeight = instance.height
  for(let i=index; i < len-1; i++){
    instances[i].verticalOffset =
      parseInt(instances[i].verticalOffset) - removeHeight -16
  }
}

const message = (options) => {
  // add $isServer 判断
  if(Vue.prototype.$isServer) return

  const instance = new MessageConstructor({
    propsData:options
  }).$mount()

  instance.id = `message_${seed++}`

  let verticalOffset = 0

  instances.forEach((inst)=>{
    verticalOffset += inst.$el.offsetHeight + 16
  })

  verticalOffset += 16

  instance.verticalOffset = verticalOffset

  instance.visible = true

  instance.$on('closed',()=>{
    removeInstance(instance)
    document.body.removeChild(instance.$el)
    instance.$destroy()
  })

  document.body.appendChild(instance.$el)

  instances.push(instance)

  return instance
}

// 插件是一个函数，它会被作为 install 方法。
// install 方法调用时，会将 Vue 作为参数传入。
// 这种写法插件就是函数，函数写法比较简洁但难理解

export default (Vue) => {
  Vue.prototype.$message = message
  Vue.message = message
}


// 如果插件是一个对象，必须提供 install 方法。这种写法插件就是对象
// message.install = function (Vue) {
//   Vue.prototype.$message = message
//   Vue.message = message
// }
// export default message


