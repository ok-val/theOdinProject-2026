// webpack.config.js
import HtmlWebpackPlugin from "html-webpack-plugin";
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

    // Here are a few helpful tools for dev
    /**
     * setting `eval-source-map` as a devtool helps matching the correct
     * files and line numbers from our dev code to our browser-based
     * DevTool
     */ 
    devtool: "eval-source-map",
    /**
     * `webpack-dev-server` ignores our html template in its 
     * auto-restart protocol. Adding the html template to the watch list
     * resolves this issue.
     */
    devServer: {
        watchFiles: ["./src/template.html"],
    },

    plugins: [
        // Enable our new plugin for HTML bundling
        new HtmlWebpackPlugin({
            template: "./src/template.html",
        }),
    ],

    // Enable the CSS loaders
    // Which aren't plugins, so they go in a separate section:
    module: {
        rules: [
            {
                test: /\.css$/i,
                /**
                 * Note that the order of the loaders is important
                 * since we want to read the CSS file into a string 
                 * first, then use style-loader to inject the JS code 
                 * onto our page.
                 */
                use: ["style-loader", "css-loader"],
            },
            {
                test: /\.html$/i,
                use: ["html-loader"],
            },
            {
                test: /\.(png|svg|jpg|jpeg|gif)$/i,
                type: "asset/resource",
            }
        ],
    },
}