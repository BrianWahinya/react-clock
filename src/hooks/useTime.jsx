import { useEffect, useState } from "react";

const getTime = () => {
  const date = new Date();
  return {
    hours: date.getHours(),
    minutes: date.getMinutes(),
    seconds: date.getSeconds(),
    day: date.getDate(),
    month: date.getMonth(),
    year: date.getFullYear(),
  };
};

const useTime = () => {
  const [time, setTime] = useState(getTime());

  useEffect(() => {
    const timeInterval = setInterval(() => setTime((prev) => getTime()), 1000);
    return () => {
      clearInterval(timeInterval);
    };
  }, []);

  return time;
};

export default useTime;
