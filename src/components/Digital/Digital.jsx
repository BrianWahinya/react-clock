import { useTime } from "../../hooks";

const Digital = () => {
  const { time } = useTime();

  return <div className="digital-clock">{time && <h1>{time}</h1>}</div>;
};
export default Digital;
