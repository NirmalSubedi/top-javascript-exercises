const sumAll = function (number1, number2) {
    // if (typeof number1 !== 'number' || typeof number2 !== 'number') return 'ERROR';
    if (number1 < 0 || number2 < 0) return 'ERROR';
    // if (number1 % 1 !== 0 || number2 % 1 !== 0) return 'ERROR';
    if (!Number.isInteger(number1) || !Number.isInteger(number2)) return 'ERROR';

    // Initial Solution in comment
    // let biggerNumber, smallerNumber;
    // if (number1 > number2) {
    //     biggerNumber = number1;
    //     smallerNumber = number2;
    // } else {
    //     biggerNumber = number2;
    //     smallerNumber = number1;
    // }

    if(number1 > number2) [number1, number2] = [number2, number1];

    let sum = 0;
    for(let i = number1; i <= number2; i++){
        sum += i;
    }
    return sum;
};

// Do not edit below this line
module.exports = sumAll;
