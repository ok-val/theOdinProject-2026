## Benefits of Test Runners

- **Prettier Outputs:** More readable output compared to vanilla JavaScript.
- **Cross-Machine Consistency:** Testing systems behave consistently across different environments.
- **Simpler CI/CD:** Easier integration into continuous integration and delivery pipelines.
- **Auto-Run Capability:** Automatically re-runs tests on save, acting like a real-time linter for application logic (config in package.json).

## Why Jest?

- **Established Ecosystem:** Widely adopted with strong community support and long-term stability.
- **Ready Out-of-the-Box:** Minimal setup required (requires `babel-jest` for ES module support).

## Installation & Setup

1. Install Jest

> npm i -D jest

2. ES6 (ESM) Compatibility Setup

Jest natively uses CommonJS syntax (`require` / `module.exports`), which does not support ECMAScript Modules (`import` / `export`). To use modern ESM syntax, transpile your code using Babel:

> npm init jest@latest
> npm install --save-dev babel-jest @babel/core @babel/preset-env

_Note:_ Transpilation happens in memory and does not alter your source code files. Check for the latest compatible Babel version when setting up (currently `v7+`).

3. Config test script in `package.json`
