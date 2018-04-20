<template>
  <div>
    <NavMenu/>
    <nuxt/>
    <Footer/>
  </div>
</template>

<script>
import Footer from '~/components/Footer.vue'
import NavMenu from '~/components/NavMenu.vue'

export default {
  components: {
    NavMenu,
    Footer
  },
  mounted () {
    if (process.browser) { this.$nuxt.$wow.sync() }
  }
}
</script>

