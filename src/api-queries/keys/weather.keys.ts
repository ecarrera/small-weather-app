import { City } from "../../interfaces/cities.interfaces";

export const WEATHER_BASE_KEY = "weather";

export const getWeatherKey = (city: City | undefined) => [
  WEATHER_BASE_KEY,
  city?.lat,
  city?.lon,
];
