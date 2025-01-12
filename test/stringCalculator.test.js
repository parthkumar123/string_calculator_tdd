"use strict";
const stringCalculator = require('../stringCalculator');

describe('stringCalculator', () => {
    it('should return 0 for an empty string', () => {
        expect(stringCalculator.add('')).toBe(0);
    });

    test('returns the number itself for a single number', () => {
        expect(stringCalculator.add("1")).toBe(1);
    });

    it('should return some of two numbers', () => {
        expect(stringCalculator.add('1,2')).toBe(3);
    });
});