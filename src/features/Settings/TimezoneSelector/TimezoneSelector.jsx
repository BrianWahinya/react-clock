import { useState } from "react";
import { Select } from "../../../components";
import { useMainContext } from "../../../context/MainContext";
// import { useTimezones } from "../../../hooks/useTimezones";
import SelectedTimezone from "./SelectedTimezone";
import "./css/timezone-selector.css";
import TimezoneSelectorAccordion from "./TimezoneSelectorAccordion";

const TimezoneSelector = () => {
  return (
    <div className="timezone-selector">
      <SelectedTimezone />
      {/* <Select
        groupedOptions={groupedOptions}
        defaultOption={localStore}
        onChange={onChange}
      /> */}

      <p className="pLabel">Select Timezone: </p>
      <TimezoneSelectorAccordion />
    </div>
  );
};
export default TimezoneSelector;
