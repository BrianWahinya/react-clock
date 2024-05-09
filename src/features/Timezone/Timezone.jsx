import { CustomAnalog } from "../../components";
import { useMainContext } from "../../context/MainContext";
import { genRandomId } from "../../helpers/util";

import "./css/timezone.css";

const Timezone = () => {
  const { selectedTimezones } = useMainContext();
  return (
    <div className="div-timezone">
      <div className="timezone-clocks">
        {selectedTimezones.map((item) => {
          const { value, city } = item;
          return (
            <CustomAnalog
              key={genRandomId()}
              cls="sub-analog"
              timezone={value}
              city={city}
            />
          );
        })}
      </div>
    </div>
  );
};
export default Timezone;
