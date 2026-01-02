const leapYears = function(year) {
    const isYearDivisibleByFour = year % 4 === 0;
    const isYearDivisibleByOneHundred = year % 100 === 0;
    const isYearDivisibleByFourHundred = year % 400 === 0;

    return isYearDivisibleByFour && (!isYearDivisibleByOneHundred || isYearDivisibleByFourHundred)

    // Initial solution below, practice clearer solution above
    // return year % 4 === 0 && (year % 400 === 0 || year % 100 !== 0);
};

// Do not edit below this line
module.exports = leapYears;
