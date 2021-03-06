const path = require('path');

/* The first module will designate the entry point of the files you want to compile
and the file name for where you want your bundled file to be created. */

module.exports = {
  entry: "./client/src/index.js",
  mode: "development",
  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname, "./client/public"), //this is the folder you want your bundled code to go
  },


  module: {
    rules: [
      /* This section is for your babel loader config. */
      {
        test: /\.(js|jsx)$/,
        exclude: /(node_modules)/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-react", "@babel/preset-env"],
          },
        },
      },
      {
        test: /\.html$/,
        use: {
          loader: "html-loader",
        },
      },
      /* This section is optional and will give you the ability to import css files in react */
      {
        test: /\.css$/i,
        use: ["style-loader", "css-loader"],
      },
    ],
  },
};
