const { terser } = require("rollup-plugin-terser");

export default {
  input: "StringUtilities.js",
  output: {
    file: "./dist/string-utilities.min.js",
    format: "umd",
    name: "StringUtilities"
  },
  plugins: [terser()]
};
