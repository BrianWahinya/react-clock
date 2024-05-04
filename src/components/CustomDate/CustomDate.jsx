import { useMemo } from "react";
import { useDateTime } from "../../hooks";

const CustomDate = () => {
  const { date } = useDateTime();
  const memoizedDate = useMemo(() => date, [date]);
  return <div className="div-date">{memoizedDate}</div>;
};

export default CustomDate;
