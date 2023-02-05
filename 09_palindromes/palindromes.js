const palindromes = function (str) {
    let strPunc = str.replace(/\W/g, '');
    let revStr = strPunc.split("").reverse().join("");

    if (strPunc.toLowerCase() === revStr.toLowerCase()) {
        return true;
    }   else {
        return false;
    };
};

// Do not edit below this line
module.exports = palindromes;
