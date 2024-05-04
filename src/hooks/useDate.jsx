import { useEffect, useState } from "react";
import { getDateTime } from "../helpers/util";

const getDate = () => {
  const date = new Date();
  return {
    day: date.getDate(),
    month: date.getMonth() + 1,
    year: date.getFullYear(),
  };
};

const intialInterval = () => {
  // Get current date and time
  const currentDate = new Date();

  // Set the time to end of the day (23:59:59)
  const endOfDay = new Date(
    currentDate.getFullYear(),
    currentDate.getMonth(),
    currentDate.getDate(),
    23,
    59,
    59
  );

  // Calculate the time remaining until the end of the day
  const timeRemaining = endOfDay.getTime() - currentDate.getTime();
  return timeRemaining;
};

const useDate = () => {
  const [date, setDate] = useState(getDateTime().date);

  useEffect(() => {
    const timeInterval = setInterval(() => {
      setDate((prev) => getDateTime().date);
    }, intialInterval());
    return () => {
      clearInterval(timeInterval);
    };
  }, []);

  return date;
};

export default useDate;
