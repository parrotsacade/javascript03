var amarGecheAche = 30000000;
var car = 2200000;
var bike = 180000;
var iphone = 25000;
// if (amarGecheAche > car) {
//   console.log("hurray ! ame car kinmu");
// } else if (amarGecheAche > bike) {
//   console.log("hurray ! ame bike kinmu");
// } else if (amarGecheAche > iphone) {
//   console.log("hurray ! ame iphone kinmu");
// } else {
//   console.log("na re ba ame kintam partam nay");
// }

switch (amarGecheAche > car) {
  case amarGecheAche > car:
    console.log("hurray ! ame car kinmu");
    break;
  case amarGecheAche > bike:
    console.log("hurray ! ame car kinmu");
    break;
  default:
    console.log("hurray ! ame kintam nay");
    break;
}

var kinmu = true ? "ami bike kinmu " : "na kintam nay kicchu";
console.log(kinmu);
