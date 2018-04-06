module.exports = {
  /*
  ** Headers of the page
  */
  head: {
    titleTemplate: '%s - ArturoNet',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: "Arturo's personal website" }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.jpeg' }
    ]
  },
  /*
  ** Global CSS
  */
  css: [
    '~/assets/css/bulma.css',
    '~/assets/css/animate.css',
    '~/assets/css/bodystyling.css',
    '~/assets/css/hero.css',
    '~/assets/css/gradients.css'
  ],
  /*
  ** Add axios globally
  */
  build: {
    vendor: ['axios'],
    /*
    ** Run ESLINT on save
    */
    extend (config, ctx) {
      if (ctx.isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/
        })
      }
    }
  },
  router: {
    linkActiveClass: 'is-active',
    linkExactActiveClass: 'is-active'
  },
  loading: {
    color: '#0C66A1',
    height: '3px'
  },
  plugins: [
    '~/plugins/global.js'
  ]
}
