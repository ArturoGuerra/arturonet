<template>
  <div class='check-container'>
    <particles/>
    <svg class="checkmark" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 52 52"><circle class="checkmark__circle" cx="26" cy="26" r="25" fill="none"/><path class="checkmark__check" fill="none" d="M14.1 27.2l7.1 7.2 16.7-16.8"/></svg>
  </div>
</template>

<script>
export default {
  mounted () {
    const { setSession } = require('~/utils/auth')
    setSession()
    setTimeout(() => { this.$nuxt.$router.replace('/') }, 2000)
  }
}
</script>
