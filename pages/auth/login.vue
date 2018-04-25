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
import { show } from '~/utils/lock'
export default {
  middleware: 'anonymous',
  mounted () {
    show('auth-lock')
  }
}
</script>
