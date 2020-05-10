///* ===================================================
//   #PLUGIN - HTML
//   =================================================== */

// Dependencies:
//
// app-root-dir
// html-webpack-plugin

const HTMLWebpackPlugin = require('html-webpack-plugin')
const path = require('path')

const rootDir = require('app-root-dir').get()

const config = (pluginOptions = {}) => {

  return {
    plugins: [
      new HTMLWebpackPlugin(
        Object.assign(
          {
            template: path.resolve(
              rootDir, 'main/templates/index.html'
            )
          },
          pluginOptions
        )
      )
    ]
  }

}

module.exports = config
