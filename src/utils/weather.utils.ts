export const kelvinToCelsius = (kelvin: number) => {
  if (kelvin < 0) {
    throw new Error("Temperature in Kelvin cannot be below 0.");
  }
  return Math.round(kelvin - 273.15);
};
