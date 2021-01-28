import Vue from 'vue'
import Vuex from 'vuex'
import moduleA from './module/moduleA'
import moduleB from './module/moduleB'
import createLogger from 'vuex/dist/logger'
const debug = process.env.NODE_ENV !== 'production'

Vue.use(Vuex)

export default new Vuex.Store({
  modules:{
    moduleA,
    moduleB
  },
  strict:debug,
  plugins:debug?[createLogger()]:[],
  state:{
    testName:'test'
  },
  getters:{
    testname:state => state.testName
  },
  actions:{
    async showNum({dispatch}){
      console.log(new Date())
      let result =await  dispatch('getNumFromBackend')
      console.log(new Date(),result)
      return result
    },
    getNumFromBackend(){
      return new Promise((resolve, reject) => {
        setTimeout(()=>{
          resolve(5)
        }, 5000)
      });
    }
  }
})