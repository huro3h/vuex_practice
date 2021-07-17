import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store({
  // ステート(初期値)
  state: {
    count: 10
  },
  // ゲッター
  getters: {
    double: (state) => state.count * 2,
    triple: (state) => state.count * 3,
    multiple: (state, getters) => getters.double * getters.triple
  },
  // ミューテーション
  mutations: {
    increment (state, payload) {
      state.count = state.count + payload.amount
    }
  }
})

console.log(store.state.count)
store.commit('increment', { amount: 250 }) // 第二引数でpayloadに渡す
console.log(store.state.count)
