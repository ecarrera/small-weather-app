<script setup lang="ts">
import { useCurrentAndNextHoursForecast } from "../api-queries/queries/weather.queries";
import { City } from "../interfaces/cities.interfaces";
import NextDays from "./NextDays.vue";
import NextHours from "./NextHours.vue";

interface Props {
  selectedCity: City;
}

const props = defineProps<Props>();

const { data: forecastData } = useCurrentAndNextHoursForecast(
  props.selectedCity,
);
</script>

<template>
  <div class="container">
    <NextHours :forecast-data="forecastData"></NextHours>
    <NextDays :forecast-data="forecastData"></NextDays>
  </div>
</template>

<style scoped>
.container {
  padding: 1rem;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  flex: 1;
  overflow: auto;
}
</style>
