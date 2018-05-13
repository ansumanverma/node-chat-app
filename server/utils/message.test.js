var expect = require('expect');

var {generateMessage, generateLocationMessage} = require('./message');

describe('generateMessage', () => {
    it('should generate the correct message object', () => {

        var from = "anshuman";
        var text = "Some message";
        var res = generateMessage( from, text);

        expect(res).toMatchObject({
            from,
            text
        });
        expect(typeof res.createdAt).toBe('number');
    });
});

describe('generateLocationMessage', () => {

    it('should generate correct location object', () => {

        var from = 'Admin';
        var longitude = '77.3869186';
        var latitude = '28.5710753';
        var res = generateLocationMessage(from, latitude, longitude);

        expect(res).toMatchObject({
            from,
            url: `https://www.google.com/maps?q=${latitude},${longitude}`
        });
        expect(typeof res.createdAt).toBe('number');
    });
});