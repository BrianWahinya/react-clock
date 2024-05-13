import { useState } from "react";
import {
  Button,
  Card,
  CardText,
  CardTitle,
  Col,
  Nav,
  NavItem,
  NavLink,
  Row,
  TabContent,
  TabPane,
} from "reactstrap";
import "./css/navtabs.css";

const NavTabs = ({ items }) => {
  const [activeTab, setActiveTab] = useState(items?.[0].id);
  const tabsObj =
    items?.length > 0 &&
    items.reduce(
      (accum, curr) => {
        const { id, title, body } = curr;
        accum.links.push(
          <NavItem key={`navitem_${id}`}>
            <NavLink
              className={activeTab === id ? "active" : ""}
              onClick={() => setActiveTab(id)}
            >
              {title}
            </NavLink>
          </NavItem>
        );
        accum.navtabs.push(
          <TabPane key={`tabpane_${id}`} tabId={id}>
            {body}
          </TabPane>
        );
        return accum;
      },
      { links: [], navtabs: [] }
    );

  return (
    <div>
      <Nav tabs>{tabsObj.links}</Nav>
      <TabContent activeTab={activeTab}>{tabsObj.navtabs}</TabContent>
    </div>
  );
};
export default NavTabs;
