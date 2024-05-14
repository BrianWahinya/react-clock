import { useMainContext } from "../../../context/MainContext";
import SelectedDates from "./SelectedDates";
import DateSelectorForm from "./DateSelectorForm";
import "./css/dateselector.css";

const DateSelector = () => {
  const { selectedDates, addCalendarDate } = useMainContext();
  return (
    <div className="date-selector">
      {(!selectedDates || selectedDates?.length < 1) && (
        <p className="p-text">No dates selected</p>
      )}
      <SelectedDates selectedDates={selectedDates} />
      <DateSelectorForm addCalendarDate={addCalendarDate} />
    </div>
  );
};
export default DateSelector;
