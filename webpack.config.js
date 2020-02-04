module.exports = {
  mode: "development",
  output: {
    libraryTarget: "umd",
    filename: "bundle.js"
  },
  entry: {
    main: "./index.js"
  },
  externals: {
    "@deck.gl/layers": "deck",
    "@deck.gl/core": "deck"
  }
};
