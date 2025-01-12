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

    it('should return some of multiple numbers', () => {
        expect(stringCalculator.add('1,2,3')).toBe(6);
    });

    it('Allow new line between numbers instead of commas', () => {
        expect(stringCalculator.add('1\n2,3')).toBe(6);
    });

    it('Allow different delimiters', () => {
        expect(stringCalculator.add('//;\n1;2')).toBe(3);
    });

    test('throws exception for negative numbers', () => {
        expect(() => stringCalculator.add("1,-2,3,-4")).toThrow("Negative numbers not allowed: -2, -4");
    });

    test('Numbers that are greater than 1000 should be ignored', () => {
        expect(stringCalculator.add("1001,3")).toBe(3);
    });

    test('Delimeters can be of any length', () => {
        expect(stringCalculator.add("//[***]\n1***2***3")).toBe(6);
    });
});