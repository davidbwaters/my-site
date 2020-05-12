///* ===================================================
//   #WEBPACK CONFIG
//   =================================================== */

const path = require('path')
const merge = require('webpack-merge')
const partials = require('./webpack-partials/index.js')

const rootDir = require('app-root-dir').get()
const common = merge.smart(
  {
    context: path.resolve(rootDir, 'main'),
    entry: {
      main: './main.js'
    },
    output: {
      path: path.resolve(rootDir, 'build'),
      filename: '[name].[hash].js',
      chunkFilename: '[name].[id].js'
    }
  },
  partials.loaderJsBabel(),
  partials.loaderFontsFile(),
  partials.loaderSvgFile(),
  partials.pluginHtml(),
  partials.pluginBundleAnalyzer,
  partials.pluginClean()
)

const development = merge.smart(
  partials.configDevServer(),
  partials.loaderImageUrl(),
  partials.loaderSassStyle(),
  partials.loaderCssStyle()
)

const production = merge.smart(
  partials.loaderImageFile(),
  partials.dualCssExtractCssChunks(),
  partials.dualSassExtractCssChunks(),
  partials.pluginOptimizeCssAssets(),
  partials.configCodeSplitVendor()
  // partials.pluginPurgecss()
)

module.exports = (env, argv) => {

  return argv.mode && argv.mode === 'production'
    ? merge.smart(common, production)
    : merge.smart(common, development)

}
