function sqrt(number) {
  return sqrt_recursive(number, 0, number)
}

function sqrt_recursive(number, min_interval, max_interval) {
  // write your code here
  let sqrtVariable;
  let square;

  while (true) {
    sqrtVariable = min_interval + Math.round((max_interval - min_interval) / 2);
    square = sqrtVariable * sqrtVariable;
    if (square > number) {
      max_interval = sqrtVariable -1;
    } else if (square < number) {
      min_interval = sqrtVariable + 1;
    } else {
      return sqrtVariable;
    }
  }
}

module.exports = sqrt;
console.log(sqrt(25))
console.log(sqrt(7056))
