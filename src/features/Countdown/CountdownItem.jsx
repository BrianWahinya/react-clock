import { insertBgOpacity } from "../../helpers/util";
import FlipClockCountdown from "@leenguyen/react-flip-clock-countdown";
import "@leenguyen/react-flip-clock-countdown/dist/index.css";

const CountdownItem = ({ fields }) => {
  const { name, date: itemDate, type, repeat, color } = fields;
  return (
    <div
      className="countdown-item"
      style={{ backgroundColor: insertBgOpacity(color, "veryhigh") }}
    >
      <p className="p-date-name">
        <span className="span-date">{itemDate}:&nbsp;</span>
        <span className="span-name">{name}</span>
      </p>

      <FlipClockCountdown
        to={new Date(itemDate.replace(/-/g, "/"))}
        labels={["DAYS", "HOURS", "MINS", "SECS"]}
        labelStyle={{
          fontWeight: 600,
          textTransform: "uppercase",
        }}
        digitBlockStyle={{
          marginBottom: 1,
        }}
        duration={0.5}
        hideOnComplete={false}
        className="flip-clock"
      >
        {/* Finished */}
      </FlipClockCountdown>
    </div>
  );
};

export default CountdownItem;
