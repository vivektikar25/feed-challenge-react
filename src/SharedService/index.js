import * as sharedData from "./../SharedData/";

const getDayByDate = formattedDate => {
  let day = formattedDate.getDay();
  return sharedData.dayMap[day];
};

const getMonthByDate = formattedDate => {
  let month = formattedDate.getMonth();
  return sharedData.monthMap[month];
};

export const getFormattedDate = dateStr => {
  let formattedDate = new Date(dateStr);
  let day = getDayByDate(formattedDate);
  let month = getMonthByDate(formattedDate);
  let year = formattedDate.getFullYear();
  let date = formattedDate.getDate();
  return `${day}, ${month} ${date}, ${year}`;
};
