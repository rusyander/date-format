const now = new Date();

const locale = navigator.language;

// const dateOptions: Intl.DateTimeFormatOptions = {
const dateOptions = {
  day: "numeric", // 2-digit
  month: "long", // numeric "2-digit", "narrow", "short" и "long"
  year: "numeric", // 2-digit
  // era: "long",
  weekday: "narrow", // "narrow", "short" и "long"
  timeZoneName: "short",
  hour: "numeric",
  // hour12: true,
  minute: "numeric",
  // second: 'numeric'
};

const UserDate = new Intl.DateTimeFormat(locale, dateOptions);
const RUDate = new Intl.DateTimeFormat("ru", dateOptions);
const USDate = new Intl.DateTimeFormat("en-US", dateOptions);
const UKDate = new Intl.DateTimeFormat("en-UK", dateOptions);
const SDate = new Intl.DateTimeFormat("es-ES", dateOptions);
const IDate = new Intl.DateTimeFormat("hi-IN", dateOptions);
const SYDate = new Intl.DateTimeFormat("ar-SY", dateOptions);
const CNDate = new Intl.DateTimeFormat("zh-CN", dateOptions);

console.log("RUDate", RUDate.format(now));
console.log("UserDate", UserDate.format(now));
console.log("USDate", USDate.format(now));
console.log("UKDate", UKDate.format(now));
console.log("SDate", SDate.format(now));
console.log("IDate", IDate.format(now));
console.log("SYDate", SYDate.format(now));
