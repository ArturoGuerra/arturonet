<template>
  <div id="app">
      <NavMenu></NavMenu>
      <router-view></router-view>
      <Footer></Footer>
  </div>
</template>

<script>
export default {
  name: 'App',
  metaInfo: {
    domain: 'https://www.arturonet.com',
    titleTemplate: '%s - ArturoNet',
    link: [
      { rel: 'icon', href: require('@/assets/img/webicon.png') },
      { rel: 'image_src', href: require('@/assets/img/webicon.png') },
      { rel: 'shortcut icon', href: require('@/assets/img/webicon.png') },
      { rel: 'apple-touch-icon', href: require('@/assets/img/webicon.png') },
      { rel: 'stylesheet', href: require('@/assets/css/bulma.css') },
      { rel: 'stylesheet', href: require('@/assets/css/hero.css') },
      { rel: 'stylesheet', href: require('@/assets/css/gradients.css') },
      { rel: 'stylesheet', href: require('@/assets/css/bodystyling.css') },
      { rel: 'stylesheet', href: 'https://maxcdn.bootstrapcdn.com/font-awesome/4.6.3/css/font-awesome.min.css' }
    ],
    meta: [
      { property: 'og:title', name: 'twitter:title', content: 'arturonet.com' },
      { property: 'og:description', name: 'twitter:description', content: "Arturo's website" },
      { property: 'og:type', name: 'twitter:type', content: 'website' },
      { property: 'og:image', name: 'twitter:image', content: 'https://www.arturonet.com' + require('@/assets/img/webicon.png') },
      { property: 'og:url', name: 'twitter:url', content: 'https://www.arturonet.com' },
      { name: 'twitter:card', content: 'summary' },
      { name: 'twitter:creator', content: '@Ar2roGuerra' }
    ],
    noscript: [
      { innerHTML: 'This website requires JavaScript Madarchod' }
    ]
  }
}
</script>
