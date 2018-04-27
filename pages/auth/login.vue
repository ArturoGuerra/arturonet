<template>
  <div class='auth-container'>
    <particles></particles>
    <div id='auth-lock'></div>
  </div>
</template>

<style>
.auth-container {
  margin: auto;
  position: relative;
  padding: 160px;
  background-color: #010d01;
}
.auth0-lock.auth0-lock {
  z-index: 0;
  position: relative;
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
