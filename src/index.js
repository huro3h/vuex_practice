import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store({
  // ステート
  state: {
    count: 10
  },
  // ミューテーション
  mutations: {
    increment (state, amount) {
      state.count += amount
    }
  }
})

console.log(store.state.count);

store.commit('increment', 45)

console.log(store.state.count);
