import { useState } from "react";

import { Form } from "./Form";
import Info from "./Info";

function App() {
  const [weatherData, setWeatherData] = useState<any>({});

  return (
    <div className='display'>
      <Form setWeatherData={setWeatherData} />
      <Info city={weatherData.data?.name || ""} error={weatherData.error} />
    </div>
  );
}

export default App;
