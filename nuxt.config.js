require('dotenv').config()

module.exports = {
  /*
  ** Headers of the page
  */
  /* env
    AUTH0_CLIENT_ID
    AUTH0_CLIENT_DOMAIN
    AUTH0_AUDIENCE
    AUTH0_NAMESPACE
    GOOGLE_ANALYTICS_ID
  */
  head: {
    titleTemplate: '%s - ArturoNet',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { name: 'theme-color', content: '#0C66A1' },
      { name: 'google-site-verification', content: '2QfKSG5ZPM__yZMnpIm5IJY1x52uhrgyVfbKCbOh0Xk' },
      { hid: 'description', name: 'description', content: "Arturo's personal website" },
      { property: 'og:title', hid: 'og:title', content: 'ArturoNet' },
      { property: 'og:description', hid: 'og:description', content: "Arturo's website" },
      { property: 'og:type', hid: 'og:type', content: 'website' },
      { property: 'og:image', hid: 'og:image', content: 'https://www.arturonet.com/favicon.ico' },
      { hid: 'twitter:url', name: 'twitter:url', content: 'https://www.arturonet.com' },
      { hid: 'twitter:title', name: 'twitter:title', content: 'ArturoNet' },
      { hid: 'twitter:description', name: 'twitter:description', content: "Arturo's website" },
      { hid: 'twitter:type', name: 'twitter:type', content: 'website' },
      { hid: 'twitter:image', name: 'twitter:image', content: 'https://www.arturonet.com/favicon.ico' },
      { hid: 'twitter:url', name: 'twitter:url', content: 'https://www.arturonet.com' },
      { hid: 'twitter:card', name: 'twitter:card', content: 'summary' },
      { hid: 'twitter:creator', name: 'twitter:creator', content: '@Ar2roGuerra' },
      { hid: 'apple-mobile-web-app-title', name: 'apple-mobile-web-app-title', content: 'ArturoNet' }

    ],
    link: [
      { rel: 'apple-touch-icon', sizes: '57x57', href: '/apple-icon-57x57.png' },
      { rel: 'apple-touch-icon', sizes: '60x60', href: '/apple-icon-60x60.png' },
      { rel: 'apple-touch-icon', sizes: '72x72', href: '/apple-icon-72x72.png' },
      { rel: 'apple-touch-icon', sizes: '76x76', href: '/apple-icon-76x76.png' },
      { rel: 'apple-touch-icon', sizes: '114x114', href: '/apple-icon-114x114.png' },
      { rel: 'apple-touch-icon', sizes: '120x120', href: '/apple-icon-120x120.png' },
      { rel: 'apple-touch-icon', sizes: '144x144', href: '/apple-icon-144x144.png' },
      { rel: 'apple-touch-icon', sizes: '152x152', href: '/apple-icon-152x152.png' },
      { rel: 'apple-touch-icon', sizes: '180x180', href: '/apple-icon-180x180.png' },
      { rel: 'icon', type: 'image/png', sizes: '192x192',  href: '/android-icon-192x192.png' },
      { rel: 'icon', type: 'image/png', sizes: '32x32', href: '/favicon-32x32.png' },
      { rel: 'icon', type: 'image/png', sizes: '96x96', href: '/favicon-96x96.png' },
      { rel: 'icon', type: 'image/png', sizes: '16x16', href: '/favicon-16x16.png' },
      { rel: 'shortcut icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },
  manifest: {
    name: "arturonet",
    short_name: "arturonet",
    discription: "Arturo's Personal Website",
    icons: [{
      src: '/android-icon-192x192.png',
      sizes: '192x192',
      type: 'image/png'
    },
    {
      src: '/favicon-32x32.png',
      sizes: '32x32',
      type: 'image/png'
    },
    {
      src: '/favicon-96x96.png',
      sizes: '96x96',
      type: 'image/png'
    },
    {
      src: '/favicon-16x16.png',
      sizes: '16x16',
      type: 'image/png'
    }]
  },
  /*
  ** Global CSS
  */
  css: [
    '~/assets/scss/arturonet.scss',
    'colors.css/css/colors.min.css',
    '~/assets/css/main.css',
    '~/assets/css/gradients.css',
    '~/assets/css/images.css',
    '~/assets/css/plexstatus.css',
    '~/assets/css/animations.css',
    '~/assets/css/animate.css'
  ],
  /*
  ** Add axios globally
  */
  build: {
    extractCSS: true,
    vendor: ['axios', 'wowjs', 'auth0-lock', 'vue-typer', 'jwt-decode', 'js-cookie'],
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
    linkActiveClass: 'active',
    linkExactActiveClass: 'active',
    middleware: 'check-auth'
  },
  loading: {
    color: '#0C66A1',
    height: '3px'
  },
  plugins: [
    { src: '~/plugins/particles.js', ssr: false },
    { src: '~/plugins/vue-typer.js', ssr: false },
    { src: '~/plugins/wow.js', ssr: false }
  ],
  modules: [
    '@nuxtjs/pwa',
    '@nuxtjs/axios',
    '@nuxtjs/dotenv',
    ['@nuxtjs/google-analytics', {
      id: process.env.GOOGLE_ANALYTICS_ID
    }]
  ],
  axios: {
    baseURL: 'https://www.arturonet.com',
    browserBaseURL: '/api'
  },
  render: {
    http2: true
  }
}
