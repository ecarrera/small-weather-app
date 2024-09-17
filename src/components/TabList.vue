<script setup lang="ts">
import type { City } from "../interfaces/cities.interfaces";

interface Props {
  cities: City[];
  selected?: City;
  onChange(selectedCity: City): void;
}

const props = defineProps<Props>();
</script>

<template>
  <ul class="tab-list">
    <li
      v-for="item in props.cities"
      :key="item.city_id"
      class="tab-item"
      :class="{ active: item.city_id === props.selected?.city_id }"
      @click="props.onChange(item)"
    >
      {{ item.city_name }}
    </li>
  </ul>
</template>

<style scoped lang="scss">
.tab-list {
  list-style: none;
  display: flex;
  margin: 0;
  background-color: #fff;
  padding: 0;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.15);
  z-index: 1;
}
.tab-item {
  padding: 1rem;
  text-transform: uppercase;
  font-size: 1rem;
  color: #9a9a9a;
  border-bottom: 2px solid transparent;
  cursor: pointer;

  &.active {
    border-color: #f14826;
    color: #191919;
    font-weight: 500;
  }
}
</style>
