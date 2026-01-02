const repeatString = function(string, numOfRepetition) {
    let result = '';

    if(numOfRepetition < 0) return 'ERROR';

    for(let i = 0; i < numOfRepetition; i++){
        result+=string;
    }

    return result;
};

// Do not edit below this line
module.exports = repeatString;
