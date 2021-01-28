import * as types from './mutation-types'

export const setModuleAOne = function ({commit},num) {
  commit(types.SET_MODULEA_AONE,num)
}

export const setModuleATwo = function ({commit},num) {
  commit(types.SET_MODULEA_ATWO,num)
}