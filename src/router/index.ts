import { createRouter, createHashHistory } from '@posva/vue-router-next';

import TodoView from '@/views/TodoView.vue';
import CounterView from '@/views/CounterView.vue';

export default createRouter({
  history: createHashHistory(),
  routes: [
    { path: '/', component: TodoView, name: 'todo' },
    { path: '/counter', component: CounterView, name: 'counter' },
  ],
});
