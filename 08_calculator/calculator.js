const add = function(a, b) {
  let result = (a + b);
	return result;
};

const subtract = function(a, b) {
	let result = (a - b);
  return result;
};

const sum = function(arraySum) {
	let result = 0;
  for (i = 0; i < arraySum.length; i++) {
    result += arraySum[i];
  }
  return result;
};

const multiply = function(mArray) {
  let result = 1;
  for (i = 0; i < mArray.length; i++) {
    result *= mArray[i];
  }
  return result;
};

const power = function(a, b) {
	let result = Math.pow(a, b);
  return result;
};

const factorial = function(number) {
	let result = 1;

  for (let i = 2; i <= number; i++) {
    result *= i;
  }
  return result;
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
