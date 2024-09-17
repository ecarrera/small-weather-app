<script setup lang="ts">
import dayjs from "dayjs";
import WeatherCard from "./WeatherCard.vue";
import { kelvinToCelsius } from "../utils/weather.utils";
import { computed } from "vue";
import { WeatherData } from "../interfaces/weather.interfaces";

interface Props {
  forecastData?: WeatherData[];
}

const props = defineProps<Props>();

const now = dayjs(); // Get the current date and time using dayjs
const endDate = now.add(5, "day"); // Calculate the end date for the next 5 days

// Group the forecast data by day
const groupedByDay = computed(() => {
  const dailySummaries: { [key: string]: WeatherData[] } = {};

  props.forecastData?.forEach((weather) => {
    const date = dayjs(weather.dt * 1000)
      .startOf("day")
      .format("YYYY-MM-DD");
    if (!dailySummaries[date]) {
      dailySummaries[date] = [];
    }
    dailySummaries[date].push(weather);
  });

  // Convert the grouped data to an array and filter by the next 5 days
  const summaries = Object.keys(dailySummaries)
    .map((date) => ({
      date,
      data: dailySummaries[date],
    }))
    .filter(({ date }) => dayjs(date).isBetween(now, endDate, null, "[]"))
    .slice(0, 5); // Limit to 5 days

  return summaries;
});

// Function to get daily min and max temperatures, rain probability, etc.
const getDailySummary = (data: WeatherData[]) => {
  const temperatures = data.map((d) => ({
    min: kelvinToCelsius(d.main.temp_min),
    max: kelvinToCelsius(d.main.temp_max),
  }));

  return {
    min: Math.min(...temperatures.map((t) => t.min)).toFixed(0),
    max: Math.max(...temperatures.map((t) => t.max)).toFixed(0),
    icon: data[0].weather[0].icon, // Using the first icon as a representative
    description: data[0].weather[0].description, // Using the first description as a representative
  };
};
</script>

<template>
  <WeatherCard :title="$t('general.nextDays', { count: 5 })">
    <ul :class="$style['list']">
      <li
        v-for="summary in groupedByDay"
        :key="summary.date"
        :class="$style['list-item']"
      >
        <img
          :alt="getDailySummary(summary.data).description"
          :class="$style.img"
          :src="`https://openweathermap.org/img/wn/${getDailySummary(summary.data).icon}@2x.png`"
        />

        <div :class="$style['text-wrapper']">
          <span :class="$style.date">{{
            dayjs(summary.date).format("ddd, MMM D")
          }}</span>

          <span>{{ getDailySummary(summary.data).description }}</span>
        </div>

        <span :class="$style.degrees">
          {{ getDailySummary(summary.data).min }}° /
          {{ getDailySummary(summary.data).max }}°
        </span>
      </li>
    </ul>
  </WeatherCard>
</template>

<style module lang="scss">
.list {
  display: flex;
  flex-direction: column;
  list-style: none;
  padding: 0;
  margin: 0;
  overflow: auto;
  align-items: center;
}
.list-item {
  position: relative;
  display: flex;
  justify-items: center;
  align-items: center;
  padding: 0 1rem;
  max-width: 500px;
  color: #a6a6a6;
  text-wrap: nowrap;
  flex: 1;
  width: 100%;
  box-sizing: border-box;

  &:not(:last-child)::after {
    content: "";
    position: absolute;
    display: block;
    width: calc(100% - 2rem);
    height: 1px;
    bottom: -0.5px;
    background-color: #f0f0f0;
  }
}
.text-wrapper {
  display: flex;
  flex-direction: column;
  align-items: center;
  flex: 1;
  gap: 0.25rem;
}
.date {
  color: #060606;
  font-weight: 500;
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
