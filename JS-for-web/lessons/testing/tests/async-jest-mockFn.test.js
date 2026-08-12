// Source: https://jestjs.io/docs/mock-functions

const asyncFetch = async () => {
    const response = await fetch(
        'https://jsonplaceholder.typicode.com/todos/1'
    );
    return await response.json();
};

// So the question here is how do we mock this implementation for testing?
/**
 * The trick is instead of actually fetching from a url,
 * I just mock the return value of the url, providing we know how the
 * source structure their data.
 * { userId: 1, id: 1, title: 'delectus aut autem', completed: false }
 */

test('returns something', async () => {
    const data = await asyncFetch();
    expect(data).toMatchObject({ userId: 1 });
});

/**
 * jest.fn is a mock function constructor that allows us to track
 * calls and results. It's a fascinating piece of tech...
 */

test('mock single callback pattern', () => {
    const mockFn = jest.fn();
    // I could also mock the return value of mockFn (even chaining)
    // See './async-jest-spyOn.test.js' for returning mock Promises
    mockFn.mockReturnValueOnce(true);
    mockFn.mockReturnValueOnce(false);
    mockFn.mockReturnValueOnce('3rd call');

    expect(mockFn()).toBe(true);
    expect(mockFn()).toBe(false);
    expect(mockFn()).toBe('3rd call');
});

test('mock recursive callback pattern', () => {
    const mockFn = jest.fn(x => x + 2);
    const testItems = [4, 2];

    testItems.forEach(item => mockFn(item));

    // mockFns could be inspected through the mock property
    console.log(mockFn.mock.results[0].value);

    // Now mockFn would have run twice and mockFn will now contains 2 calls
    expect(mockFn.mock.calls.length).toBe(testItems.length);
});
