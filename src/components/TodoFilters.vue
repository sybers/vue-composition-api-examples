<template>
  <ul class="filters">
    <li v-for="filter in filters" :key="filter.label">
      <a
        :class="{ selected: props.filter === filter.func }"
        @click="changeFilter(filter.func)"
        >{{ filter.label }}</a
      >
    </li>
  </ul>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import {
  FilterFunction,
  TODOS_FILTER_ALL,
  TODOS_FILTER_ACTIVE,
  TODOS_FILTER_COMPLETED
} from "../composables/useTodos";

export default defineComponent(
  (props: { filter: FilterFunction }, { emit }) => {
    return {
      props,
      filters: [
        {
          label: "All",
          func: TODOS_FILTER_ALL
        },
        {
          label: "Active",
          func: TODOS_FILTER_ACTIVE
        },
        {
          label: "Completed",
          func: TODOS_FILTER_COMPLETED
        }
      ],
      changeFilter(filter) {
        emit("change", filter);
      }
    };
  }
);
</script>

<style></style>
