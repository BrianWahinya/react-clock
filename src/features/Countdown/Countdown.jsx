import { useMainContext } from "../../context/MainContext";
import CountdownItem from "./CountdownItem";

import "./css/countdown.css";

const Countdown = () => {
  const { selectedDates } = useMainContext();
  const targetDates = selectedDates.filter((date) => date.showCountdown);
  // console.log({ targetDates });
  return (
    <div className="div-countdown">
      {targetDates.map((item) => (
        <CountdownItem key={item.id} fields={item} />
      ))}
    </div>
  );
};
export default Countdown;
