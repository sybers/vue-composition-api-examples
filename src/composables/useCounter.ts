import { ref, watch, toRefs, isReactive, reactive } from 'vue';
import { minmax } from './utils';

interface UseCounterConfig {
  value: number;
  min: number;
  max: number;
  step: number;
}

export default (config: UseCounterConfig) => {
  const { value = ref(0), min = ref(0), max = ref(Infinity), step = ref(1) } = toRefs(
    isReactive(config) ? config : reactive(config)
  );

  const _counter = value;

  // limit counter to its min and max values
  watch([_counter, min, max], () => {
    if (min.value > max.value || max.value < min.value) return;
    _counter.value = minmax(_counter.value, min.value, max.value);
  });

  // methods
  const increment = () => {
    _counter.value = _counter.value + step.value;
  };
  const decrement = () => {
    _counter.value = _counter.value - step.value;
  };

  return {
    // state
    value,
    min,
    max,
    step,
    // methods
    increment,
    decrement,
  };
};
