module.exports = {
  mode: "development",
  output: {
    libraryTarget: "umd",
    filename: "bundle.js",
    library: "LabeledGeoJsonLayerLibrary"
  },
  entry: "./index.js",
  externals: {
    "@deck.gl/layers": {
      commonjs: "deck",
      commonjs2: "deck",
      root: "deck"
    },
    "@deck.gl/core": {
      root: "deck",
      commonjs: "deck",
      commonjs2: "deck"
    }
  }
};
