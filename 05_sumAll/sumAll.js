const sumAll = function(a, b) {
    if(isNaN(a) || isNaN(b) || typeof a == "string" || typeof b == "string"){
        return 'ERROR';
    }
    if(a < 0 || b < 0) { 
        return 'ERROR';
    }
    let min = Math.min(a, b);
    let max = Math.max(a, b);
    let sum = 0;
    for (let j = min; j <= max; j++) {
        sum = sum + j;
    }
    return sum;
};

// Do not edit below this line
module.exports = sumAll;
