"use strict";
const stringCalculator = require('../stringCalculator');

describe('stringCalculator', () => {
    it('should return 0 for an empty string', () => {
        expect(stringCalculator('')).toBe(0);
    });
});