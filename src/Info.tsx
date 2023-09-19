interface InfoProps {
  city: string;
  error: string;
  temperature: number;
}

const Info: React.FC<InfoProps> = ({ temperature, city, error }) => {
  return (
    <>
      <div>{temperature ? Math.round(temperature) + " ℃" : error}</div>
      <div>{city}</div>
    </>
  );
};

export default Info;
