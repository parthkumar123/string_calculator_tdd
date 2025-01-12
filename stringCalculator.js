"use strict";

const stringCalculator = {

    add: (numbers) => {
        if (!numbers) return 0;

        let delimiter = /,|\n/;

        if (numbers.startsWith("//")) {
            const delimiterMatch = numbers.match(/^\/\/(\[.*?\])+\n/); // Match multiple delimiters in square brackets
            if (delimiterMatch) {
                const delimiters = [...delimiterMatch[0].matchAll(/\[(.*?)\]/g)].map(match => match[1]);
                delimiter = new RegExp(delimiters.map(delim => delim.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')).join("|"));
                numbers = numbers.slice(delimiterMatch[0].length);
            } else {
                const singleDelimiterMatch = numbers.match(/^\/\/(.+)\n/);
                if (singleDelimiterMatch) {
                    delimiter = new RegExp(singleDelimiterMatch[1]);
                    numbers = numbers.slice(singleDelimiterMatch[0].length);
                }
            }
        }

        const numbersArray = numbers.split(delimiter).map(Number);
        const negatives = numbersArray.filter(n => n < 0);
        if (negatives.length > 0) {
            throw new Error(`Negative numbers not allowed: ${negatives.join(', ')}`);
        }

        const validNumbers = numbersArray.filter(n => n <= 1000);

        return validNumbers.reduce((acc, number) => acc + parseInt(number), 0);
    }

}

module.exports = stringCalculator;