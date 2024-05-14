import { Settings } from "../features";
import Date from "./Date";
import Time from "./Time";

import "./css/layout.css";

const Layout = () => {
  return (
    <div className="div-layout">
      <Settings />
      <div className="div-sublayout">
        <Time />
        <Date />
      </div>
    </div>
  );
};
export default Layout;
