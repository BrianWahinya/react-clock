import { Select } from "../../../components";
import { useMainContext } from "../../../context/MainContext";
import { useTimezones } from "../../../hooks/useTimezones";

const TimezoneSelector = () => {
  const { localStore, groupedOptions } = useTimezones();
  const { alterTimezones } = useMainContext();

  const onChange = (elems) => {
    alterTimezones(elems);
  };

  return (
    <div className="timezone-selector">
      <p className="pLabel">Select Timezone: </p>
      <Select
        groupedOptions={groupedOptions}
        defaultOption={localStore}
        onChange={onChange}
      />
    </div>
  );
};
export default TimezoneSelector;
