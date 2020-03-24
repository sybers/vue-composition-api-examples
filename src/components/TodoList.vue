<template>
  <section class="todoapp">
    <header class="header">
      <h1>Todos</h1>
      <input
        class="new-todo"
        placeholder="What needs to be done?"
        autofocus
        v-model="todoText"
        @keyup.enter="create"
      />
    </header>
    <!-- This section should be hidden by default and shown when there are todos -->
    <section class="main">
      <input
        id="toggle-all"
        class="toggle-all"
        type="checkbox"
        @click="toggleAll"
      />
      <label for="toggle-all">Mark all as complete</label>
      <ul class="todo-list">
        <!-- These are here just to show the structure of the list items -->
        <!-- List items should get the class `editing` when editing and `completed` when marked as completed -->
        <TodoListItem
          v-for="todo in todosWithFilter"
          :key="todo.createdAt"
          :text="todo.text"
          :completed="todo.completed"
          :editing="todo === editTodo"
          @update:text="todo.text = $event"
          @update:completed="todo.completed = $event"
          @edit="editTodo = $event ? todo : null"
          @remove="remove(todo)"
        />
      </ul>
    </section>

    <!-- This footer should hidden by default and shown when there are todos -->
    <footer class="footer" v-if="count > 0">
      <!-- This should be `0 items left` by default -->
      <span class="todo-count"
        ><strong>{{ countRemaining }}</strong> item left</span
      >
      <!-- Remove this if you don't implement routing -->
      <TodoFilters :filter="filter" @change="filter = $event" />
      <button
        class="clear-completed"
        @click="clearCompleted"
        v-if="countRemaining !== count"
      >
        Clear completed
      </button>
    </footer>
  </section>
</template>

<script lang="ts">
import { defineComponent, ref, computed, watch } from "vue";
import { useTodos, useLocalStorage } from "@/composables";
import TodoListItem from "@/components/TodoListItem.vue";
import TodoFilters from "@/components/TodoFilters.vue";

export default defineComponent({
  name: "TodoList",
  components: { TodoListItem, TodoFilters },
  setup() {
    const todosEffect = useTodos();
    useLocalStorage("vue-3-ts-todos", todosEffect.todos, []);
    const todoText = ref("");
    const editTodo = ref(null);

    const create = () => {
      if (todoText.value.length === 0) {
        return;
      }

      todosEffect.add({ text: todoText.value });
      todoText.value = "";
    };

    const toggleAll = () => {
      const nextState =
        todosEffect.countCompleted.value !== todosEffect.count.value;
      todosEffect.todos.value.forEach(item => (item.completed = nextState));
    };

    return {
      ...todosEffect,
      todoText,
      editTodo,
      create,
      toggleAll
    };
  }
});
</script>

<style></style>
