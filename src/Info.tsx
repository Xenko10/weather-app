import styles from "../public/Info.module.css";

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
        <div>{temperature ? Math.round(temperature) + " ℃" : error}</div>
        <div>{city}</div>
      </div>
      <div className={styles.humidity_windspeed_wrapper}>
        {humidity ? <div>{humidity + "%"}</div> : ""}
        {windSpeed ? <div> {Math.round(windSpeed * 3.6) + " km/h "} </div> : ""}
      </div>
    </div>
  );
};

export default Info;
