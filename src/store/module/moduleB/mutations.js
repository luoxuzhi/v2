import * as types from './mutation-types'

const mutations = {
  [types.SET_MODULEB_BONE](state, num) {
      state.bone = num
  },
  [types.SET_MODULEB_BTWO](state, num) {
      state.btwo = num
  }
}


export default mutations
