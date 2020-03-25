import { createRouter, createHistory } from '@posva/vue-router-next';

import TodoView from '@/views/TodoView.vue';
import CounterView from '@/views/CounterView.vue';

export default createRouter({
  history: createHistory('/vue-composition-api-examples/#'),
  routes: [
    { path: '/', component: TodoView, name: 'todo' },
    { path: '/counter', component: CounterView, name: 'counter' },
  ],
});
