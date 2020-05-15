///* ====================================================
//   #LOADER - SASS - FAST-SASS / STYLE
//   ==================================================== */

// Dependencies:
//
// css-loader
// fast-sass-loader
// style-loader

const config = ({
  loaderOptions = {},
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
              loader: 'style-loader',
              options: loaderOptions
            },
            'css-loader',
            'fast-sass-loader'
          ]
        }
      ]
    }
  }

}

module.exports = config
