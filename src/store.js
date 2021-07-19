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
  },
  nextTaskId: 4,
  
  mutations: {
    addTask (state, { name }) {
      state.tasks.push({
        id: state.nextTaskId,
        name,
        done: false
      })
      
      state.nextTaskId++
    },
    
    // タスクの完了状態を変更する
    toggleTaskStatus (state, { id }) {
      const filterd = state.tasks.filter(task => {
        return task.id === id
      })
  
      filterd.forEach(task => {
        task.done = !task.done // ここで値を反転
      })
    },
  },
})

// 定義したストアをエクスポート
export default store
