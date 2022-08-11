const sumAll = function(num1, num2) {
    let finalSum = 0;

    if ((typeof num1 !== "number") || typeof num2 !== "number" || (num1 < 0) || (num2 < 0)) {
        return "ERROR";
    }

    if (num1 > num2) {
        let buffer = num1;
        num1 = num2;
        num2 = buffer;
    }

    for (i = num1; i <= num2; i++) {
        finalSum = finalSum + i;
    }

    return finalSum;
};

// Do not edit below this line
module.exports = sumAll;
