<script setup lang="ts">
import IconButton from "./IconButton.vue";

interface Props {
  title: string;
  toggleSearchMode(): void;
}

const { title, toggleSearchMode } = defineProps<Props>();
</script>

<template>
  <header class="header">
    <h1 class="header-text">{{ title }}</h1>
    <div class="actions">
      <IconButton @click="toggleSearchMode">
        <span class="material-symbols-outlined">{{
          $t("general.search")
        }}</span>
      </IconButton>
    </div>
  </header>
</template>

<style scoped>
.header {
  padding: 1rem;
  background-color: #1665c0;
  color: white;
  display: flex;
  justify-content: space-between;
}
.header-text {
  font-weight: 400;
  font-size: 1.5rem;
  margin: 0;
}
.actions {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  margin-left: auto;
  min-width: 30%;
  justify-content: flex-end;
}
.search-input {
  border: 1px solid transparent;
  height: 100%;
  padding: 0 0.5rem;
  min-width: 30%;
  border-radius: 2px;
}
</style>
