///* ====================================================
//   #DUAL - SASS - EXTRACT-CSS-CHUNKS
//   ==================================================== */

// Dependencies:
//
// css-loader
// fast-sass-loader
// extract-css-chunks-webpack-plugin

const ExtractCssChunksPlugin = require(
  'extract-css-chunks-webpack-plugin'
)

const config = ({
  use = [],
  loaderOptions = {},
  pluginOptions = {},
  include,
  exclude
} = {}) => {

  return {
    module: {
      rules: [
        {
          test: /\.scss$/,
          include,
          exclude,
          use: [
            {
              loader: ExtractCssChunksPlugin.loader,
              options: loaderOptions
            }
          ]
            .concat(use)
            .concat([
              'css-loader',
              'fast-sass-loader'
            ])
        }
      ]
    },
    plugins: [new ExtractCssChunksPlugin(pluginOptions)]
  }

}

module.exports = config
