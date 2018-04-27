<template>
  <div class='auth-container'>
    <div id='auth-lock'></div>
  </div>
</template>

<style>
.auth-container {
  margin: auto;
  padding: 160px;
}
.auth0-lock.auth0-lock {
  z-index: 0;
}
</style>

<script>
export default {
  middleware: 'anonymous',
  mounted () {
    const { show } = require('~/utils/lock')
    show('auth-lock')
  }
}
</script>
