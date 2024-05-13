import {
  createContext,
  useContext,
  useEffect,
  useLayoutEffect,
  useReducer,
} from "react";
import { deepCopy } from "../helpers/util";
import { useTimezones } from "../hooks/useTimezones";

const MainContext = createContext();

const store = {
  selectedDates: JSON.parse(localStorage.getItem("userCalendarDates")) || [],
  selectedTimezones: JSON.parse(localStorage.getItem("userTimezones")) || [],
};

const reducer = (state, action) => {
  const { type, payload } = action;
  switch (type) {
    case "addTimezone":
      if (
        state.selectedTimezones.some((elem) => elem.value === payload.value)
      ) {
        return state;
      }
      const allTimezones = [...state.selectedTimezones, payload];
      localStorage.setItem("userTimezones", JSON.stringify(allTimezones));
      return {
        ...deepCopy(state),
        selectedTimezones: allTimezones,
      };
    case "removeTimezone":
      const filteredZones = state.selectedTimezones.filter(
        (item) => item.value !== payload
      );
      localStorage.setItem("userTimezones", JSON.stringify(filteredZones));
      return {
        ...deepCopy(state),
        selectedTimezones: filteredZones,
      };
    case "alterTimezones":
      localStorage.setItem("userTimezones", JSON.stringify(payload));
      return { ...deepCopy(state), selectedTimezones: payload };
    case "editCalendarDate":
      const copiedState = deepCopy(state);
      const indexItem = copiedState.selectedDates.findIndex(
        (item) => item.id === payload.id
      );
      copiedState.selectedDates[indexItem] = payload;
      return copiedState;
    case "addCalendarDate":
      const allDates = [...state.selectedDates, payload];
      localStorage.setItem("userCalendarDates", JSON.stringify(allDates));
      return {
        ...deepCopy(state),
        selectedDates: allDates,
      };
    case "removeCalendarDate":
      const filteredDates = state.selectedDates.filter(
        (item) => item.id !== payload
      );
      localStorage.setItem("userCalendarDates", JSON.stringify(filteredDates));
      return {
        ...deepCopy(state),
        selectedDates: filteredDates,
      };
    default:
      return state;
  }
};

const MainProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, store);
  const { localStore } = useTimezones();
  const alterTimezones = (zones) => {
    dispatch({ type: "alterTimezones", payload: zones });
  };

  const addTimezone = (timezone) => {
    dispatch({ type: "addTimezone", payload: timezone });
  };

  const removeTimezone = (id) => {
    dispatch({ type: "removeTimezone", payload: id });
  };

  const addCalendarDate = (date) => {
    dispatch({ type: "addCalendarDate", payload: date });
  };

  const removeCalendarDate = (id) => {
    dispatch({ type: "removeCalendarDate", payload: id });
  };

  useLayoutEffect(() => {
    alterTimezones(localStore);
  }, []);

  return (
    <MainContext.Provider
      value={{
        ...state,
        alterTimezones,
        addTimezone,
        removeTimezone,
        addCalendarDate,
        removeCalendarDate,
      }}
    >
      {children}
    </MainContext.Provider>
  );
};

const useMainContext = () => {
  const context = useContext(MainContext);
  if (!context) {
    throw new Error("useMainContext must be used within a MainProvider");
  }
  return context;
};
export { MainProvider, useMainContext };
