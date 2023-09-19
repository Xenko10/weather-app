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
    <div className={styles.info}>
      {city && <img src='./src/assets/sunny-icon.png' alt='sunny icon' />}
      <div>{temperature ? Math.round(temperature) + " ℃" : error}</div>
      <div>{city}</div>
      <div>{humidity ? humidity + "%" : ""}</div>
      <div>{windSpeed ? Math.round(windSpeed * 3.6) + " km/h " : ""}</div>
    </div>
  );
};

export default Info;
