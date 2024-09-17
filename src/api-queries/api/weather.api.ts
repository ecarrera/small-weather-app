import axios from "axios";
import { City } from "../../interfaces/cities.interfaces";
import { OPEN_WEATHER_MAP_API_KEY } from "../../config/constants";
import { WeatherData } from "../../interfaces/weather.interfaces";

export const getCurrentAndNextHoursForecast = async ({
  lat,
  lon,
}: City): Promise<WeatherData[]> => {
  try {
    const { data } = await axios.get(
      `https://api.openweathermap.org/data/2.5/forecast`,
      { params: { lat, lon, appid: OPEN_WEATHER_MAP_API_KEY } },
    );

    return data.list;
  } catch (error) {
    console.log(error);
    throw error;
  }
};
