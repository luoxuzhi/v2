import * as types from './mutation-types'

export const setModuleBOne = function ({commit},num) {
  commit(types.SET_MODULEB_BONE,num)
}

export const setModuleBTwo = function ({commit},num) {
  commit(types.SET_MODULEB_BTWO,num)
}