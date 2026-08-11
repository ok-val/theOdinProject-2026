import capitalize from './capitalize.js';

const testString1 = '';
const testString2 = 'h3ll0';
const testString3 = '123';
const testString4 = 'hello';
const testString5 = 'hello world';
const testString6 = ' hello world ';

test('only takes valid strings with only chars', () => {
    // test an empty string
    expect(() => capitalize(testString1)).toThrow(Error);
    // test string containing numbers
    expect(() => capitalize(testString2)).toThrow(Error);
    // test a number string
    expect(() => capitalize(testString3)).toThrow(Error);
});

test('returns a string with the first char capitalized for each word', () => {
    // single words
    expect(capitalize(testString4)).toBe('Hello');
    // multiple words
    expect(capitalize(testString5)).toBe('Hello World');
    // words starting + ending with space
    expect(capitalize(testString6)).toBe('Hello World');
});
