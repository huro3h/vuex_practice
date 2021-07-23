// store.js
import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    // タスクの初期ステート
    tasks: [
      { id: 1, name: '食う', labelIds: [1, 2], done: true },
      { id: 2, name: '寝る', labelIds: [3], done: false },
      { id: 3, name: 'あそぶ', labelIds: [3, 4], done: false },
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
    
    // フィルターするラベルのID
    filter: null
  },
  
  getters: {
    // フィルタ後のタスクを返す
    filteredTasks(state) {
      // ラベルが選択されていなければそのままの一覧を返す
      if (!state.filter) {
        return state.tasks
      }
      
      // 選択されているラベルでフィルタリング
      return state.tasks.filter(task => {
        return task.labelIds.indexOf(state.filter) >= 0
      })
    }
  },
  
  mutations: {
    // タスクを追加する
    addTask(state, { name, labelIds }) {
      state.tasks.push({
        id: state.nextTaskId,
        name,
        labelIds,
        done: false
      })
      
      state.nextTaskId++
    },
    
    // タスクの完了状態を変更する
    toggleTaskStatus(state, { id }) {
      const filterd = state.tasks.filter(task => {
        return task.id === id
      })
      
      filterd.forEach(task => {
        task.done = !task.done // ここで値を反転
      })
    },
    
    // ラベルを追加する
    addLabel(state, { text }) {
      state.labels.push({
        id: state.nextLabelId,
        text
      })
      
      // 次に追加されるラベルに付与するIDを更新する
      state.nextLabelId++
    },
    
    // フィルタリング対象のラベルを変更する
    changeFilter (state, { filter }) {
      state.filter = filter
    },
  },
})

// 定義したストアをエクスポート
export default store
