import { Analog, Digital } from "../components";
import { Timezone } from "../features";

const Time = () => {
  return (
    <div className="div-time">
      <Timezone />
      <Analog />
      <Digital />
    </div>
  );
};
export default Time;
