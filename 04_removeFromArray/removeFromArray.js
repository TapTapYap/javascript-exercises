const removeFromArray = function() {
    let args = Array.prototype.slice.call(arguments);
    let arr = args[0];
    for (let i = 0; i < arr.length; i++) {
      for (let j = 1; j < args.length; j++) {
        if (arr[i] === args[j]) {
          delete arr[i];
        }
      }
    }
    return arr.filter(Boolean);
  }
// Do not edit below this line
module.exports = removeFromArray;
