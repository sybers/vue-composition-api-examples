import { ref, watch, computed, toRefs } from "vue";
import { minmax } from "./utils";

interface UseCounterConfig {
  initial: number;
  min: number;
  max: number;
  step: number;
}

export default (config: UseCounterConfig) => {
  const {
    initial = ref(0),
    min = ref(0),
    max = ref(Infinity),
    step = ref(1)
  } = toRefs(config);

  const _counter = ref(initial);

  // computed
  const counter = computed({
    get: () => _counter.value,
    set: value => set(value)
  });

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
  const reset = () => {
    _counter.value = initial.value;
  };
  const set = (value: number) => {
    _counter.value = value;
  };

  return {
    counter,
    set,
    increment,
    decrement,
    reset
  };
};
