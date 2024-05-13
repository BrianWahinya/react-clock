import { useMainContext } from "../../../context/MainContext";

const SelectedTimezone = () => {
  const { selectedTimezones, removeTimezone } = useMainContext();
  return (
    <div className="selector-selected-timezones">
      {selectedTimezones.map((zone) => {
        const { id, city, value } = zone;
        return (
          <p key={id}>
            {city}: {value}
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
