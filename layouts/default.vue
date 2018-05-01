<template>
  <div>
    <NavMenu/>
    <nuxt/>
    <Footer/>
  </div>
</template>

<script>
import NavMenu from '~/components/NavMenu.vue'
import Footer from '~/components/Footer.vue'

export default {
  components: {
    NavMenu,
    Footer
  }
}
</script>

