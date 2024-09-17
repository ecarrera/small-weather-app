export interface WeatherData {
  dt: number; // Unix timestamp (seconds since 1970)
  main: {
    temp: number; // Temperature in Kelvin
    feels_like: number; // Feels like temperature in Kelvin
    temp_min: number; // Minimum temperature in Kelvin
    temp_max: number; // Maximum temperature in Kelvin
    pressure: number; // Atmospheric pressure at sea level in hPa
    sea_level: number; // Sea level pressure in hPa
    grnd_level: number; // Ground level pressure in hPa
    humidity: number; // Humidity percentage
    temp_kf: number; // Temperature correction factor
  };
  weather: {
    id: number; // Weather condition ID
    main: string; // Group of weather parameters (Rain, Snow, Clear, etc.)
    description: string; // Weather condition description
    icon: string; // Weather icon ID
  }[];
  clouds: {
    all: number; // Cloudiness percentage
  };
  wind: {
    speed: number; // Wind speed in meters/second
    deg: number; // Wind direction in degrees
    gust: number; // Wind gust speed in meters/second
  };
  visibility: number; // Visibility in meters
  pop: number; // Probability of precipitation
  rain?: {
    "3h": number; // Rain volume for the last 3 hours (in mm)
  };
  sys: {
    pod: string; // Part of the day (n = night, d = day)
  };
  dt_txt: string; // Date and time in text format (YYYY-MM-DD HH:mm:ss)
}
