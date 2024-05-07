import React, { useLayoutEffect, useRef } from "react";
import { dateFormat, getDateTime } from "../../helpers/util";
import "./css/custom-analog.css";

const CustomAnalog = ({ cls, timezone, city }) => {
  const hoursRef = useRef(null);
  const minutesRef = useRef(null);
  const timeRef = useRef(null);
  //   const secondsRef = useRef(null);

  useLayoutEffect(() => {
    const showTime = () => {
      const { dateTime, date } = getDateTime(timezone);
      const currentHours = ((dateTime.getHours() + 11) % 12) + 1;
      const currentMinutes = dateTime.getMinutes();
      const currentSeconds = dateTime.getSeconds();

      hoursRef.current.style.transform = `rotate(${currentHours * 30}deg)`;
      minutesRef.current.style.transform = `rotate(${currentMinutes * 6}deg)`;
      //   secondsRef.current.style.transform = `rotate(${currentSeconds * 6}deg)`;

      const machineDay = dateFormat(new Date(), { weekday: "short" });
      const locationDay = dateFormat(date, { weekday: "short" });
      const currentTime = dateFormat(dateTime, {
        hour: "2-digit",
        minute: "2-digit",
        hour12: true,
      });

      timeRef.current.textContent =
        machineDay === locationDay
          ? currentTime
          : `${locationDay}, ${currentTime}`;
    };
    showTime();
    const interval = setInterval(showTime, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="custom-analog-clock">
      <p className="pCity">{city}</p>
      <p className="pTime" ref={timeRef}></p>
      <div className="custom-analog">
        <div className="custom-hour-hand" ref={hoursRef}></div>
        <div className="custom-minute-hand" ref={minutesRef}></div>
        {/* <div className="custom-second-hand" ref={secondsRef}></div> */}
      </div>
    </div>
  );
};

export default CustomAnalog;
