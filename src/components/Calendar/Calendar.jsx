import { Calendar as ReactCalendar } from "react-calendar";
import { useDate } from "../../hooks";
import { equalDates } from "../../helpers/util";

import "./css/calendar.css";

const Calendar = () => {
  const date = useDate();

  const tileClassName = ({ date: dateCompare }) =>
    equalDates(dateCompare, date) ? "today" : "";

  return (
    <ReactCalendar
      className="custom-calendar"
      value={date}
      calendarType="gregory"
      showNeighboringMonth={false}
      tileClassName={tileClassName}
    />
  );
};
export default Calendar;
