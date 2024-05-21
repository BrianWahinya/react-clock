import {
  useCallback,
  useEffect,
  useLayoutEffect,
  useRef,
  useState,
} from "react";
import { Calendar as ReactCalendar } from "react-calendar";
import { useDate } from "../../hooks";
import { equalDates, insertBgOpacity } from "../../helpers/util";
import { UncontrolledTooltip } from "reactstrap";

import "./css/calendar.css";
import { useMainContext } from "../../context/MainContext";
import Icon from "../Icon/Icon";

const comparison = (date, calendarDate, selectedDates) => {
  configureTileColor(selectedDates);
  const isUserDate = selectedDates.filter((item) => {
    if (equalDates(calendarDate, new Date(item.date.replace(/-/g, "/")))) {
      // console.log(item);
      return item;
    }
  });

  if (isUserDate?.length) {
    return `${isUserDate[0].id} custom-date`;
  }
  if (equalDates(calendarDate, date)) return "today";

  return null;
};

const configureTileColor = (selectedDates) => {
  // console.log("configureColor", selectedDates);
  const customDates = document.getElementsByClassName("custom-date");
  if (customDates && customDates.length > 0) {
    for (let elem of customDates) {
      if (elem) {
        elem.style?.removeProperty("background-color");
        elem.style?.removeProperty("background-image");
      }
    }
  }

  if (selectedDates && selectedDates.length) {
    const uniqueDates = [...new Set(selectedDates.map((item) => item.date))];
    uniqueDates.forEach((uDate) => {
      const filtered = selectedDates.filter((item) => item.date === uDate);
      if (filtered.length > 1) {
        const colors = filtered.map((item) => insertBgOpacity(item.color));
        filtered.forEach((item) => {
          const elem = document.getElementsByClassName(item.id)[0];
          if (elem) {
            elem.style.backgroundImage = `linear-gradient(0deg, ${colors.join(
              ","
            )})`;
          }
        });
        return;
      }
      const elem = document.getElementsByClassName(filtered[0].id)[0];
      if (elem) {
        // console.log(elem);
        elem.style.backgroundColor = insertBgOpacity(filtered[0].color);
      }
    });
  }
};

const Calendar = () => {
  const [calendarClicked, setCalendarClicked] = useState(false);
  const { selectedDates } = useMainContext();
  const date = useDate();

  const tileClassName = useCallback(
    ({ date: calendarDate }) => comparison(date, calendarDate, selectedDates),
    [date, selectedDates]
  );

  useLayoutEffect(() => {
    configureTileColor(selectedDates);
  }, [selectedDates, calendarClicked]);

  const formatDay = (locale, date) => {
    // console.log("format-day", date, selectedDates);
    const filterSelectedDates = selectedDates.filter((item) =>
      equalDates(date, new Date(item.date.replace(/-/g, "/")))
    );
    const dateInfo = filterSelectedDates.map((item, idx) => (
      <p key={`p${item.id}${idx}`}>{item.name}</p>
    ));
    const dateIcons = filterSelectedDates.map((item, idx) => (
      <Icon key={`p${item.id}${idx}`} type={item.type} />
    ));
    // console.log(dateIcons);
    return dateIcons?.length > 0 ? (
      <>
        <span
          id={`target_${new Date(date).getTime()}`}
          className="span-date-icons"
        >
          <span className="date-num">{date.getDate()}</span>
          <span className="date-icon">{dateIcons}</span>
        </span>
        <UncontrolledTooltip
          className="date-custom-tooltip"
          placement="top"
          // isOpen={true}
          autohide={false}
          target={`target_${new Date(date).getTime()}`}
        >
          {dateInfo}
        </UncontrolledTooltip>
      </>
    ) : (
      date.getDate()
    );
  };

  // const tileContent = (e) => {
  //   console.log("tile-content", e);
  // };

  // const tileContent = useCallback(
  //   ({ date: dateCompare, view }) => {
  //     if (comparison(date, dateCompare, selectedDates)) {
  //       console.log(view);
  //     }
  //   },
  //   // comparison(date, dateCompare, selectedDates) ? (
  //   //   // <div
  //   //   //   style={{
  //   //   //     backgroundColor: "lightblue",
  //   //   //     color: "black",
  //   //   //     width: "100%",
  //   //   //     height: "100%",
  //   //   //   }}
  //   //   // >
  //   //   //   Special
  //   //   // </div>
  //   //   <span style={{ display: "block" }} data-custom-attribute="special-date">
  //   //     {/* You can keep the original content */}
  //   //     <p>{dateCompare.getDate()}</p>
  //   //   </span>
  //   // ) : null
  //   [date]
  // );

  return (
    <>
      <ReactCalendar
        className="custom-calendar"
        value={date}
        calendarType="gregory"
        showNeighboringMonth={true}
        tileClassName={tileClassName}
        onActiveStartDateChange={() => setCalendarClicked(!calendarClicked)}
        // onChange={() => setCalendarClicked(!calendarClicked)}
        // tileContent={tileContent}
        formatDay={formatDay}
      />
    </>
  );
};
export default Calendar;
