import { useDateTime } from "../../hooks";

const Digital = () => {
  const { time } = useDateTime();

  return <div className="digital-clock">{time && <h1>{time}</h1>}</div>;
};
export default Digital;
