///* ====================================================
//   #CONFIG - DEV-SERVER
//   ==================================================== */

// Dependencies:
//
// webpack-dev-server

const config = () => {

  return {
    devServer: {
      stats: 'errors-only',
      host: process.env.HOST,
      port: process.env.PORT,
      overlay: true
    }
  }

}

module.exports = config
