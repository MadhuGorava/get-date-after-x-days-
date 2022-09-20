const date = require("./index");
const result = date((days = 10));
console.log(`${result.getDate()}-${result.getMonth()}-${result.getFullYear()}`);
