import { useMemo } from "react";
import { useTime } from "../../hooks";
import useDate from "../../hooks/useDate";

const CustomDate = () => {
  const { day, month, year } = useDate();

  const pDate = useMemo(() => {
    return `${String(day).padStart(2, "0")}/ ${String(month).padStart(
      2,
      "0"
    )}/ ${year}`;
  }, [year, month, day]);

  return <div className="div-date">{pDate}</div>;
};
export default CustomDate;
