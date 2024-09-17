<script setup lang="ts">
import { computed, ref, watch } from "vue";
import { useCitiesMeta } from "./api-queries/queries/cities.query";
import HeaderContainer from "./components/HeaderContainer.vue";
import TabList from "./components/TabList.vue";
import WeatherDetails from "./components/WeatherDetails.vue";
import LastUpdated from "./components/LastUpdated.vue";
import SearchModal from "./components/SearchModal.vue";
import type { City } from "./interfaces/cities.interfaces";

const DEFAULT_CITIES = ["Rio de Janeiro", "Beijing", "Los Angeles"];

const { data: citiesMeta } = useCitiesMeta();

const selectedCity = ref<City>();
const searchMode = ref(false);

const citiesList = computed(
  () =>
    citiesMeta.value?.filter(({ city_name }) =>
      DEFAULT_CITIES.includes(city_name),
    ) || [],
);

// Watch citiesList and set selectedCity when it loads
watch(
  citiesList,
  (newCitiesList) => {
    if (newCitiesList.length > 0) {
      selectedCity.value = newCitiesList[0];
    }
  },
  { immediate: true },
); // immediate to trigger the watch on initial load

const handleCityChange = (updatedSelectedCity: City) => {
  selectedCity.value = updatedSelectedCity;
};

const toggleSearchMode = (): void => {
  searchMode.value = !searchMode.value;
};
</script>

<template>
  <HeaderContainer
    :title="$t('general.appName')"
    :search-mode="searchMode"
    :toggle-search-mode="toggleSearchMode"
  />
  <TabList
    :cities="citiesList"
    :selected="selectedCity"
    :on-change="handleCityChange"
  />
  <WeatherDetails
    v-if="!!selectedCity"
    :key="selectedCity.city_id"
    :selected-city="selectedCity"
  />
  <LastUpdated
    v-if="!!selectedCity"
    :key="selectedCity.city_id"
    :selected-city="selectedCity"
  />
  <SearchModal
    v-if="searchMode"
    :on-select-city="handleCityChange"
    :on-close="toggleSearchMode"
  />
</template>
