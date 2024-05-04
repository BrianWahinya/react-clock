import { useEffect, useState } from "react";
import { getDateTime } from "../helpers/util";

const useDateTime = () => {
  const [dateTime, setDateTime] = useState(getDateTime());

  useEffect(() => {
    const timeInterval = setInterval(
      () => setDateTime((prev) => getDateTime()),
      1000
    );
    return () => {
      clearInterval(timeInterval);
    };
  }, []);

  return dateTime;
};

export default useDateTime;
