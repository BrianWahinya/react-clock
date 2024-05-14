import { useMainContext } from "../../../context/MainContext";

const SelectedTimezone = () => {
  const { selectedTimezones, removeTimezone } = useMainContext();
  return (
    <div className="selector-selected-timezones">
      {(!selectedTimezones || selectedTimezones.length < 1) &&
        "No timezone selected"}
      {selectedTimezones.map((zone) => {
        const { id, city, value } = zone;
        return (
          <p key={id}>
            <span className="p-text">
              {city}: {value}
            </span>

            <button
              key={id}
              onClick={() => removeTimezone(value)}
              className="selected-timezone"
            >
              X
            </button>
          </p>
        );
      })}
    </div>
  );
};
export default SelectedTimezone;
