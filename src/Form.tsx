import axios from "axios";
import { useState } from "react";
import styles from "../public/Form.module.css";
import SearchIcon from "@mui/icons-material/Search";

const API_KEY: string = import.meta.env.VITE_API_KEY;

export default function Form() {
  const [formText, setFormText] = useState("");

  function handleInput(e: any) {
    const { value } = e.target;
    setFormText(value);
  }

  function Submit(e: any) {
    e.preventDefault();

    try {
      axios
        .get(
          `https://api.openweathermap.org/data/2.5/weather?q=${formText}&appid=${API_KEY}`
        )
        .then((res) => {
          console.log(res);
        });
    } catch {
      console.log("Error");
    }
  }

  return (
    <>
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
    </>
  );
}
