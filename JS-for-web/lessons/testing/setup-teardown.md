# Repeatable setup & Test scoping

Source: https://jestjs.io/docs/setup-teardown

## Repeating setup

If I have some methods to call or objects to create for EACH test.
I have `.beforeEach()` and `.afterEach()` to handle what happens before
and after EACH test.

```js
beforeEach(() => {
    initializeCityDatabase();
});

afterEach(() => {
    clearCityDatabase();
});

test('city database has Vienna', () => {
    expect(isCity('Vienna')).toBeTruthy();
});

test('city database has San Juan', () => {
    expect(isCity('San Juan')).toBeTruthy();
});
```

For ALL tests, use `.beforeAll()` and `.afterALL()` if multiple tests
would use the same functional context.

## Test Scoping

For tests that needs to be created within an ISOLATED context:

```js
beforeEach(() => {
    return initializeCityDatabase();
});

test('city database has Vienna', () => {
    expect(isCity('Vienna')).toBeTruthy();
});

test('city database has San Juan', () => {
    expect(isCity('San Juan')).toBeTruthy();
});

describe('matching cities to foods', () => {
    // Applies only to tests in this describe block
    beforeEach(() => {
        return initializeFoodDatabase();
    });

    test('Vienna <3 veal', () => {
        expect(isValidCityFoodPair('Vienna', 'Wiener Schnitzel')).toBe(true);
    });

    test('San Juan <3 plantains', () => {
        expect(isValidCityFoodPair('San Juan', 'Mofongo')).toBe(true);
    });
});
```

## Testing order of operation

The `.before*` and `.after*` wrap around `test()` and `describe()`
differently, so make sure to revisit the source to see when they run.

## Isolate test with .only()

When overwhelmed with many tests, isolate test by using `test.only()`.

```js
test.only('this will be the only test that runs', () => {
    expect(true).toBe(false);
});

test('this test will not run', () => {
    expect('A').toBe('A');
});
```
