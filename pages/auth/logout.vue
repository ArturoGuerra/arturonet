<template>
  <p>Signing off...</p>
</template>

<script>
export default {
  mounted () {
    const { deleteSession } = require('~/utils/auth')
    const { logout } = require('~/utils/lock')
    deleteSession()
    logout()
  }
}
</script>
