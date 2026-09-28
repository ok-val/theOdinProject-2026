// ## Print all env vars
// console.log(process.env);
// Alternatively, run the `printenv` command via terminal.

// ## Print only API_KEY
// console.log(process.env.API_KEY);

// ## Programmatically load env vars

// For .env files with custom name
process.loadEnvFile('./backend/nodejs/tutorial-scripts/env-vars.env');

// For .env files without custom name - Shell must execute in root
// process.loadEnvFile();
// console.log(process.env);
console.log(process.env.ZOOPA);
