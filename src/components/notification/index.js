/*
* @Author: Administrator
* @Date:   2018-08-01 19:19:17
* @Last Modified by:   luoxuzhi848
* @Last Modified time: 2018-11-26 13:56:19
*/
import Notification from './notification'
import notify from './notify'

// Notification.install = (Vue) => {
//   Vue.component(Notification.name,Notification)
//   Vue.prototype.$notify = notify
// }

// export default Notification

export default (Vue) => {
  Vue.component(Notification.name,Notification)
  Vue.prototype.$notify = notify
}