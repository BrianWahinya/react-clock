import SelectedTimezone from "./SelectedTimezone";
import TimezoneSelectorAccordion from "./TimezoneSelectorAccordion";

import "./css/timezone-selector.css";

const TimezoneSelector = () => {
  return (
    <div className="timezone-selector">
      <SelectedTimezone />
      <TimezoneSelectorAccordion />
    </div>
  );
};
export default TimezoneSelector;
