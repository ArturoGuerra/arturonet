<template>
  <div class='check-container'>
    <particles></particles>
    <svg class="checkmark" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 52 52"><circle class="checkmark__circle" cx="26" cy="26" r="25" fill="none"/><path class="checkmark__check" fill="none" d="M14.1 27.2l7.1 7.2 16.7-16.8"/></svg>
    <span v-if='loggedUser' class='logout-center title'> Goodbye, <vue-typer :repeat='0' :text='loggedUser.nickname ? loggedUser.nickname : loggedUser.name'/></span>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  mounted () {
    const { deleteSession } = require('~/utils/auth')
    const { logout } = require('~/utils/lock')
    setTimeout(() => {
      deleteSession()
      logout()
    }, 2000)
  },
  computed: mapGetters(['loggedUser'])
}
</script>
