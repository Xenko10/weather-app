import {MouseEvent, useState} from 'react'
import axios from "axios";
import styles from "./Form.module.css";
import SearchIcon from "@mui/icons-material/Search";

const API_KEY: string = import.meta.env.VITE_API_KEY;

type Props = {
  setWeatherData: (data: any) => void
}

const fetchWeather = (query: string) =>
    axios
        .get(
            `https://api.openweathermap.org/data/2.5/weather?q=${query}&appid=${API_KEY}`
        )
        .then((res) => {
          return res;
        })
        .catch((error) => {
          if (error.response.data.cod === "404") {
            return {error: "Input valid city name."};
          }

          if (error.response.data.cod === 401) {
            return {error: "Insert valid API_KEY."};
          }

          if (error.response.data.cod === "400") {
            return {
              error: "Empty input. Input valid city name instead.",
            };
          }

          return {error: "Error."};
        })

export function Form({ setWeatherData }: Props) {
  const [formText, setFormText] = useState("");

  async function submit(e: MouseEvent<HTMLButtonElement>) {
    e.preventDefault();
    const response = await fetchWeather(formText)
    setWeatherData(response)

    setFormText("");
  }

  return (
    <form method='get' className={styles.form}>
      <input
        type='text'
        name='city_name'
        id='city_name'
        value={formText}
        onChange={e => setFormText(e.target.value)}
        placeholder='Search'
      />
      <button onClick={submit}>
        <SearchIcon />
      </button>
    </form>
  );
}
