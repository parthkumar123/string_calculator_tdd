"use strict";

const stringCalculator = {

    add: (numbers) => {
        if (!numbers) return 0;

        if (numbers.includes(',')) {
            const numbersArray = numbers.split(',');
            return parseInt(numbersArray[0]) + parseInt(numbersArray[1]);
        }
        return parseInt(numbers);
    }

}

module.exports = stringCalculator;