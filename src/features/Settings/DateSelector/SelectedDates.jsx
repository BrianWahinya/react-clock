import { Button } from "reactstrap";
import { useMainContext } from "../../../context/MainContext";
import { insertBgOpacity, sortDates } from "../../../helpers/util";
import { Icon } from "../../../components";

// const gradientCircles =
//   "linear-gradient(328deg, rgba(29, 29, 29, 0.05) 0%, rgba(29, 29, 29, 0.05) 25%,rgba(226, 226, 226, 0.05) 25%, rgba(226, 226, 226, 0.05) 50%,rgba(21, 21, 21, 0.05) 50%, rgba(21, 21, 21, 0.05) 75%,rgba(216, 216, 216, 0.05) 75%, rgba(216, 216, 216, 0.05) 100%),linear-gradient(172deg, rgba(0, 0, 0, 0.05) 0%, rgba(0, 0, 0, 0.05) 25%,rgba(108, 108, 108, 0.05) 25%, rgba(108, 108, 108, 0.05) 50%,rgba(21, 21, 21, 0.05) 50%, rgba(21, 21, 21, 0.05) 75%,rgba(236, 236, 236, 0.05) 75%, rgba(236, 236, 236, 0.05) 100%),linear-gradient(207deg, rgba(153, 153, 153, 0.05) 0%, rgba(153, 153, 153, 0.05) 25%,rgba(83, 83, 83, 0.05) 25%, rgba(83, 83, 83, 0.05) 50%,rgba(5, 5, 5, 0.05) 50%, rgba(5, 5, 5, 0.05) 75%,rgba(82, 82, 82, 0.05) 75%, rgba(82, 82, 82, 0.05) 100%),linear-gradient(297deg, rgba(26, 26, 26, 0.05) 0%, rgba(26, 26, 26, 0.05) 25%,rgba(223, 223, 223, 0.05) 25%, rgba(223, 223, 223, 0.05) 50%,rgba(232, 232, 232, 0.05) 50%, rgba(232, 232, 232, 0.05) 75%,rgba(153, 153, 153, 0.05) 75%, rgba(153, 153, 153, 0.05) 100%),linear-gradient(204deg, rgba(120, 120, 120, 0.05) 0%, rgba(120, 120, 120, 0.05) 25%,rgba(191, 191, 191, 0.05) 25%, rgba(191, 191, 191, 0.05) 50%,rgba(246, 246, 246, 0.05) 50%, rgba(246, 246, 246, 0.05) 75%,rgba(123, 123, 123, 0.05) 75%, rgba(123, 123, 123, 0.05) 100%)";

// const trialStyle = {
//   backgroundImage: `${gradientCircles},linear-gradient(45deg, ${insertBgOpacity(
//     color,
//     "low"
//   )}, ${insertBgOpacity(color, "high")})`,
// };

const SelectedDate = ({ id, type, date, desc, color }) => {
  const { removeCalendarDate } = useMainContext();
  return (
    <li
      className="list-group-item d-flex justify-content-between align-items-center"
      style={{
        borderLeft: `10px solid ${insertBgOpacity(color, "low")}`,
      }}
    >
      <span>
        {date}: {type}: {desc}
      </span>
      <Button
        className="btn-delete"
        color="danger"
        size="sm"
        onClick={() => removeCalendarDate(id)}
      >
        <Icon type="delete" />
      </Button>
    </li>
  );
};

const SelectedDates = ({ selectedDates }) => {
  return (
    <ul className="list-group list-selected-dates">
      {sortDates(selectedDates).map((item) => (
        <SelectedDate key={item.id} {...item} />
      ))}
    </ul>
  );
};
export default SelectedDates;
