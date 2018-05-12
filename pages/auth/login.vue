<template>
  <div class='auth-container'>
    <particles></particles>
    <div id='lock'></div>
  </div>
</template>

<script>
export default {
  middleware: 'anonymous',
  mounted () {
    const { show } = require('~/utils/lock')
    show('lock')
  }
}
</script>
