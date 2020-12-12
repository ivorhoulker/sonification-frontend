const fs = require("fs");
const rawdata = require("./jyutpingSource.json");

// let array = JSON.parse(rawdata);
let object = {};
rawdata.map((obj) => (object[obj.CH] = obj));

let data = JSON.stringify(object, null, 2);

fs.writeFile("jyutping.json", data, (err) => {
  if (err) throw err;
  console.log("Data written to file");
});

console.log("This is after the write call");
