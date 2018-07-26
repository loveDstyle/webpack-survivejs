const HtmlWebpackPlugin = require("html-webpack-plugin");
const merge = require("webpack-merge");
const parts = require("./webpack.part");

const path = require("path");
const glob = require("glob");

const PATHS = {
    app: path.join(__dirname, "../src"),
};

const common = merge([
    {
        plugins: [
            new HtmlWebpackPlugin({
                title: "Webpack demo",
            }),
        ],
    },
]);

const production = merge([
    parts.extractCSS({
        use: ["css-loader", parts.autoPrefix()],
    }),
    parts.purifyCSS({
        paths: glob.sync(`${PATHS.app}/**/*.js`, { nodir: true }),
    }),
]);

const development = merge([
    parts.devServer({
        // Customize host/port here if needed
        host: process.env.HOST,
        port: process.env.PORT,
    }),
    parts.loadCSS(),
]);

module.exports = ({test: mode}) => {
    console.log(`It's ${mode} mode`);
    if (mode === "production") {
        return merge(common, production, { mode });
    }

    return merge(common, development, { mode });
};