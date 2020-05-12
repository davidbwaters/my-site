///* ====================================================
//   #PLUGIN - OPTIMIZE-CSS-ASSETS
//   ==================================================== */

// Add after extracting CSS

// Dependencies:
//
// webpack-merge
// cssnano
// css-loader
// extract-css-chunks-webpack-plugin
// optimize-css-assets-webpack-plugin

const OptimizeCssAssetsPlugin = require(
  'optimize-css-assets-webpack-plugin'
)

const config = (pluginOptions = {}) => {

  return {
    plugins: [new OptimizeCssAssetsPlugin(pluginOptions)]
  }

}

module.exports = config
