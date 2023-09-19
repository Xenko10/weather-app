import axios from "axios";
import { useState } from "react";
import styles from "../public/Form.module.css";
import SearchIcon from "@mui/icons-material/Search";

const API_KEY: string = import.meta.env.VITE_API_KEY;

export function Form({ setWeatherData }: any) {
  const [formText, setFormText] = useState("");

  function handleInput(e: any) {
    const { value } = e.target;
    setFormText(value);
  }

  function Submit(e: any) {
    e.preventDefault();

    axios
      .get(
        `https://api.openweathermap.org/data/2.5/weather?q=${formText}&appid=${API_KEY}`
      )
      .then((res) => {
        setWeatherData(res);
        console.log(res);
      })
      .catch((error) => {
        setWeatherData({ error: "Input valid city name." });
        console.error("Error fetching data:", error);
      });

    setFormText("");
  }

  return (
    <form action='' method='get' className={styles.form}>
      <input
        type='text'
        name='city_name'
        id='city_name'
        value={formText}
        onChange={handleInput}
        placeholder='Search'
      />
      <button onClick={Submit}>
        <SearchIcon />
      </button>
    </form>
  );
}
