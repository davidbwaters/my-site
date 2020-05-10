///* ====================================================
//   #LOADER - JS - BABEL
//   ==================================================== */

// Dependencies:
//
// babel-loader
// @babel/core
// @babel/preset-env

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
          test: /\.m?js$/,
          include,
          exclude,
          use: [
            {
              loader: 'babel-loader',
              options: Object.assign(loaderOptions, {
                presets: [
                  [
                    '@babel/preset-env',
                    {
                      'modules': false
                    }
                  ]
                ]
              })
            }
          ].concat(use)
        }
      ]
    }
  }

}

module.exports = config
