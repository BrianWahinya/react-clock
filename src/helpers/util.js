export const deepCopy = (obj) => JSON.parse(JSON.stringify(obj));

const genRandomInt = (min, max) => {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

const genRandomStr = (length) => {
  const characters = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
  let randomStr = "";
  for (let i = 0; i < length; i++) {
    const randomIndex = Math.floor(Math.random() * characters.length);
    randomStr += characters.charAt(randomIndex);
  }
  return randomStr;
};

export const genRandomId = () => {
  const timestamp = new Date().getTime();
  const randomInt = genRandomInt(1000, 9999);
  const randomStr = genRandomStr(3);
  return `${timestamp}_${randomStr}_${randomInt}`;
};

export const format = (time) => {
  let { hours, minutes, seconds } = time;

  hours = String(hours).padStart(2, "0");
  minutes = String(minutes).padStart(2, "0");
  seconds = String(seconds).padStart(2, "0");

  return `${hours}:${minutes}:${seconds}`;
};

export const userLocale = navigator?.language || "en-US";
export const userTimezone = Intl.DateTimeFormat().resolvedOptions().timeZone;

const dateOptions = {
  weekday: "long",
  day: "2-digit",
  month: "long",
  year: "numeric",
};

const timeOptions = {
  hour: "2-digit",
  minute: "2-digit",
  second: "2-digit",
  hour12: true,
};

export const dateFormat = (dateStr, options = null) => {
  const dateObj = new Date(dateStr);
  const defaultOptions = { ...dateOptions, ...timeOptions };
  return new Intl.DateTimeFormat(userLocale, options || defaultOptions).format(
    dateObj
  );
};

export const getDateTime = (timezone, optionsDate) => {
  dateOptions.timeZone = timezone || userTimezone;
  timeOptions.timeZone = timezone || userTimezone;

  const currentDateTime = new Date();
  const date = new Intl.DateTimeFormat(userLocale, {
    ...dateOptions,
    ...optionsDate,
  }).format(currentDateTime);
  const time = new Intl.DateTimeFormat(userLocale, timeOptions).format(
    currentDateTime
  );

  // console.log(date);
  const dateTime = new Date(`${date} ${time}`);
  const timestamp = {
    hours: dateTime.getHours(),
    minutes: dateTime.getMinutes(),
    seconds: dateTime.getSeconds(),
  };
  // console.log(dateTime);
  return { date, time, timestamp, dateTime };
};

export const equalDates = (dateA, dateB) => {
  const yearA = dateA.getFullYear();
  const monthA = dateA.getMonth();
  const dayA = dateA.getDate();

  const yearB = dateB.getFullYear();
  const monthB = dateB.getMonth();
  const dayB = dateB.getDate();
  return yearA === yearB && monthA === monthB && dayA === dayB;
};
