import { useQuery } from "@tanstack/vue-query";
import { citiesMetaKey } from "../keys/cities.keys";
import { getCitiesMeta } from "../api/cities.api";

export const useCitiesMeta = () =>
  useQuery({
    queryKey: citiesMetaKey,
    queryFn: getCitiesMeta,
    staleTime: Infinity,
  });
