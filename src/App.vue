<template>
  <div id="app">
    <h4>タスク一覧</h4>
    <ul>
      <li
        v-for="task in tasks"
        :key="task.id"
      >
        <input
          type="checkbox"
          :checked="task.done"
          @change="toggleTaskStatus(task)"
        >
        {{ task.name }}
        -
        <span
          v-for="id in task.labelIds"
          :key="id"
        >
          {{ getLabelText(id) }}
        </span>
      </li>
    </ul>
    
    <form @submit.prevent="addTask">
      <input
        type="text"
        v-model="newTaskName"
        placeholder="新しいタスク名"
      >
    </form>
    
    <h3>ラベル一覧</h3>
    <ul>
      <li
        v-for="label in labels"
        :key="label.id"
      >
        <input
          type="checkbox"
          :value="label.id"
          v-model="newTaskLabelIds"
        >
        {{ label.text }}
      </li>
    </ul>
    
    <form @submit.prevent="addLabel">
      <input
        type="text"
        v-model="newLabelText"
        placeholder="新しいラベル名を入れてね"
      >
    </form>
    
    <h4>ラベルでフィルタ</h4>
    <ul>
      <li
        v-for="label in labels"
        :key="label.id"
      >
        <input
          type="radio"
          :checked="label.id === filter"
          @change="changeFilter(label.id)"
        >
        {{ label.text }}
      </li>
      <li>
        <input
          type="radio"
          :checked="filter == null"
          @change="changeFilter(null)"
        >
        フィルタしない
      </li>
    </ul>
    
    <h4>保存と復元</h4>
    <button
      type="button"
      @click="save"
    >
      保存
    </button>
    <button
      type="button"
      @click="restore"
    >
      復元
    </button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      // 入力中の新しいタスク名を一時的に保持する
      newTaskName: '',
      
      // 新しいタスクに紐づくラベル一覧を一時的に保持する
      newTaskLabelIds: [],
      
      // 入力中の新しいラベル名を一時的に保持する
      newLabelText: ''
    }
  },
  computed: {
    tasks() {
      return this.$store.getters.filteredTasks
    },
    labels() {
      return this.$store.state.labels
    },
    filter() {
      return this.$store.state.filter
    }
  },
  
  methods: {
    addTask() {
      // addTask ミューテーションをコミット
      this.$store.commit('addTask', {
        name: this.newTaskName,
        labelIds: this.newTaskLabelIds
      })
      this.newTaskName = ''
      this.newTaskLabelIds = []
    },
    
    // タスクの完了状態を更新する
    toggleTaskStatus(task) {
      // toggleTaskStatusミューテーションをコミット
      this.$store.commit('toggleTaskStatus', {
        id: task.id
      })
    },
    
    // ラベルを追加する
    addLabel() {
      // addLabel ミューテーションををコミット
      this.$store.commit('addLabel', {
        text: this.newLabelText
      })
      this.newLabelText = ''
    },
    
    // ラベルのIDから、そのラベルのテキストを返す
    getLabelText(id) {
      const label = this.labels.filter(label => label.id === id)[0]
      return label ? label.text : ''
    },
    
    // フィルタする対象のラベルを変更する
    changeFilter(labelId) {
      // changeFilterミューテーションをコミット
      this.$store.commit('changeFilter', {
        filter: labelId
      })
    },
    
    // 現在の状態を保存する
    save() {
      // saveアクションをコミット
      this.$store.dispatch('save')
    },
    
    restore(){
      // restoreアクションをコミット
      this.$store.dispatch('restore')
    }
  }
}

</script>

<style>
body {
  background-color: lightsteelblue;
}
</style>
