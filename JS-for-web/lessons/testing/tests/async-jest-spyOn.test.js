import axios from 'axios';

const fetchDataAxios = async () => {
    // Axios provides helpful features right out of the box
    // I wouldn't have to convert between a Response and Promise
    const res = await axios.get('https://jsonplaceholder.typicode.com/todos/1');
    return res.data;
};

const fetchDataFetch = async () => {
    const res = await fetch('https://jsonplaceholder.typicode.com/todos/1');
    // const promise = await res.json();
    return res;
};

/**
 * To test these functions, it's better to mock them rather than using
 * the API calls directly. Jest can mock an API call using one of its
 * shorthand for Promise-based mock tests: .spyOn()
 */

describe('mock axios tests', () => {
    beforeEach(() => {
        jest.clearAllMocks();
    });

    test('mock axios method 1', async () => {
        // Mock method 1: spyOn()
        // SYNTAX: jest.spyOn(Object, 'methodOfObject');
        const mockFn = jest
            .spyOn(axios, 'get')
            /**
             * It's important to get the mock returned value wrapped in a data object
             * because the original function returns that value with that shape
             */
            .mockResolvedValue({ data: { userId: 1 } });

        // Then we could just call the original async function directly
        expect(await fetchDataAxios()).toMatchObject({ userId: 1 });

        // the mockFn could also be examined per usual
        // console.log(mockFn.mock.calls);

        // PRO: this method allows the original to co-exists
    });

    test('mock axios method 2', async () => {
        // Mock method 2: mock();
        // SYNTAX: jest.mock('object');
        jest.mock('axios');
        const mockFn = axios.get.mockResolvedValue({
            data: { userId: 1 }
        });
        const res = await mockFn();
        expect(await res.data).toMatchObject({ userId: 1 });
        // console.log(mockFn.mock.calls);

        // PRO: This method is more idiomatic of the original axios.get() call
    });
});

test('mock fetch', async () => {
    const mockFn = jest.spyOn(global, 'fetch').mockResolvedValue({ userId: 1 });
    const res = await fetchDataFetch();
    expect(res).toEqual({ userId: 1 });
});
