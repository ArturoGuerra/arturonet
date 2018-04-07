module.exports = {
  /*
  ** Headers of the page
  */
  head: {
    titleTemplate: '%s - ArturoNet',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { name: 'theme-color', content: '#0C66A1' },
      { name: 'google-site-verification', content: '2QfKSG5ZPM__yZMnpIm5IJY1x52uhrgyVfbKCbOh0Xk' },
      { hid: 'description', name: 'description', content: "Arturo's personal website" },
      { property: 'og:title', hid: 'og:title', content: 'arturonet.com' },
      { property: 'og:description', hid: 'og:description', content: "Arturo's website" },
      { property: 'og:type', hid: 'og:type', content: 'website' },
      { property: 'og:image', hid: 'og:image', content: 'https://www.arturonet.com/favicon.ico' },
      { hid: 'twitter:url', name: 'twitter:url', content: 'https://www.arturonet.com' },
      { hid: 'twitter:title', name: 'twitter:title', content: 'arturonet.com' },
      { hid: 'twitter:description', name: 'twitter:description', content: "Arturo's website" },
      { hid: 'twitter:type', name: 'twitter:type', content: 'website' },
      { hid: 'twitter:image', name: 'twitter:image', content: 'https://www.arturonet.com/favicon.ico' },
      { hid: 'twitter:url', name: 'twitter:url', content: 'https://www.arturonet.com' },
      { hid: 'twitter:card', name: 'twitter:card', content: 'summary' },
      { hid: 'twitter:creator', name: 'twitter:creator', content: '@Ar2roGuerra' },
      { hid: 'apple-mobile-web-app-title', name: 'apple-mobile-web-app-title', content: 'arturonet.com' }

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
  ],
  modules: [
    ['@nuxtjs/pwa'],
  ],
}
