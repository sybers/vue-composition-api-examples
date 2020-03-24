import { watch, onMounted, Ref } from "vue";

export default function useLocalStorage<T = any>(
  key: string,
  object: Ref<T>,
  defaultValue: T
) {
  const load = (): T =>
    JSON.parse(localStorage.getItem(key) || JSON.stringify(defaultValue));

  onMounted(() => {
    object.value = load();
  });

  watch(
    () => object,
    () => {
      localStorage.setItem(key, JSON.stringify(object.value));
    },
    {
      deep: true,
      immediate: false
    }
  );
}
