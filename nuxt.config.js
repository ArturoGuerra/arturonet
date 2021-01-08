export default {
  // Global page headers (https://go.nuxtjs.dev/config-head)
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
      { property: 'og:image', hid: 'og:image', content: 'https://arturonet.com/favicon.ico' },
      { hid: 'twitter:url', name: 'twitter:url', content: 'https://arturonet.com' },
      { hid: 'twitter:title', name: 'twitter:title', content: 'ArturoNet' },
      { hid: 'twitter:description', name: 'twitter:description', content: "Arturo's website" },
      { hid: 'twitter:type', name: 'twitter:type', content: 'website' },
      { hid: 'twitter:image', name: 'twitter:image', content: 'https://arturonet.com/favicon.ico' },
      { hid: 'twitter:url', name: 'twitter:url', content: 'https://arturonet.com' },
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
      { rel: 'shortcut icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: 'stylesheet', href: 'https://use.fontawesome.com/releases/v5.0.13/css/all.css', crossorigin: 'anonyous' }
    ]
  },

  // Global CSS (https://go.nuxtjs.dev/config-css)
  css: [
    "@/assets/css/animate.css",
    "@/assets/css/animations.css",
    "@/assets/css/gradients.css",
    "@/assets/css/images.css",
    "@/assets/css/main.css",
    "@/assets/css/plexstatus.css",
    "@/assets/scss/arturonet.scss"
  ],

  // Plugins to run before rendering page (https://go.nuxtjs.dev/config-plugins)
  plugins: [
    { src: '~/plugins/particles.js', mode: 'client' },
    { src: '~/plugins/vue-typer.js', mode: 'client'},
    { src: '~/plugins/wow.js', mode: 'client' }
  ],

  // Auto import components (https://go.nuxtjs.dev/config-components)
  components: true,

  // Modules for dev and build (recommended) (https://go.nuxtjs.dev/config-modules)
  buildModules: [
    // https://go.nuxtjs.dev/typescript
    '@nuxt/typescript-build'
  ],

  // Modules (https://go.nuxtjs.dev/config-modules)
  modules: [
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
    // https://go.nuxtjs.dev/pwa
    '@nuxtjs/pwa',
    // https://go.nuxtjs.dev/content
    '@nuxt/content'
  ],

  // Axios module configuration (https://go.nuxtjs.dev/config-axios)
  axios: {},

  // Content module configuration (https://go.nuxtjs.dev/config-content)
  content: {},

  // Build Configuration (https://go.nuxtjs.dev/config-build)
  build: {
  }
}
