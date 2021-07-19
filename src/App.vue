<template>
  <div id="app">
    <h4>タスク一覧</h4>
    <ul>
      <li v-for="task in tasks" v-bind:key="task.id">
        <input type="checkbox" v-bind:cheched="task.done"
          v-on:change="toggleTaskStatus(task)">
        {{ task.name }}
      </li>
    </ul>

    <form v-on:submit="toggleTaskStatus(task)">
      <input type="text" v-model="newTaskName" placeholder="新しいタスク名">
    </form>
  </div>
</template>

<script>
export default {
  data () {
    return {
      newTaskName: '',
    }
  },
  computed: {
    tasks () {
      return this.$store.state.tasks
    },
  },
  methods: {
    // タスクを追加する
    addTask () {
      // addTaskミューテーションをコミット
      this.$store.commit('addTask', {
        name: this.newTaskName,
      })
      this.newTaskName = ''
    },

    // タスクの完了状態を更新する
    toggleTaskStatus (task) {
      // toggleTaskStatusミューテーションをコミット
      this.$store.commit('toggleTaskStatus', {
        id: task.id
      })
    },
  }
}
</script>
