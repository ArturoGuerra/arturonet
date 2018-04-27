<template>
  <div class='check-container'>
    <svg class="checkmark" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 52 52"><circle class="checkmark__circle" cx="26" cy="26" r="25" fill="none"/><path class="checkmark__check" fill="none" d="M14.1 27.2l7.1 7.2 16.7-16.8"/></svg>
    <div>
      <span class='logout-center title'> Goodbye, {{ loggedUser.nickname ? loggedUser.nickname : loggedUser.name }}</span>
    </div>
  </div>
</template>

<style>
.check-container {
  width: 100%;
  height: 100vh;
  padding: 160px;
  padding-bottom: 300px;
}

@import "bourbon";

.checkmark__circle {
  stroke-dasharray: 166;
  stroke-dashoffset: 166;
  stroke-width: 2;
  stroke-miterlimit: 10;
  stroke: #7ac142;
  fill: none;
  animation: stroke .6s cubic-bezier(0.650, 0.000, 0.450, 1.000) forwards;
}

.logout-center {
  text-align: center;
  display: flex;
  justify-content: center;
}

.checkmark {
  width: 56px;
  height: 56px;
  border-radius: 50%;
  display: block;
  stroke-width: 2;
  stroke: #fff;
  stroke-miterlimit: 10;
  margin: 10% auto;
  box-shadow: inset 0px 0px 0px #7ac142;
  animation: fill .4s ease-in-out .4s forwards, scale .3s ease-in-out .9s both;
}

.checkmark__check {
  transform-origin: 50% 50%;
  stroke-dasharray: 48;
  stroke-dashoffset: 48;
  animation: stroke .3s cubic-bezier(0.650, 0.000, 0.450, 1.000) .8s forwards;
}

@keyframes stroke {
  100% {
    stroke-dashoffset: 0;
  }
}

@keyframes scale {
  0%, 100% {
    transform: none;
  }
  50% {
    transform: scale3d(1.1, 1.1, 1);
  }
}

@keyframes fill {
  100% {
    box-shadow: inset 0px 0px 0px 30px #7ac142;
  }
}
</style>

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
