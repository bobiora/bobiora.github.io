module.exports = {
  publicPath: process.env.NODE_ENV === "production" ? "/dist/" : "/",
  css: {
    loaderOptions: {
      sass: {
        //additionalData: `@import "~@/assets/styles.sass"`
      }
    }
  }
};
