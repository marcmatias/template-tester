const path = require("path");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const RemoveEmptyScriptsPlugin = require("webpack-remove-empty-scripts");

module.exports = (env, argv) => {
  return {
    plugins: [
      new RemoveEmptyScriptsPlugin(), // Removing empty script generated by scss file
      new MiniCssExtractPlugin({
        filename: "../css/test.min.css",
      }),
    ],
    optimization: {
      removeEmptyChunks: true,
    },
    mode: argv.mode,
    experiments: {
      outputModule: true,
    },
    entry: {
      style: "./style.scss",
    },
    output: {
      filename: "[name].min.js",
      path: path.resolve(__dirname, "dist"),
      library: {
        type: "module",
      },
    },
    module: {
      rules: [
        {
          test: /\.s[ac]ss$/i,
          use: [
            MiniCssExtractPlugin.loader,
            "css-loader", // Translates CSS into CommonJS
            "sass-loader", // Compiles Sass to CSS
          ],
        },
      ],
    },
  };
};
