const removeFromArray = function(baseArray, ...badApples) {
  return baseArray.filter(item => testApples(item, badApples));
};

function testApples(item, badApples) {
  let index = 0;
  let bad = false;
  while (index < badApples.length && bad == false) {
    bad = item === badApples[index]
    index++
  }
  return !bad
}

// Do not edit below this line
module.exports = removeFromArray;
