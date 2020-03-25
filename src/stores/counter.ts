import { useCounter } from '@/composables';

export default useCounter({
  value: 0,
  min: 0,
  max: 20,
  step: 4,
});
