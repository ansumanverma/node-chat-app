const expect = require('expect');

const {isRealString} = require('./validation');

describe('isRealString', () => {

    it('should reject non-string values', () => {

        var res = isRealString(123);

        expect(res).toBe(false);
    });

    it('should reject string with only space', () => {

        var res = isRealString('   ');

        expect(res).toBe(false);
    });

    it('should allow with non-space characters', () => {

        var res = isRealString(' anshuman   verma ');

        expect(res).toBe(true);
    });
});