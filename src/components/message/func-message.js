/*
* @Author: lxz
* @Date:   2018-08-03 17:41:48
* @Last Modified by:   lxz
* @Last Modified time: 2018-08-03 17:43:24
*/
import message from './index'

export default (Vue) => {
  Vue.prototype.$messageone = message
  Vue.messageone = message
}