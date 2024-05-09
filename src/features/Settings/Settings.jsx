import { Modal } from "../../components";
import DateSelector from "./DateSelector/DateSelector";
import TimezoneSelector from "./TimezoneSelector/TimezoneSelector";
import "./css/settings.css";

const title = "Settings";
const body = (
  <>
    <TimezoneSelector />
    <DateSelector />
  </>
);

const Settings = () => {
  return (
    <Modal
      title={title}
      body={body}
      btn={{ icon: "settings", cls: "btn-settings", name: "Settings" }}
      args={{ className: "modal-settings", size: "md" }}
    />
  );
};
export default Settings;
