import { Settings } from "../features";
import Date from "./Date";
import Time from "./Time";

import "./css/layout.css";

const Layout = () => {
  return (
    <div className="div-layout">
      <Settings />
      <Time />
      <Date />
    </div>
  );
};
export default Layout;
