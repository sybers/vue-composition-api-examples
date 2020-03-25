<template>
  <div>
    <h2>TodoMVC</h2>
    <p>A simple TodoMVC synced with local storage.</p>
    <section class="example-section">
      <TodoList />
    </section>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import TodoList from '@/components/TodoList.vue';

export default defineComponent({
  name: 'TodoView',
  components: {
    TodoList,
  },
});
</script>
