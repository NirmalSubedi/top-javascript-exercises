const removeFromArray = function(targetArray, ...elementsToRemove) {
    for (const value of elementsToRemove) {
        while(targetArray.includes(value)){
            const valueIndex = targetArray.indexOf(value);
            targetArray.splice(valueIndex, 1);
        }
    }
    return targetArray;
};

// Do not edit below this line
module.exports = removeFromArray;
