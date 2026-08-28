# Set up Vitest with React Testing Library (RTL)

Source: https://www.robinwieruch.de/vitest-react-testing-library/

1. Install Vitest:

> npm install vitest --D

2. Update `package.json` scripts to use vitest for testing:

```json
{
  ...
  "scripts": {
    "dev": "vite",
    "build": "vite build",
    "test": "vitest",
    "preview": "vite preview"
  },
  ...
}
```

3. Run Vitest

> npm run test

Or test specific files:

> npm test <dir>

Vitest automatically enters watch mode. Good stuff!

## Vitest basic test suites

Come over to [[basic-suites.test.jsx]] and see how the basic suites
implement. We have:

- Suite: `describe()`
- Case: `it()`
- Assertion: `expect().toBe()`

---

## Set up React Testing Library with `jsdom`

Because RTL tests React components which contain markup, we need an
external library to enable that compatibility: `jsdom` is our go-to.

1. Install jsdom

> npm install jsdom -D

2. Install RTL (w/ `user-event` package as recommended by TOP)

> npm install @testing-library/react @testing-library/jest-dom
> @testing-library/user-event --save-dev

In which:

- `@testing-library/react` provides test functions like `render()`
- `@testing-library/jest-dom` includes custom matchers (aka
  assertions/assertive functions). Find all matchers on jest-dom github.
- `@testing-library/user-event` simulates user interactions

3. Add a **TEST SETUP FILE** (optional but useful)

```js
// tests/setup.js
import { expect, afterEach } from 'vitest';
import { cleanup } from '@testing-library/react';
import * as matchers from '@testing-library/jest-dom/matchers';

expect.extend(matchers);

afterEach(() => {
  cleanup();
});
```

4. Config the test environment to use `jsdom`

```js
// ./vite.config.js
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  test: {
    environment: 'jsdom'
  }
});
```

5. Config testing to global and include setup files

```js
// ./vite.config.js
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  test: {
    globals: true,
    environment: 'jsdom',
    setupFiles: './tests/setup.js'
  }
});
```
