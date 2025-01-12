"use strict";

const stringCalculator = {

    add: (numbers) => {
        if (!numbers) return 0;

        const delimiter = /,|\n/;

        if (delimiter.test(numbers)) {
            const numbersArray = numbers.split(delimiter);
            return numbersArray.reduce((acc, number) => acc + parseInt(number), 0);
        }
        return parseInt(numbers);
    }

}

module.exports = stringCalculator;