import * as types from './mutation-types'

const mutations = {
  [types.SET_MODULEA_AONE](state, num) {
      state.aone = num
  },
  [types.SET_MODULEA_ATWO](state, num) {
      state.atwo = num
  }
}


export default mutations
