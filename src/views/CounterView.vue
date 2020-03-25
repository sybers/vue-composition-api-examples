<template>
  <div>
    <h2>Counter</h2>
    <p>Two counters sharing the same state.</p>
    <div class="example-section">
      <Counter />
      <hr style="margin: 24px 0" />
      <Counter />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import Counter from '@/components/Counter.vue';

export default defineComponent({
  name: 'CounterView',
  components: {
    Counter,
  },
});
</script>
