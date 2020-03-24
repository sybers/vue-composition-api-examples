<template>
  <li :class="{ completed, editing }">
    <div class="view">
      <input
        class="toggle"
        type="checkbox"
        :checked="completed"
        @change="$emit('update:completed', !completed)"
      />
      <label @dblclick="$emit('edit', true)">{{ text }}</label>
      <button class="destroy" @click="$emit('remove')"></button>
    </div>
    <input
      class="edit"
      :value="text"
      @input="$emit('update:text', $event.target.value)"
      @keyup.enter="$emit('edit', false)"
      @blur="$emit('edit', false)"
    />
  </li>
</template>

<script lang="ts">
import { defineComponent, ref, watch, Ref, onMounted } from "vue";

export default defineComponent({
  name: "TodoListItem",
  props: {
    text: {
      type: String,
      required: true
    },
    completed: {
      type: Boolean,
      required: true
    },
    editing: {
      type: Boolean,
      default: false
    }
  }
});
</script>

<style></style>
