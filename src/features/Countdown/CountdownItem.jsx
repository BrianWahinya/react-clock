import { useLayoutEffect, useRef } from "react";
import { getDateTime } from "../../helpers/util";

const CountdownItem = ({ fields }) => {
  const { name, date: itemDate, type, repeat } = fields;
  const daysRef = useRef(null);
  const hoursRef = useRef(null);
  const minsRef = useRef(null);
  const secsRef = useRef(null);

  const generateCountdown = () => {
    const customDate = new Date(itemDate.replace(/-/g, "/"));
    const { dateTime } = getDateTime();
    const { days, hours, minutes, seconds } = getDateDifference(
      dateTime,
      customDate
    );
    daysRef.current.textContent = days;
    hoursRef.current.textContent = hours;
    minsRef.current.textContent = minutes;
    secsRef.current.textContent = seconds;
  };

  useLayoutEffect(() => {
    generateCountdown();
    const timeInterval = setInterval(generateCountdown, 1000);
    return () => clearInterval(timeInterval);
  }, []);

  return (
    <div className="countdown-item">
      <p className="p-date-name">
        {itemDate}: {name}
      </p>
      <div className="p-countdown-time">
        <p>
          <span className="span-value" ref={daysRef}></span>
          <span className="span-text">days</span>
        </p>
        <p>
          <span className="span-value" ref={hoursRef}></span>
          <span className="span-text">hours</span>
        </p>
        <p>
          <span className="span-value" ref={minsRef}></span>
          <span className="span-text">mins</span>
        </p>
        <p>
          <span className="span-value" ref={secsRef}></span>
          <span className="span-text">secs</span>
        </p>
      </div>
    </div>
  );
};

export default CountdownItem;

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

  return { days, hours, minutes, seconds };
}
