import { useState } from "react";

import { Form } from "./Form";
import Info from "./Info";

function App() {
  const [weatherData, setWeatherData] = useState({});

  return (
    <div className='display'>
      <Form setWeatherData={setWeatherData} />
      <Info />
    </div>
  );
}

export default App;
