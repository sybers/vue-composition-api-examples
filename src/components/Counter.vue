<template>
  <div>
    <div class="counter">
      <input class="counter__value" type="number" v-model="counter" />
      <div class="counter__controls">
        <button class="counter__button" @click="decrement">-</button>
        <button class="counter__button" @click="increment">+</button>
      </div>
      <div class="counter__bottom">
        <button class="counter__button" @click="reset">Reset</button>
      </div>
    </div>

    <div>
      <label for="">min</label>
      <input type="number" v-model="min" />
      <br />
      <label for="">max</label>
      <input type="number" v-model="max" />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, watch, ref, reactive } from "vue";
import { useCounter, useDocumentTitle } from "@/composables";

export default defineComponent({
  name: "Counter",
  props: {
    value: {
      type: Number,
      default: 0
    }
  },
  setup(props, context) {
    const min = ref(0);
    const max = ref(10);
    const counterConfig = reactive({
      initial: props.value,
      min,
      max,
      step: 1
    });

    const counterEffect = useCounter(counterConfig);
    useDocumentTitle(counterEffect.counter);

    watch(counterEffect.counter, newValue => {
      context.emit("change", newValue);
    });

    return {
      ...counterEffect,
      min,
      max
    };
  }
});
</script>
