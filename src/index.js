import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = new Vuex.store({
  // ステート
  state: {
    count: 10
  }
})

console.log(store.state.count);
