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
    <>
      <div>{temperature ? Math.round(temperature) + " ℃" : error}</div>
      <div>{city}</div>
      <div>{humidity ? humidity + "%" : ""}</div>
      <div>{windSpeed ? Math.round(windSpeed * 3.6) + " km/h " : ""}</div>
    </>
  );
};

export default Info;
