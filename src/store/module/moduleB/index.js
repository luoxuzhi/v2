
import * as actions from './actions'
import * as getters from './getters'
import state from './state'
import mutations from './mutations'


const moduleB={
  namespaced:true,
  actions,
  state,
  getters,
  mutations
}

export default moduleB