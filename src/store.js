// store.js
import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    // タスクの初期ステート
    tasks: [
      { id: 1, name: '食う', done: false },
      { id: 2, name: '寝る', done: false },
      { id: 3, name: 'あそぶ', done: false },
    ]
  }
})

// 定義したストアをエクスポート
export default store
