import PropTypes from "prop-types";

export const dayMap = {
  0: "Sunday",
  1: "Monday",
  2: "Tuesday",
  3: "Wednesday",
  4: "Thursday",
  5: "Friday",
  6: "Saturday"
};

export const monthMap = {
  0: "January",
  1: "February",
  2: "March",
  3: "April",
  4: "May",
  5: "June",
  6: "July",
  7: "August",
  8: "September",
  9: "October",
  10: "November",
  11: "December"
};

export const FeedStruct = {
  actor: PropTypes.string,
  created_at: PropTypes.string,
  id: PropTypes.number,
  object: PropTypes.string,
  updated_at: PropTypes.string,
  verb: PropTypes.string
}
