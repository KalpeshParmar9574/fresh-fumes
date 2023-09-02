import moment from "moment";
export const dateFormat = (date) => moment(date).format("DD MMMM YYYY");
export const monthYearStringFormat = (date) =>
  moment(date).format("MMMM, YYYY");
export const pastMonthStringFormat = (date) =>
  moment(date).subtract(1, "month").format("MMMM");
export const pastYearStringFormat = (date) =>
  moment(date).subtract(1, "month").format("MMMM,YYYY");
export const currentEvaluationMonthFormat = (date) =>
  moment(date).format("DD MMMM, YYYY");
export const lastMonthYearStringFormat = (date) => {
  let month = moment(date).format("MMMM");
  if (month == "January") {
    // console.log(moment(date).subtract(1, 'year').format("YYYY"))
    return moment(date).subtract(1, "year").format("YYYY");
  } else {
    // console.log(moment(date).format("YYYY"))
    return moment(date).format("YYYY");
  }
  // moment(date).subtract(1, 'month').format("MMMM,YYYY")
};
export const indianDateFormat = (date) => moment(date).format("DD/MM/YYYY");
export const monthYearFormat = (date) => moment(date).format("MM/YYYY");
export const yearMonthDateFormat = (date) => moment(date).format("YYYY/MM/DD");
export const yearFormat = (date) => moment(date).format("YYYY");
export const emailDate = (date) => {
  const now = moment();
  const givenDate = moment(date);
  const diffInDays = now.diff(givenDate, "days");
  const diffInHours = now.diff(givenDate, "hours");
  const isCurrentYear = moment(date).isSame(new Date(), "year");
  // Format the date string based on the difference
  let formattedDate;
  if (!isCurrentYear) {
    formattedDate = givenDate.format("DD MMM yyyy,  h:mm A");
  } else if (diffInDays > 0) {
    formattedDate =
      givenDate.format("ddd, MMM D, h:mm A") + ` (${diffInDays} days ago)`;
  } else {
    formattedDate = givenDate.format("h:mm A") + ` (${diffInHours} hours ago)`;
  }
  return formattedDate;
};
export const emailListDate = (date) => {
  const now = moment();
  var today = new Date();
  const givenDate = moment(date);
  const todayData = moment(today);
  let formattedtodayDate = todayData.format("DD/MM/yyyy");
  let formattedOldDate = givenDate.format("DD/MM/yyyy");
  // const isCurrentYear = moment(date).isSame(new Date(), 'year');
  // Format the date string based on the difference
  let formattedDate;
  if (formattedtodayDate === formattedOldDate) {
    formattedDate = givenDate.format("h:mm A");
  } else {
    formattedDate = givenDate.format("DD/MM/yyyy");
  }
  return formattedDate;
};
export const indianTimeFormat = (time) =>
  moment(time, "HH:mm:ss").format("hh:mm a");

export function convertTo24HrsFormat(time) {
  return moment(time, ["HH.mm.ss"]).format("HH:mm");
}

export const ChatTimeFormat = (time) => moment(time, "HH:mm").format("hh:mm a");

export const dateDiffrence = (date) => {
  const todayDate = new Date();
  const TDate = new Date(date);

  var diff = TDate.getTime() - todayDate.getTime();
  var daydiff = Math.round(diff / (1000 * 60 * 60 * 24));
  return daydiff;
};

export const DateFormat = (date) => moment(date).format("YYYY-MM-DD");
export const tomorrowDate = () => moment().clone().add(1, "days");
export const dayAfterTomorrowDate = () => moment().clone().add(2, "days");
export const getOneWeekBeforeDate = () => moment().clone().add(7, "days");
export const getTwoWeekBeforeDate = () => moment().clone().add(14, "days");
export const firstDayOfWeek = () => moment().startOf("week");
export const lastDayOfWeek = () => moment().endOf("week");
export const getYearDiff = (date1, date2) => {
  return Math.abs(date2.getFullYear() - date1.getFullYear());
};

export const getMonthDates = (month, year) => {
  const startDate = moment(`${month} ${year}`, "MMMM YYYY")
    .startOf("month")
    .format("DD MMMM, YYYY");
  const endDate = moment(`${month} ${year}`, "MMMM YYYY")
    .endOf("month")
    .format("DD MMMM, YYYY");
  const dateObj = {
    startDate: startDate,
    endDate: endDate,
  };
  return dateObj;
};
