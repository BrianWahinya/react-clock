import { useEffect, useState } from "react";
import { getDateTime } from "../helpers/util";

const useTime = () => {
  const { time, timestamp } = getDateTime();
  const [timeObj, setTimeObj] = useState({ time, timestamp });

  useEffect(() => {
    const timeInterval = setInterval(
      () =>
        setTimeObj((prev) => {
          const { time, timestamp } = getDateTime();
          return { time, timestamp };
        }),
      1000
    );
    return () => {
      clearInterval(timeInterval);
    };
  }, []);

  return timeObj;
};

export default useTime;
