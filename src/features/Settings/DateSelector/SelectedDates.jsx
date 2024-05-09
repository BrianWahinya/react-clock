import { Button } from "reactstrap";
import { useMainContext } from "../../../context/MainContext";

const SelectedDate = ({ id, type, date, desc }) => {
  const { removeCalendarDate } = useMainContext();
  return (
    <p>
      {id}: {type}: {date}: {desc}
      <Button color="danger" size="sm" onClick={() => removeCalendarDate(id)}>
        Del
      </Button>
    </p>
  );
};

const SelectedDates = ({ selectedDates }) => {
  return (
    <div>
      {selectedDates.map((item) => (
        <SelectedDate key={item.id} {...item} />
      ))}
    </div>
  );
};
export default SelectedDates;
