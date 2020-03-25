<template>
  <div id="app">
    <TheGithubRibbon />
    <h1>Vue 3 Composition API examples</h1>
    <p>A set of examples using the Vue 3 composition API + Typescript + Vue router.</p>
    <hr />
    <TheHeader />
    <hr />
    <router-view />
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';
import { useRoute } from '@posva/vue-router-next';
import TheHeader from '@/components/TheHeader.vue';
import TheGithubRibbon from '@/components/TheGithubRibbon.vue';
import { useDocumentTitle } from './composables';

const capitalize = (value: string): string => value.charAt(0).toUpperCase() + value.slice(1);

export default defineComponent({
  components: { TheHeader, TheGithubRibbon },
  setup() {
    const route = useRoute();
    useDocumentTitle(route, route => `${capitalize(route.value.name || '')} - Vue 3 TS`);
  },
});
</script>

<style>
.example-section {
  background-color: #fff;
  border-radius: 4px;
  border: 1px solid gray;
  padding: 24px;
}
</style>
