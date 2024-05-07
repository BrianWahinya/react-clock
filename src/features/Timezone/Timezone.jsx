import { useState } from "react";
import { CustomAnalog, Select } from "../../components";
import { timezones } from "../../helpers/timezones";
import { genRandomId, userTimezone } from "../../helpers/util";

import "./css/timezone.css";

const defaultCities = ["london", "santiago", "bangkok", "nairobi"];
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
    const cityName = city.replace(/[_\s-]/g, "").toLowerCase();
    if (
      defaultCities.includes(cityName) &&
      tz.toLowerCase() !== userTimezone.toLowerCase()
    ) {
      defaultOptions.push(optionObj);
    }
    return optionObj;
  });

  return { label: continent, options };
});

const store = () => JSON.parse(localStorage.getItem("userTimezones"));

if (!store() || store()?.length < 1) {
  localStorage.setItem("userTimezones", JSON.stringify(defaultOptions));
}

const Timezone = () => {
  const [selectedItems, setSelectedItems] = useState(store() || []);
  const onChange = (elems) => {
    // console.log(elems);
    localStorage.setItem("userTimezones", JSON.stringify(elems));
    setSelectedItems(elems);
  };

  return (
    <div className="div-timezone">
      <Select
        groupedOptions={groupedOptions}
        defaultOption={selectedItems}
        onChange={onChange}
      />
      <div className="timezone-clocks">
        {selectedItems.map((item) => {
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
