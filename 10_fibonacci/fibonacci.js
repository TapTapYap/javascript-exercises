const fibonacci = function(num) {
    let a = 0;
    let b = 1;

    if (num < 0) {
        return "OOPS";
    }
    if (num === 0) {
        return 0;
    }
    
    for (let i = 1; i < num; i++) {
        let temp = b;
        b = a + b;
        a = temp;
    }
    return b;
};

// Do not edit below this line
module.exports = fibonacci;
