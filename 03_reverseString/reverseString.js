const reverseString = function(inputString) {
  let inputLength = inputString.length
  console.log(inputLength)
  let splitArray = [];
  for (let i = 0; i < inputLength; i++) {
    splitArray = splitArray.concat(inputString.charAt((inputLength - 1) - i));
  }
  return splitArray.join("")
};

// Do not edit below this line
module.exports = reverseString;
