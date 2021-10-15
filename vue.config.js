module.exports = {
  /**
   * Allows the application to be hosted in github pages. Need to remove when
   * deploying it to cartera.com.br
   */
  publicPath: process.env.NODE_ENV === 'production' ? '/bulma/' : '/',

  /**
   * Injects our variables.scss file on top of all components so we can use
   * the variables in its <style> tags
   */
  css: {
    loaderOptions: {
      scss: {
        additionalData: '@import "@/assets/scss/variables";'
      }
    }
  },

  /**
   * Pwa configurations
   *
   * See here for more info:
   *     https://github.com/vuejs/vue-cli/tree/HEAD/packages/@vue/cli-plugin-pwa
   */
  pwa: {
    name: 'cartera',
    shortName: 'cartera',
    themeColor: '#35E599', // No effect on apple devices
    scope: 'www.cartera.com.br',
    appleMobileWebAppCapable: 'yes',

    /**
     * Used to create manifest.json file
     */
    manifestOptions: {
      lang: 'pt',
      display: 'standalone',
      background_color: '#35E599', // Used by android splash screens
      description: 'A rede social de investidores para você ver e acompanhar as carteiras de ações dos seus amigos',
      categories: ['financas', 'investimentos', 'finances', 'investments', 'b3', 'ações']
    },

    iconPaths: {
      favicon32: 'img/icons/favicon-32x32.png',
      favicon16: 'img/icons/favicon-16x16.png',
      appleTouchIcon: 'img/icons/apple-touch-icon-152x152.png',
      maskIcon: 'img/icons/android-chrome-maskable-192x192.png',
      msTileImage: 'img/icons/msapplication-icon-144x144.png'
    }
  }
}
