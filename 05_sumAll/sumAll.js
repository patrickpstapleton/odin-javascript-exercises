const sumAll = function(firstNum, secondNum) {

  let sum = 0;
  let start = firstNum;
  let end = secondNum;

  if (firstNum < 0 || secondNum < 0 || 
      typeof firstNum !== 'number' || 
      typeof secondNum !== 'number') {
    return 'ERROR';
  }
  else if(firstNum > secondNum) {
    start = secondNum;
    end = firstNum;
  }

  for (let i = start; i <= end; i++) {
    sum += i;
  }

  return sum;
};

// Do not edit below this line
module.exports = sumAll;
