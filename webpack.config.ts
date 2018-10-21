import * as HtmlWebpackPlugin from "html-webpack-plugin";
import { resolve } from "path";
import * as webpack from "webpack";

export default (// tslint:disable-line:no-default-export
    env: undefined,
    options: webpack.Configuration,
): webpack.Configuration => ({
    entry: "./src/index.ts",
    resolve: {
        extensions: [".tsx", ".ts", ".js"],
    },
    output: {
        filename: "js/[name].js",
        path: resolve(__dirname, "dist"),
    },
    module: {
        rules: [
            {
                test: /\.ts(x?)$/,
                exclude: /node_modules/,
                use: [
                    {
                        loader: "babel-loader",
                        options: {
                            babelrc: true,
                        },
                    },
                    {
                        loader: "ts-loader",
                    },
                ],
            },
        ],
    },
    plugins: [
        // generate for us our index.html page
        new HtmlWebpackPlugin({
            title: "Test Project",
            minify: {
                collapseWhitespace: true,
            },
        }),
    ],
    optimization: {
        sideEffects: true,
        usedExports: true,
    },
    devtool: options.mode === "development"
        ? "source-map"
        : false,
});
