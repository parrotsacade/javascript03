var numberList = [10, 20, 54, 67, 105, 10, 12, 56, 100];
var highestNumber = [0];
for (var i = 0; i < numberList.length; i++) {
  if (highestNumber < numberList[i]) {
    highestNumber = numberList[i];
  }
}
console.log(highestNumber);
