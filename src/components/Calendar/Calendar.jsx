import { Calendar as ReactCalendar } from "react-calendar";
import "./css/calendar.css";

const isToday = (date) => {
  const today = new Date();
  return (
    date.getDate() === today.getDate() &&
    date.getMonth() === today.getMonth() &&
    date.getFullYear() === today.getFullYear()
  );
};

const tileClassName = ({ date }) => {
  return isToday(date) ? "today tile" : "tile";
};

const Calendar = () => {
  return (
    <ReactCalendar
      className="custom-calendar"
      value={new Date()}
      calendarType="gregory"
      showNeighboringMonth={false}
      tileClassName={tileClassName}
    />
  );
};
export default Calendar;
