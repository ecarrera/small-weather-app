<script setup lang="ts">
import dayjs from "dayjs";
import { WeatherData } from "../interfaces/weather.interfaces";
import WeatherCard from "./WeatherCard.vue";
import { kelvinToCelsius } from "../utils/weather.utils";
import { computed } from "vue";

interface Props {
  forecastData?: WeatherData[];
}

const props = defineProps<Props>();

const now = dayjs(); // Get the current date and time using dayjs

// Filter forecasts to include only those with dates greater than now
const futureForecasts = computed(() =>
  props.forecastData?.filter(({ dt }) => {
    const forecastDate = dayjs(dt * 1000); // Assuming `dt` is in seconds, convert it to milliseconds
    return forecastDate.isAfter(now);
  }),
);
</script>

<template>
  <WeatherCard :title="$t('general.nextHours')">
    <ul :class="$style['list']">
      <li
        v-for="weather in futureForecasts"
        :key="weather.dt"
        :class="$style['list-item']"
      >
        <span :class="$style.degrees"
          >{{ kelvinToCelsius(weather.main.feels_like) }}°</span
        >
        <span :class="$style.rain">{{ (weather.pop * 100).toFixed(0) }}%</span>
        <img
          :alt="weather.weather[0].description"
          :class="$style.img"
          :src="`https://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`"
        />
        {{ dayjs(weather.dt * 1000).format("LT") }}
      </li>
    </ul>
  </WeatherCard>
</template>

<style module lang="scss">
.list {
  display: flex;
  list-style: none;
  padding: 1rem 0;
  margin: 0;
  overflow: auto;
}
.list-item {
  position: relative;
  display: flex;
  flex-direction: column;
  justify-items: center;
  align-items: center;
  padding: 0.5rem 1rem;
  color: #959595;
  text-wrap: nowrap;

  &:not(:last-child)::after {
    content: "";
    position: absolute;
    display: block;
    width: 1px;
    height: 80%;
    right: -0.5px;
    background-color: #f0f0f0;
  }
}
.degrees {
  color: #363636;
}
.rain {
  color: #3db9da;
  margin-top: 0.5rem;
}
.img {
  width: 70px;
  height: 70px;
}
</style>
