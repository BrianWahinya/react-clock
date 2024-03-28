import { format } from "../../helpers/util";
import { useTime } from "../../hooks";

const Digital = () => {
  const time = useTime();
  return <div className="digital-clock">{time && <h1>{format(time)}</h1>}</div>;
};
export default Digital;
