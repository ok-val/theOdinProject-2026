import encipherCaesar from './caesarCipher.js';

const testString1 = '';
const testString2 = 'h3ll0';
const testString3 = '123';
const testString4 = 'hello';
const testString5 = 'Hello';
const testString6 = 'Hello WOrlD';
const testString7 = 'Hello WOrlD!@?';

test('only takes valid strings with only chars', () => {
    // test an empty string
    expect(() => encipherCaesar(testString1)).toThrow(Error);
    // test string containing numbers
    expect(() => encipherCaesar(testString2)).toThrow(Error);
    // test a number string
    expect(() => encipherCaesar(testString3)).toThrow(Error);
});

test('enciphers different casings and spaces', () => {
    // single word string
    expect(encipherCaesar(testString4, 3)).toBe('khoor');
    // single capitalized word string
    expect(encipherCaesar(testString5, 3)).toBe('Khoor');
    // multi-word string with mixed cases
    expect(encipherCaesar(testString6, 3)).toBe('Khoor ZRuoG');
    // multi-word string with mixed cases and punctuations
    expect(encipherCaesar(testString7, 3)).toBe('Khoor ZRuoG!@?');
});
