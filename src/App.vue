<template>
  <div id="app">
    <h4>タスク一覧</h4>
    <ul>
      <li v-for="task in tasks" v-bind:key="task.id">
        <input type="checkbox" v-bind:cheched="task.done">
        {{ task.name }}
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  computed: {
    tasks () {
      return this.$store.state.tasks
    },
  },
}
</script>
