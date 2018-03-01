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
    titleTemplate: '%s - ArturoNet',
    noscript: [
      { innerHTML: 'This website requires JavaScript Madarchod' }
    ]
  }
}
</script>
