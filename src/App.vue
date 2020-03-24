<template>
  <div id="app">
    <TodoList />
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";
import Counter from "./components/Counter.vue";
import TodoList from "./components/TodoList.vue";

export default defineComponent({
  components: {
    Counter,
    TodoList
  }
});
</script>

<style scoped>
#app {
  font-family: sans-serif;
}
</style>
