<script setup lang="ts">
interface Props {
  title: string;
}

const props = defineProps<Props>();
</script>

<template>
  <div :class="$style.container">
    <h3 :class="$style.title">
      {{ props.title }}
    </h3>
    <slot />
  </div>
</template>

<style module>
.container {
  border-radius: 2px;
  background-color: #fff;
}
.title {
  margin: 0;
  padding: 1rem;
  color: #0b0b0b;
  font-size: 1.5rem;
  font-weight: 400;
  border-bottom: 1px solid #f0f0f0;
}
</style>
