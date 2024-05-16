import { useLayoutEffect, useRef } from "react";
import { useMainContext } from "../../context/MainContext";
import { getDateTime } from "../../helpers/util";

const CountdownItem = ({ fields }) => {
  const { name, date: itemDate, type, repeat } = fields;
  const timeCountdownRef = useRef(null);

  const generateCountdown = () => {
    const customDate = new Date(itemDate.replace(/-/g, "/"));
    const { dateTime } = getDateTime();
    const difference = getDateDifference(dateTime, customDate);
    timeCountdownRef.current.textContent = difference;
  };

  useLayoutEffect(() => {
    generateCountdown();
    const timeInterval = setInterval(generateCountdown, 1000);
    return () => clearInterval(timeInterval);
  }, []);

  return (
    <div>
      {itemDate} : {name} (<span ref={timeCountdownRef}></span>)
    </div>
  );
};

const Countdown = () => {
  const { selectedDates } = useMainContext();
  const targetDates = selectedDates.filter((date) => date.showCountdown);
  //   console.log({ targetDates });
  return (
    <div className="div-countdown">
      {targetDates.map((item) => (
        <CountdownItem key={item.id} fields={item} />
      ))}
    </div>
  );
};
export default Countdown;

function getDateDifference(startDate, endDate) {
  // Calculate the difference in milliseconds
  const differenceMs = startDate > endDate ? 0 : Math.abs(endDate - startDate);

  // Convert milliseconds to days, hours, minutes, and seconds
  const days = Math.floor(differenceMs / (1000 * 60 * 60 * 24));
  const hours = Math.floor(
    (differenceMs % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
  );
  const minutes = Math.floor((differenceMs % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((differenceMs % (1000 * 60)) / 1000);

  // Format the result as days:hours:minutes:seconds
  const result = `${days}days: ${hours}hrs: ${minutes}mins: ${seconds}secs`;
  return result;
}
