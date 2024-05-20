export const useCalendarDates = () => {
  const defaultOptions = [
    {
      id: "1716245221342_XZw_2249",
      date: "2024-06-01",
      color: "#cc0000",
      type: "kenya",
      repeat: "none",
      name: "Madaraka Day",
      showCountdown: true,
    },
    {
      id: "1716245278509_BIQ_9726",
      date: "2024-09-07",
      color: "#d18f00",
      type: "birthday",
      repeat: "none",
      name: "Som's Birthday",
      showCountdown: true,
    },
    {
      id: "1715845046000_Tqp_7007",
      date: "2025-01-01",
      color: "#5e76d4",
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
