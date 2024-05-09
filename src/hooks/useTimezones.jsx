import { configs } from "../helpers/configs";
import { timezones } from "../helpers/timezones";
import { userTimezone } from "../helpers/util";

export const useTimezones = () => {
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
        configs.cities.includes(cityName) &&
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

  return { localStore: store(), groupedOptions };
};
