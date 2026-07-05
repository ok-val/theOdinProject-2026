Bottom line:

* `devDependencies` stands for DEVELOPMENT dependencies, which are dependancies
needed during development phase, but not necessary for production. Some examples
of these are babel plugins and presets, test runners (like the one I see with
TOP) and linter packages.

* `dependencies` stand for PRODUCTION dependencies, which are dependencies 
needed at runtime; they might have also been pulled and bundled together prior.
Production dependency SUBSUMES development dependencies. 