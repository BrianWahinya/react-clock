import { Calendar } from "../components";
import { Countdown } from "../features";

const Date = () => {
  return (
    <div className="div-date">
      <Countdown />
      <Calendar />
    </div>
  );
};
export default Date;
