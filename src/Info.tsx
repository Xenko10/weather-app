interface InfoProps {
  city: string;
  error: string;
}

const Info: React.FC<InfoProps> = ({ city, error }) => {
  return <div>{city || error}</div>;
};

export default Info;
