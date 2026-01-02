const round = (value, decimalPlaces = 0) => {
  const multiplier = Math.pow(10, decimalPlaces);
  return Math.round(value * multiplier) / multiplier;
}

const convertToCelsius = function(value) {
  const result = (value - 32) * 5/9;
  return round(result, 1);
};

const convertToFahrenheit = function(value) {
  const result = (value * 9 / 5) + 32;
  return round(result, 1);
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
