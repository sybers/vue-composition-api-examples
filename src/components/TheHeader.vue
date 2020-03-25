<template>
  <header class="header">
    <router-link class="link" :to="{ name: 'todo' }">TodoMVC</router-link>
    <router-link class="link" :to="{ name: 'counter' }">Counter</router-link>
  </header>
</template>

<script>
import { defineComponent } from 'vue';
export default defineComponent({
  name: 'TheHeader',
});
</script>

<style scoped>
.header {
  display: flex;
  justify-content: space-between;
  margin: 12px 0;
}

.link {
  font-size: 1.4rem;
  text-decoration: none;
}
</style>
