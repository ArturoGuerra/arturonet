<template>
  <div class='main'>
    <NavMenu/>
    <nuxt/>
    <Footer/>
  </div>
</template>

<script>
import NavMenu from '~/components/NavMenu'
import Footer from '~/components/Footer'

export default {
  components: {
    NavMenu,
    Footer
  }
}
</script>

