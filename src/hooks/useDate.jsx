import { useEffect, useState } from "react";
import { equalDates, getDateTime } from "../helpers/util";

const useDate = () => {
  const { date: currentDate } = getDateTime();
  const [date, setDate] = useState(new Date(currentDate));

  useEffect(() => {
    const timeInterval = setInterval(() => {
      const newDate = new Date(currentDate);

      // console.log(newDate, date, currentDate);
      if (!equalDates(date, newDate)) {
        setDate((prev) => newDate);
      }
    }, 1000);
    return () => {
      clearInterval(timeInterval);
    };
  }, []);

  return date;
};

export default useDate;
