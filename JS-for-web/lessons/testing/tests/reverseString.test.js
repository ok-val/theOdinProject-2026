import reverseString from './reverseString.js';

const testString1 = '';
const testString2 = 'h3ll0';
const testString3 = '123';
const testString4 = 'hello';
const testString5 = 'hello world';

test('only takes valid strings with only chars', () => {
    // test an empty string
    expect(() => reverseString(testString1)).toThrow(Error);
    // test string containing numbers
    expect(() => reverseString(testString2)).toThrow(Error);
    // test a number string
    expect(() => reverseString(testString3)).toThrow(Error);
});

test('return reverse String', () => {
    // single word reverse
    expect(reverseString(testString4)).toBe('olleh');
    // multiple word reverse
    expect(reverseString(testString5)).toBe('dlrow olleh');
});
