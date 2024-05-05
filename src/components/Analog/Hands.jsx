import { useTime } from "../../hooks";

const Hands = () => {
  const { timestamp } = useTime();
  const { hours, minutes, seconds } = timestamp;
  const hourDeg = hours * 30 + minutes * (360 / 720),
    minDeg = minutes * 6 + seconds * (360 / 3600),
    secDeg = seconds * 6;
  return (
    <div>
      <div
        className="hour-hand"
        style={{ transform: `rotate(${hourDeg}deg)` }}
      ></div>
      <div
        className="minute-hand"
        style={{ transform: `rotate(${minDeg}deg)` }}
      ></div>
      <div
        className="second-hand"
        style={{ transform: `rotate(${secDeg}deg)` }}
      ></div>
    </div>
  );
};

export default Hands;
