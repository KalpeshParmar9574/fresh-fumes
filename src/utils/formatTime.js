import { format, formatDistanceToNow } from "date-fns";
import moment from "moment";
// ----------------------------------------------------------------------

export function fDate(date) {
  return format(new Date(date), "dd MMMM yyyy");
}

export function fDateCustom(date) {
  if (date) {
    return format(new Date(date), "dd/MM/yyyy");
  } else {
    return "-";
  }
}
export function fDateCustomNew(date) {
  if (date) {
    return format(new Date(date), "MM/yyyy");
  } else {
    return "-";
  }
}
export function getFullNameOfMonth(date) {
  return moment(date).format("MMMM");
}
export function getDayName(date) {
  return moment(date).format("ddd");
}
export function fDateTime(date) {
  return format(new Date(date), "dd/MM/yyyy HH:mm");
}

export function fDateTime12(date) {
  return format(new Date(date), "dd/MM/yyyy  p");
}
export function fDateTimeSuffix(date) {
  return format(new Date(date), "dd/MM/yyyy hh:mm p");
}

export function fToNow(date) {
  return formatDistanceToNow(new Date(date), {
    addSuffix: true,
  });
}

export function convertTo12HrsFormat(time) {
  return moment(time, ["HH.mm.ss"]).format("hh:mm a");
}
export function convertTo24HrsFormat(time) {
  return moment(time, ["HH.mm.ss"]).format("HH:mm");
}
export const convertCustomDateFormat = (date) => {
  return moment(new Date(date)).format("YYYY-MM-DD");
};

export const getTime = (date) => {
  return moment(new Date(date)).format("HH:mm");
};

export const birthDateConvertCustomDateFormat = (date, bdate) => {
  const todayDate = moment(new Date(date)).format("MM");
  const birthDate = moment(new Date(bdate)).format("MM");

  if (todayDate === birthDate) {
    var year = new Date().getFullYear();
    var month = new Date(bdate).getMonth();
    var day = new Date(bdate).getDate();
    var c = new Date(year, month, day);

    return moment(c).format("YYYY-MM-DD");
  }
};

export const indianDateTimeFormat = (dateTime) => moment(dateTime).format("DD/MM/YYYY hh:mm:ss a");

export const addMonthsExactPosition = (date, numberOfMonth) => {
  let verifyDate = moment(date).add(numberOfMonth, "M");
  const dayName = moment(verifyDate).format("ddd");
  if (dayName.toLowerCase() === "sun") {
    verifyDate = moment(verifyDate).add(1, "day");
  } else if (dayName.toLowerCase() === "sat") {
    verifyDate = moment(verifyDate).add(2, "day");
  }
  return verifyDate;
};

export const addMonths = (date, numberOfMonth) => {
  let verifyDate = moment(date)
    .add(numberOfMonth, "M")
    .startOf("month")
    .format("YYYY-MM-DD");

  const dayName = moment(verifyDate).format("dddd");
  if (dayName === "Sunday") {
    verifyDate = moment(verifyDate).add(1, "day").format("YYYY-MM-DD");
  } else if (dayName === "Saturday") {
    verifyDate = moment(verifyDate).add(2, "day").format("YYYY-MM-DD");
  }
  return verifyDate;
};

export const getDay = (date) => moment(date, "YYYY-MM-DD").format("D");

export const enumerateDaysBetweenDates = (startDate, endDate) => {
  let date = [];
  while (moment(startDate) <= moment(endDate)) {
    date.push(startDate);
    startDate = moment(startDate).add(1, "days").format("YYYY-MM-DD");
  }
  return date;
};

export const getArrayOfDates = (holidayDate) => {
  const listOfDates = [];
  if (holidayDate.length > 0) {
    holidayDate.forEach((currObjDate) => {
      listOfDates.push(
        ...enumerateDaysBetweenDates(currObjDate.start, currObjDate.end)
      );
    });
  }

  return listOfDates;
};
