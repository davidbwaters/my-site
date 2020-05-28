///* ====================================================
//   #CONFIG - CODE-SPLIT-VENDORS
//   ==================================================== */

const config = (options) => {

  return {
    optimization: {
      splitChunks: {
        chunks: "initial",
      }
    }
  }

}

module.exports = config
