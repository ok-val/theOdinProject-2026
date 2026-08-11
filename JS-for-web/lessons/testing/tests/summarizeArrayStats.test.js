import summarizeArrayStats from './summarizeArrayStats.js';

const string = new String('');
const testArray1 = [1, 8, 3, 4, 2, 6];
const testArray2 = ['a', 8, 3, 4, 2, 6];

test('throws Error given non-array or non-Integers array members', () => {
    // expect a result of a callback, therefore provide a callback
    expect(() => summarizeArrayStats(string)).toThrow(Error);
    expect(() => summarizeArrayStats(testArray2)).toThrow(Error);
});

test('return { average }', () => {
    expect(summarizeArrayStats(testArray1)).toMatchObject({ average: 4 });
});

test('return { min }', () => {
    expect(summarizeArrayStats(testArray1)).toMatchObject({ average: 4 });
});

test('return { max }', () => {
    expect(summarizeArrayStats(testArray1)).toMatchObject({ average: 4 });
});

test('return { length }', () => {
    expect(summarizeArrayStats(testArray1)).toMatchObject({ length: 6 });
});
