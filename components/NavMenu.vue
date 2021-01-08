<template>
  <nav class="navbar fixed">
    <div class='l-container'>
      <div class="nav-brand">
          <nuxt-link to="/" class="nav-item">
            <img src="./../assets/img/myface.jpg" class='img-navbar'>
          </nuxt-link>
          <div class="nav-burger" v-on:click='toggleNav' :class='{ active: active }'>
            <span></span>
            <span></span>
            <span></span>
          </div>
      </div>
      <div class="nav-menu" :class='{ active: active }'>
        <div class="nav-start">
          <nuxt-link v-for="item in navitems" :id='item.id' :key="item.id" :to="item.href" class="nav-item" exact>
            <span>{{ item.name }}</span>
          </nuxt-link>
        </div>
      </div>
    </div>
  </nav>
</template>

<script lang='ts'>
import Vue from 'vue'
import { mapState, mapMutations } from 'vuex'

export default Vue.extend({
  name: 'NavMenu',
  data () {
    return {
      navitems: [
        { id: 'home', href: '/', name: 'Home' },
        { id: 'projects', href: '/projects', name: 'Projects' },
        { id: 'contact', href: '/contact', name: 'Contact' }
      ],
    }
  },
  computed: {
    ...mapState(['active'])
  },
  methods: {
    ...mapMutations({ navstate: 'NAV_STATE' }),
    toggleNav (): void {
      this.navstate(!this.active)
    }
  }
})
</script>
