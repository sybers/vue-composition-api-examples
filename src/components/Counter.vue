<template>
  <div class="counter">
    <input class="counter__value" type="number" :step="step" v-model="value" />
    <div class="counter__controls">
      <button class="counter__button" @click="decrement">-</button>
      <button class="counter__button" @click="increment">+</button>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, watch, ref, reactive } from 'vue';
import { useDocumentTitle } from '@/composables';
import counterStore from '@/stores/counter';

export default defineComponent({
  name: 'Counter',
  setup() {
    return {
      ...counterStore,
    };
  },
});
</script>

<style scoped>
.counter__value {
  box-sizing: border-box;
  border-width: 1px;
  border-style: dashed;
  border-color: rgba(0, 0, 0, 0.2);
  border-radius: 2px;
  outline: none;
  background-color: transparent;
  font-size: 2.2rem;
  text-align: center;
  width: 100%;
  padding: 12px;
}

.counter__value:focus {
  border-color: rgba(0, 0, 0, 0.6);
}

.counter__controls {
  display: flex;
  justify-content: space-around;
  margin-top: 12px;
}

.counter__button {
  font-size: 2rem;
  padding: 8px 40px;
  cursor: pointer;
}
</style>
