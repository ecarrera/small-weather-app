<script setup lang="ts">
import dayjs from "dayjs";
import type { City } from "../interfaces/cities.interfaces";
import { useCurrentAndNextHoursForecast } from "../api-queries/queries/weather.queries";

interface Props {
  selectedCity: City;
}

const props = defineProps<Props>();

const { dataUpdatedAt } = useCurrentAndNextHoursForecast(props.selectedCity);
</script>
<template>
  <div :class="$style.container">
    {{
      $t("general.lastUpdated", {
        date: dayjs(dataUpdatedAt).format("MMM D, HH:mm"),
      })
    }}
  </div>
</template>

<style module>
.container {
  background-color: #1665c0;
  color: white;
  text-align: right;
  padding: 0.25rem 1rem;
  width: 100%;
  box-sizing: border-box;
}
</style>
