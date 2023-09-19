import styles from "../public/Info.module.css";
import AirIcon from "@mui/icons-material/Air";
import WaterIcon from "@mui/icons-material/Water";

interface InfoProps {
  city: string;
  error: string;
  temperature: number;
  humidity: number;
  windSpeed: number;
}

const Info: React.FC<InfoProps> = ({
  temperature,
  city,
  error,
  humidity,
  windSpeed,
}) => {
  return (
    <div className={styles.infoWrapper}>
      {city && <img src='./src/assets/sunny-icon.png' alt='sunny icon' />}
      <div className={styles.temperature_city_wrapper}>
        {temperature ? (
          <div>{Math.round(temperature) + " ℃"}</div>
        ) : (
          <div className={styles.medium_font}>{error}</div>
        )}
        <div className={styles.medium_font}>{city}</div>
      </div>
      <div className={styles.humidity_windspeed_wrapper}>
        {humidity ? (
          <div>
            <WaterIcon /> {humidity + "%"} <br />
            <div className={styles.smaller_font}>Humidity</div>
          </div>
        ) : (
          ""
        )}
        {windSpeed ? (
          <div>
            <AirIcon /> {Math.round(windSpeed * 3.6) + " km/h "} <br />{" "}
            <div className={styles.smaller_font}>Wind Speed</div>
          </div>
        ) : (
          ""
        )}
      </div>
    </div>
  );
};

export default Info;
