const path = require("path");

module.exports = {
  entry: "./js/main.js",
  module: {
    rules: [
      {
        test: /\.m?js$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-env"],
          },
        },
      },
    ],
  },
  output: {
    filename: "main.js",
    path: path.resolve(__dirname, "output"),
  },
};
