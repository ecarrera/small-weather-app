<script setup lang="ts">
import { ref, computed } from "vue";
import { useCitiesMeta } from "../api-queries/queries/cities.query";
import type { City } from "../interfaces/cities.interfaces";

interface Props {
  onSelectCity(city: City): void;
  onClose(): void;
}

const { data: citiesMeta } = useCitiesMeta();
const { onSelectCity, onClose } = defineProps<Props>();

const searchQuery = ref("");

const filteredCities = computed(() => {
  return citiesMeta?.value
    ?.filter((city: City) =>
      city.city_name?.toLowerCase().includes(searchQuery.value.toLowerCase()),
    )
    .sort((a, b) => a.city_name.localeCompare(b.city_name));
});

const closeModal = (): void => {
  onClose();
};

const handleSelectCity = (city: City): void => {
  onSelectCity(city);
  onClose();
};
</script>

<template>
  <div v-if="citiesMeta" :class="$style.overlay">
    <div :class="$style.modal">
      <div :class="$style.header">
        <h2>{{ $t("searchModal.title") }}</h2>
        <IconButton @click="closeModal">
          <span class="material-symbols-outlined">{{
            $t("general.close")
          }}</span>
        </IconButton>
      </div>

      <input
        v-model="searchQuery"
        :class="$style.input"
        :placeholder="$t('searchModal.input.placeholder')"
      />

      <ul :class="$style.cityList">
        <li
          v-for="city in filteredCities"
          :key="city.city_id"
          :class="$style.cityItem"
          @click="handleSelectCity(city)"
        >
          {{ city.city_name }}, {{ city.country_full }}
        </li>
      </ul>
    </div>
  </div>
</template>

<style module>
.overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 10;
}

.modal {
  background: white;
  padding: 1rem;
  border-radius: 8px;
  width: 400px;
  max-height: 80vh;
  overflow: hidden;
  display: flex;
  flex-direction: column;
}

.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.input {
  padding: 1rem;
  width: 100%;
  font-size: 18px;
  margin-bottom: 1rem;
  box-sizing: border-box;
  background-color: #fafafa;
  border: none;
  border-bottom: 1px solid #ccc;
}

.cityList {
  list-style: none;
  padding: 0;
  margin: 0;
  overflow: auto;
  flex: 1;
}

.cityItem {
  padding: 0.5rem;
  cursor: pointer;
  border-bottom: 1px solid #eee;
  transition: background 0.2s;
}

.cityItem:hover {
  background: #f0f0f0;
}
</style>
