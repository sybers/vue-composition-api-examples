import { ref, Ref, computed, reactive, toRefs } from "vue";

export interface Todo {
  text: string;
  completed: boolean;
  createdAt: number;
}

export type FilterFunction = (item: Todo) => boolean;

export const TODOS_FILTER_ALL: FilterFunction = _ => true;
export const TODOS_FILTER_ACTIVE: FilterFunction = item => !item.completed;
export const TODOS_FILTER_COMPLETED: FilterFunction = item => item.completed;

export default function useTodos() {
  const todos: Ref<Todo[]> = ref([]);
  const filter: Ref<FilterFunction> = ref(TODOS_FILTER_ALL);

  // computed
  const withFilter = (filter: FilterFunction) => todos.value.filter(filter);
  const todosWithFilter = computed(() => withFilter(filter.value));
  const count = computed(() => todos.value.length);
  const countRemaining = computed(() => withFilter(TODOS_FILTER_ACTIVE).length);
  const countCompleted = computed(
    () => withFilter(TODOS_FILTER_COMPLETED).length
  );

  //methods
  const add = (...items: Partial<Todo>[]) => {
    for (const item of items) {
      todos.value.push({
        text: "",
        completed: false,
        createdAt: Date.now(),
        ...item
      });
    }
  };
  const remove = (...items: Todo[]) => {
    todos.value = todos.value.filter(todo => {
      for (const item of items) {
        if (item.createdAt === todo.createdAt) {
          return false;
        }
      }
      return true;
    });
  };
  const clearCompleted = () => {
    remove(...todos.value.filter(item => item.completed));
  };
  const setFilter = (newFilter: FilterFunction) => {
    filter.value = newFilter;
  };

  return {
    // state
    todos,
    todosWithFilter,
    count,
    countRemaining,
    countCompleted,
    filter,
    // methods
    add,
    remove,
    clearCompleted,
    setFilter
  };
}
