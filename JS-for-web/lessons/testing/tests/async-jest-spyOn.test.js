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

test('mock axios', async () => {
    // jest.spyOn(Object, "methodOfObject")
    const mockFn = jest
        .spyOn(axios, 'get')
        /**
         * It's important to get the mock returned value wrapped in a data object
         * because the original function returns that value with that shape
         */
        .mockResolvedValue({ data: { userId: 1 } });
    const res = await fetchDataAxios();
    // Then we could just call the original async function directly
    expect(res).toEqual({ userId: 1 });

    // the mockFn could also be examined per usual
    console.log(mockFn.mock.calls);
});

test('mock fetch', async () => {
    const mockFn = jest.spyOn(global, 'fetch').mockResolvedValue({ userId: 1 });
    const res = await fetchDataFetch();
    expect(res).toEqual({ userId: 1 });
});
