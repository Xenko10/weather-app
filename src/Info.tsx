import styles from "../public/Info.module.css";
import AirIcon from "@mui/icons-material/Air";
import WaterIcon from "@mui/icons-material/Water";

interface InfoProps {
  city: string;
  error: string;
  temperature: number;
  humidity: number;
  windSpeed: number;
  icon: string;
}

const Info = ({
  temperature,
  city,
  error,
  humidity,
  windSpeed,
  icon,
}: InfoProps) => {
  return (
    <div className={styles.infoWrapper}>
      {icon && (
        <img
          // unfortunately API give low quality png
          src={`https://openweathermap.org/img/wn/${icon}@2x.png`}
          alt='current weather icon'
        />
      )}
      <div className={styles.temperature_city_wrapper}>
        {temperature ? (
          <div>{Math.round(temperature)} ℃</div>
        ) : (
          <div className={styles.error}>{error}</div>
        )}
        <div className={styles.medium_font}>{city}</div>
      </div>
      <div className={styles.humidity_windspeed_wrapper}>
        {humidity ? (
          <div className={styles.info_container}>
            <WaterIcon /> {humidity} %<br />
            <div className={styles.smaller_font}>Humidity</div>
          </div>
        ) : null}
        {windSpeed ? (
          <div className={styles.info_container}>
            <AirIcon /> {Math.round(windSpeed * 3.6) + " km/h "} <br />{" "}
            <div className={styles.smaller_font}>Wind Speed</div>
          </div>
        ) : null}
      </div>
    </div>
  );
};

export default Info;
