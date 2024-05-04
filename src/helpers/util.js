export const deepCopy = (obj) => JSON.parse(JSON.stringify(obj));

export const format = (time) => {
  let { hours, minutes, seconds } = time;

  hours = String(hours).padStart(2, "0");
  minutes = String(minutes).padStart(2, "0");
  seconds = String(seconds).padStart(2, "0");

  return `${hours}:${minutes}:${seconds}`;
};

const userLocale = navigator?.language || "en-US";

const options = {
  weekday: "long",
  day: "2-digit",
  month: "long",
  year: "numeric",
  hour: "2-digit",
  minute: "2-digit",
  second: "2-digit",
  hour12: true, // Use 12-hour format
  timeZone: Intl.DateTimeFormat().resolvedOptions().timeZone,
};

const dateOptions = {
  weekday: "long",
  day: "2-digit",
  month: "long",
  year: "numeric",
  timeZone: Intl.DateTimeFormat().resolvedOptions().timeZone,
};

const timeOptions = {
  hour: "2-digit",
  minute: "2-digit",
  second: "2-digit",
  hour12: true,
  timeZone: Intl.DateTimeFormat().resolvedOptions().timeZone,
};

export const getDateTime = () => {
  const currentDateTime = new Date();
  const date = new Intl.DateTimeFormat(userLocale, dateOptions).format(
    currentDateTime
  );
  const time = new Intl.DateTimeFormat(userLocale, timeOptions).format(
    currentDateTime
  );

  const dateTime = new Date(`${date} ${time}`);
  const timestamp = {
    hours: dateTime.getHours(),
    minutes: dateTime.getMinutes(),
    seconds: dateTime.getSeconds(),
  };

  return { date, time, timestamp };
};
