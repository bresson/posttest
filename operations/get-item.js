const fs = require("fs");

const data = fs.readFileSync("./data/item.json");
const parsedData = JSON.parse(data);

function getItem() {
  console.log("Requested Item data: ", data);
  return parsedData;
}

module.exports = { getItem };
