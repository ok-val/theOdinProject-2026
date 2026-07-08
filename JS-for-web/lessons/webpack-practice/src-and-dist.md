## SRC and DIST--- the two most important directories

src: sources
dist: distribution

**src** is the place for all SOURCE CODES, essentially where our work
would be done (configs file may live elsewhere, that's ok).

**dist** is the place where Webpack will save our BUNDLED CODES to.

### Benefits

Having two separate dirs for the source and the bundled code is helpful
because it allows: 
1) Cloning a repo just with the `src` (without needing the `dist`) 
since dist could be created using Webpack anyway;
2) Deploying would only need the `dist` (without needing the `src`).

In short, 
Build in `src`,
Deploy in `dist`.
