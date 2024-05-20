export const deepCopy = (obj) => JSON.parse(JSON.stringify(obj));

export const sortArrObj = (arr, key) => {
  const sortedArr = arr.toSorted((a, b) => {
    let elemA = a[key].toUpperCase(); // Convert names to uppercase for case-insensitive comparison
    let elemB = b[key].toUpperCase();

    if (elemA < elemB) {
      return -1;
    }
    if (elemA > elemB) {
      return 1;
    }
    return 0; // Names are equal
  });
  return sortedArr;
};

/**********************************/
/************* RANDOM *************/
/**********************************/
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

/**********************************/
/************* COLORS *************/
/**********************************/
const opacityLevels = {
  low: [0.8, "cc"],
  mid: [0.4, 66],
  high: [0.26, 44],
  veryhigh: [0.06, 24],
};
const opacityHslRgb = (item, op) => {
  const sub_item = item.split(", ").slice(0, -1);
  return `${sub_item.join(", ")}, ${op})`
    .replace("rgba", "rgb")
    .replace("hsla", "hsl")
    .replace("rgb", "rgba")
    .replace("hsl", "hsla");
};

export const insertBgOpacity = (color, level) => {
  const [rg, hex] = opacityLevels?.[level] || opacityLevels.mid;
  const id = color[0].toLowerCase();
  switch (id) {
    case "#":
      return `${color.slice(0, 7)}${hex}`;
    case "r" || "h":
      return opacityHslRgb(color, rg);
    default:
      return color;
  }
};

/**********************************/
/*********** DATE - TIME **********/
/**********************************/
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

export const sortDates = (arr) =>
  arr.sort((a, b) => new Date(a.date) - new Date(b.date));

export const getDateDifference = (startDate, endDate) => {
  // Calculate the difference in milliseconds
  const differenceMs = startDate > endDate ? 0 : Math.abs(endDate - startDate);

  // Convert milliseconds to days, hours, minutes, and seconds
  const days = Math.floor(differenceMs / (1000 * 60 * 60 * 24));
  const hours = Math.floor(
    (differenceMs % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
  );
  const minutes = Math.floor((differenceMs % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((differenceMs % (1000 * 60)) / 1000);

  return { days, hours, minutes, seconds };
};
