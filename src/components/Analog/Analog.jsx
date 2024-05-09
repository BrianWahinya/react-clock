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
      <div className="analog-dot"></div>
      {<Hands />}
      <div>
        <span className="analog-h3">3</span>
        <span className="analog-h6">6</span>
        <span className="analog-h9">9</span>
        <span className="analog-h12">12</span>
      </div>
      <Ticks />
    </div>
  );
};
export default Analog;
