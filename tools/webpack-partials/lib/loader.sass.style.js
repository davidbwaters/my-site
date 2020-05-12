///* ====================================================
//   #LOADER - SASS - STYLE
//   ==================================================== */

// Dependencies:
//
// fast-sass-loader
// style-loader
// css-loader

const config = ({
  use = [],
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
