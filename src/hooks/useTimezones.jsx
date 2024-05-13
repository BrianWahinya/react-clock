import { configs } from "../helpers/configs";
import { timezones } from "../helpers/timezones";
import { sortArrObj, userTimezone } from "../helpers/util";

export const useTimezones = () => {
  const defaultOptions = [];
  const groupedOptions = sortArrObj(timezones, "continent").map((zone) => {
    const { id, continent, cities } = zone;
    const options = sortArrObj(cities, "city").map((item) => {
      const { id, city, tz } = item;
      const optionObj = {
        city,
        value: tz,
        label: `${city}: ${tz}`,
        id: `${city}_${tz}_${id}`,
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

    return { id: `${continent}_${id}`, label: continent, options };
  });

  const store = () => JSON.parse(localStorage.getItem("userTimezones"));

  if (!store() || store()?.length < 1) {
    localStorage.setItem("userTimezones", JSON.stringify(defaultOptions));
  }

  return { localStore: store(), groupedOptions };
};
