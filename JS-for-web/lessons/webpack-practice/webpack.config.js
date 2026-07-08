// webpack.config.js
import path from "node:path";

export default {
    // We'll stick to dev mode for now
    mode: "development",
    // The relative path from this config to the src file
    entry: "./src/index.js",
    // Config for the output bundle
    output: {
        filename: "main.js",
        path: path.resolve(import.meta.dirname, "dist"),
        // True: Webpack to replace old with new exports everytime
        clean: true,
    },
    // This is one way to config webpack export
}