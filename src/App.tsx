import axios from "axios";
const API_KEY: string = import.meta.env.VITE_API_KEY;

function App() {
  const city_name = "Warszawa";
  try {
    axios
      .get(
        `https://api.openweathermap.org/data/2.5/weather?q=${city_name}&appid=${API_KEY}`
      )
      .then((res) => {
        console.log(res);
      });
  } catch {
    console.log("Error");
  }
  return <div className='display'>{API_KEY}</div>;
}

export default App;
