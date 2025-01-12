"use strict";

const stringCalculator = {

    add: (numbers) => {
        if (!numbers) return 0;

        let delimiter = /,|\n/;
        if (numbers.startsWith("//")) {
            const delimiterMatch = numbers.match(/^\/\/(.+)\n/);
            if (delimiterMatch) {
                delimiter = new RegExp(delimiterMatch[1]);
                numbers = numbers.slice(delimiterMatch[0].length);
            }
        }

        const numbersArray = numbers.split(delimiter).map(Number);
        const negatives = numbersArray.filter(n => n < 0);
        if (negatives.length > 0) {
            throw new Error(`Negative numbers not allowed: ${negatives.join(', ')}`);
        }
        return numbersArray.reduce((acc, number) => acc + parseInt(number), 0);
    }

}

module.exports = stringCalculator;