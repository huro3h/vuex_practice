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
    increment (state) {
      state.count = state.count + 1
    }
  },
  // アクション
  actions: {
    incrementAction (ctx) {
      ctx.commit('increment') // incrementミューテーションの実行
    }
  }
})

console.log(store.state.count)
store.dispatch('incrementAction')
console.log(store.state.count)
