"use strict";
const stringCalculator = require('../stringCalculator');

describe('stringCalculator', () => {
    it('should return 0 for an empty string', () => {
        expect(stringCalculator.add('')).toBe(0);
    });
});