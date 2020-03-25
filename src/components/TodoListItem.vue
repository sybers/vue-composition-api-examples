<template>
  <li :class="{ completed, editing }">
    <div class="view">
      <input
        class="toggle"
        type="checkbox"
        :checked="completed"
        @change="onUpdateCompleted(!completed)"
      />
      <label @dblclick="onEdit(true)">{{ text }}</label>
      <button class="destroy" @click="onRemove"></button>
    </div>
    <input
      class="edit"
      :value="text"
      @input="onUpdateText($event.target.value)"
      @keyup.enter="onEdit(false)"
      @blur="onEdit(false)"
    />
  </li>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'TodoListItem',
  props: {
    text: {
      type: String,
      required: true,
    },
    completed: {
      type: Boolean,
      required: true,
    },
    editing: {
      type: Boolean,
      default: false,
    },
  },
  setup(_, { emit }) {
    const onUpdateCompleted = (value: boolean) => emit('update:completed', value);
    const onUpdateText = (value: string) => emit('update:text', value);
    const onEdit = (value: string | false) => emit('edit', value);
    const onRemove = () => emit('remove');

    return {
      onUpdateCompleted,
      onUpdateText,
      onEdit,
      onRemove,
    };
  },
});
</script>

<style></style>
