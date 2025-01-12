"use strict";

const stringCalculator = {

    add: (numbers) => {
        if (!numbers) return 0;

        if (numbers.includes(',')) {
            const numbersArray = numbers.split(',');
            return numbersArray.reduce((acc, number) => acc + parseInt(number), 0);
        }
        return parseInt(numbers);
    }

}

module.exports = stringCalculator;