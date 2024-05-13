import { Modal, NavTabs } from "../../components";
import { genRandomId } from "../../helpers/util";
import DateSelector from "./DateSelector/DateSelector";
import TimezoneSelector from "./TimezoneSelector/TimezoneSelector";
import "./css/settings.css";

const title = "Settings";
const items = [
  {
    id: `navtab_${genRandomId()}`,
    title: "Timezones",
    body: <TimezoneSelector />,
  },
  { id: `navtab_${genRandomId()}`, title: "Calendar", body: <DateSelector /> },
];

const Settings = () => {
  return (
    <Modal
      title={title}
      body={<NavTabs items={items} />}
      btn={{ icon: "settings", cls: "btn-settings", name: "Settings" }}
      args={{
        className: "modal-settings",
        size: "md",
        style: { height: "500px" },
      }}
    />
  );
};
export default Settings;
