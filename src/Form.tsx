import {MouseEvent} from 'react'
import axios from "axios";
import { useState } from "react";
import styles from "../public/Form.module.css";
import SearchIcon from "@mui/icons-material/Search";

const API_KEY: string = import.meta.env.VITE_API_KEY;

type Props = {
  setWeatherData: (data: any) => void
}

export function Form({ setWeatherData }: Props) {
  const [formText, setFormText] = useState("");

  function submit(e: MouseEvent<HTMLButtonElement>) {
    e.preventDefault();

    axios
      .get(
        `https://api.openweathermap.org/data/2.5/weather?q=${formText}&appid=${API_KEY}`
      )
      .then((res) => {
        setWeatherData(res);
      })
      .catch((error) => {
        if (error.response.data.cod === "404") {
          setWeatherData({ error: "Input valid city name." });
          return;
        }

        if (error.response.data.cod === 401) {
          setWeatherData({ error: "Insert valid API_KEY." });
          return;
        }

        if (error.response.data.cod === "400") {
          setWeatherData({
            error: "Empty input. Input valid city name instead.",
          });
          return;
        }

        setWeatherData({ error: "Error." });
      });

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
