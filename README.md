# Small Weather App

A simple weather application built with Vue 3, TypeScript, and Vite.

### Desktop

![Screen Recording 2024-09-17 at 01 13 35](https://github.com/user-attachments/assets/98ac35b5-7bcd-4914-97ff-342135571a42)

### Mobile

<img src="https://github.com/user-attachments/assets/c461ffd0-d403-4141-9beb-eea41ed0a94b" width="400">

## Features

- Fetch and display weather data using OpenWeatherMap API
- Localization support with i18next
- Data handling with `@tanstack/vue-query`
- Customizable and extendable with Vite and TypeScript

## Prerequisites

- Node.js (>=16.0.0)
- npm or yarn

## Installation

1. **Clone the repository:**

   ```bash
   git clone https://github.com/ecarrera/small-weather-app.git
   cd small-weather-app
   ```

2. **Install dependencies:**

   Using npm:

   ```bash
   npm install
   ```

   Or using yarn:

   ```bash
   yarn install
   ```

3. **Create a `.env` file:**

   Copy the `.env.example` to `.env` and add your OpenWeatherMap API key:

   ```bash
   cp .env.example .env
   ```

   Edit the `.env` file and add your API key:

   ```env
   VITE_OPEN_WEATHER_MAP_API_KEY=your-api-key-here
   ```

## Development

To start the development server:

```bash
npm run dev
```


