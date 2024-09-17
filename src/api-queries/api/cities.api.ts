import axios from "axios";
import Papa from "papaparse";
import { City } from "../../interfaces/cities.interfaces";

export const getCitiesMeta = async (): Promise<City[]> => {
  try {
    const { data } = await axios.get("/cities_20000.csv");

    const citiesMeta = Papa.parse<City>(data, { header: true });

    return citiesMeta.data;
  } catch (error) {
    console.log(error);
    throw error;
  }
};
