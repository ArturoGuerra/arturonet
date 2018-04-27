<template>
    <p>Signing in...</p>
</template>

<script>
export default {
  mounted () {
    const { setSession } = require('~/utils/auth')
    setSession()
    this.$nuxt.$router.replace('/')
  }
}
</script>
