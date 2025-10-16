var subjectList = {
  biology: 30,
  chesmitry: 45,
  physics: 56,
};
var bazarList = {
  alu: "2kg",
  begun: "1kg",
  morich: "1kg",
  rosun: "500gram",
  ada: "200gram",
  "jani Nah": "koto dam",
};

// console.log(bazarList.morich, bazarList.rosun);
// console.log(bazarList["ada"]);
// console.log(bazarList["jani Nah"]);

var keys = Object.keys(bazarList);
var values = Object.values(bazarList);
// console.log(values);

for (var key in keys) {
  //   console.log(key);
  var listKeys = keys[key];
  //   console.log(bazarList[listKeys]);

  console.log(keys[key], " : ", bazarList[listKeys]);
}
