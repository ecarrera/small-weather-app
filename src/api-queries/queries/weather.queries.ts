import { useQuery } from "@tanstack/vue-query";
import { getWeatherKey } from "../keys/weather.keys";
import { getCurrentAndNextHoursForecast } from "../api/weather.api";
import { City } from "../../interfaces/cities.interfaces";

const STALE_TIME = 5 * 60 * 1000;

export const useCurrentAndNextHoursForecast = (city: City) =>
  useQuery({
    queryKey: getWeatherKey(city),
    queryFn: () => getCurrentAndNextHoursForecast(city),
    staleTime: STALE_TIME,
  });
