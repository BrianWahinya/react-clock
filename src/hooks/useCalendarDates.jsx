export const useCalendarDates = () => {
  const defaultOptions = [
    {
      id: "1715845046000_Tqp_7007",
      date: "2025-01-01",
      color: "#000000",
      type: "important",
      repeat: "yearly",
      name: "New Year",
      showCountdown: true,
    },
  ];

  const store = () => JSON.parse(localStorage.getItem("userCalendarDates"));

  if (!store() || store()?.length < 1) {
    localStorage.setItem("userCalendarDates", JSON.stringify(defaultOptions));
  }

  return { dateStore: store() };
};
