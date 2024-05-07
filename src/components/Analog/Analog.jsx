import { dateFormat, userTimezone } from "../../helpers/util";
import Hands from "./Hands";
import Ticks from "./Ticks";

import "./css/analog.css";

const Analog = () => {
  return (
    <div className="analog-clock">
      <div>
        <div className="analog-info date">
          {dateFormat(new Date(), {
            day: "2-digit",
            month: "short",
            year: "numeric",
          })}
        </div>
        <div className="analog-info location">{userTimezone}</div>
      </div>
      <div className="dot"></div>
      {<Hands />}
      <div>
        <span className="h3">3</span>
        <span className="h6">6</span>
        <span className="h9">9</span>
        <span className="h12">12</span>
      </div>
      <Ticks />
    </div>
  );
};
export default Analog;
