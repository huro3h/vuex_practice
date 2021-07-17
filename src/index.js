import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

// Vuex.Store ← should use 'upper case'
// https://www.programmersought.com/article/11172251988/
const store = new Vuex.Store({
  // ステート
  state: {
    count: 10
  }
})

console.log(store.state.count);
