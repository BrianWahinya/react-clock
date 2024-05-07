import { createContext, useContext, useState } from "react";

const TimezoneContext = createContext();

const TimezoneProvider = ({ children }) => {
  const [timezone, setTimezone] = useState([]);
  const alterTimezones = (zones) => {
    setTimezone(zones);
  };
  return (
    <TimeContext.Provider value={{ timezone, alterTimezones }}>
      {children}
    </TimeContext.Provider>
  );
};

const useTimezoneContext = () => {
  const context = useContext(TimezoneContext);
  if (!context) {
    throw new Error(
      "useTimezoneContext must be used within a TimezoneProvider"
    );
  }
  return context;
};
export { TimezoneProvider, useTimezoneContext };
