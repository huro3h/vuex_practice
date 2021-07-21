// store.js
import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    // タスクの初期ステート
    tasks: [
      {
        id: 1,
        name: '食う',
        labelIds: [1, 2],
        done: true
      },
      {
        id: 2,
        name: '寝る',
        labelIds: [3],
        done: false
      },
      {
        id: 3,
        name: 'あそぶ',
        labelIds: [3, 4],
        done: false
      },
    ],
    
    // ラベルの初期ステート
    labels: [
      { id: 1, text: '衣' },
      { id: 2, text: '食' },
      { id: 3, text: '住' },
      { id: 4, text: 'その他' }
    ],
    
    nextTaskId: 4,
    nextLabelId: 5,
  },

  mutations: {
    addTask(state, {name}) {
      state.tasks.push({
        id: state.nextTaskId,
        name,
        done: false
      })
      
      state.nextTaskId++
    },
    
    // タスクの完了状態を変更する
    toggleTaskStatus(state, {id}) {
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
