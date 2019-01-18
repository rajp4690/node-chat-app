var expect = require('expect');

var {generateMessage, generateLocationMessage} = require('./message');

describe('generateMessage', () => {
    it('should generate correct message object', () => {
        var from = 'someone';
        var text = 'test text';

        var res = generateMessage(from, text);
        expect(res).toMatchObject({from, text});
        expect(typeof res.createdAt).toBe('number');
    });
});

describe('generateLocationMessage', () => {
    it('should generate correct location object', () => {
        var from = 'tester';
        var latitude = 345;
        var longitude = 2489;
        var url = `https://www.google.com/maps?q=${latitude},${longitude}`;

        var res = generateLocationMessage(from, latitude, longitude);
        expect(res).toMatchObject({from, url});
        expect(typeof res.createdAt).toBe('number');
    });
});