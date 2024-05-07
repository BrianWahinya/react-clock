import { useLayoutEffect, useState } from "react";
import { CustomAnalog, Select } from "../../components";
import { timezones } from "../../helpers/timezones";

import "./css/timezone.css";

const defaultCities = ["london", "santiago", "bangkok"];
const defaultOptions = [];
const groupedOptions = timezones.map((zone) => {
  const { continent, cities } = zone;
  const options = cities.map((item) => {
    const { city, tz } = item;
    const optionObj = {
      city,
      value: tz,
      label: `${city}: ${tz}`,
    };
    if (defaultCities.includes(city.replace(/[_\s-]/g, "").toLowerCase())) {
      defaultOptions.push(optionObj);
    }
    return optionObj;
  });

  return { label: continent, options };
});

const Timezone = () => {
  const [selectedItems, setSelectedItems] = useState([]);
  const onChange = (elems) => {
    // console.log(elems);
    setSelectedItems(elems);
  };

  useLayoutEffect(() => {
    onChange(defaultOptions);
  }, []);

  return (
    <div className="div-timezone">
      <Select
        groupedOptions={groupedOptions}
        defaultOption={defaultOptions}
        onChange={onChange}
      />
      <div className="timezone-clocks">
        {selectedItems.map((item, idx) => {
          const { value, city } = item;
          return (
            <CustomAnalog
              key={idx}
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
