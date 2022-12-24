const convertToCelsius = function(tempFah) {
    let resultCel = (tempFah - 32) * (5/9);
    let resultCelRounded = (Math.round(resultCel * 10) / 10);
    return resultCelRounded;
};

const convertToFahrenheit = function(tempCel) {
    let resultFah = (tempCel * (9 / 5)) + 32;
    let resultFahRounded = (Math.round(resultFah * 10) / 10);
    return resultFahRounded;
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
