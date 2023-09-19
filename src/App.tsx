import { useState } from "react";

import { Form } from "./Form";
import Info from "./Info";

export default function App() {
  const [weatherData, setWeatherData] = useState<any>({});

  return (
    <div
      className={
        weatherData.error || weatherData.data?.name
          ? "display after-first-input"
          : "display "
      }>
      <Form setWeatherData={setWeatherData} />
      <Info
        city={weatherData.data?.name}
        error={weatherData.error}
        temperature={weatherData.data?.main.temp - 273.15}
        humidity={weatherData.data?.main.humidity}
        windSpeed={weatherData.data?.wind.speed}
        icon={weatherData.data?.weather[0].icon}
      />
    </div>
  );
}
