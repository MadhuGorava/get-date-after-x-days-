const addDays = require("date-fns/addDays");
const date = (days) => {
  addDays(new Date(22, 8, 2020), days);
};

module.exports = date;
