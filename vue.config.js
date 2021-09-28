module.exports = {
  publicPath: process.env.NODE_ENV === 'production' ? '/bulma/' : '/',
  css: {
    loaderOptions: {
      scss: {
        additionalData: '@import "@/assets/scss/variables";'
      }
    }
  }
}
