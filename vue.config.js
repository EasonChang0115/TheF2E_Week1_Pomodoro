module.exports = {
  publicPath: process.env.NODE_ENV === 'production'
    ? '/dist/'
    : '/',
  css: {
    loaderOptions: {
      sass: { 
        data: `@import "@/scss/all.scss";`
      }
    }
  }
};
