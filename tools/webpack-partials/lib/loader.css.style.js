///* ====================================================
//   #LOADER - CSS - STYLE
//   ==================================================== */

// Dependencies:
//
// style-loader
// css-loader

const config = ({
  use = ['css-loader'],
  loaderOptions,
  include,
  exclude
} = {}) => {

  return {
    module: {
      rules: [
        {
          test: /\.css$/,
          include,
          exclude,
          use: [
            {
              loader: 'style-loader',
              options: loaderOptions
            }
          ].concat(use)
        }
      ]
    }
  }

}

module.exports = config
