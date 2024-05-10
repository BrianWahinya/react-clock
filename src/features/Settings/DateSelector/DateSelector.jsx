import { useMainContext } from "../../../context/MainContext";
import SelectedDates from "./SelectedDates";
import DateSelectorForm from "./DateSelectorForm";
import "./css/dateselector.css";

const DateSelector = () => {
  const { selectedDates, addCalendarDate } = useMainContext();
  return (
    <div>
      <hr />
      Mark important dates
      <SelectedDates selectedDates={selectedDates} />
      <DateSelectorForm addCalendarDate={addCalendarDate} />
    </div>
  );
};
export default DateSelector;
