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
        <div class='nav-end' v-if='isAuthenticated'>
          <div class='nav-item hover'>
            <span class='nav-link'>{{ user.nickname ? user.nickname : user.name }}</span>
            <div class='nav-dropdown'>
              <nuxt-link v-if='admin' v-for='item in adminnav' :id='item.id' :key='item.id' :to='item.href' class='nav-item' exact>
                <span>{{ item.name }}</span>
              </nuxt-link>
              <nuxt-link v-for='item in usernav' :id='item.id' :key='item.id' :to='item.href' class='nav-item' exact>
                <span>{{ item.name }}</span>
              </nuxt-link>
            </div>
          </div>
        </div>
        <div class='nav-end' v-if='!isAuthenticated'>
          <nuxt-link class='nav-item' to='/auth/login'>Login</nuxt-link>
        </div>
      </div>
    </div>
  </nav>
</template>

<script>
import { mapGetters, mapState } from 'vuex'

export default {
  name: 'NavMenu',
  data () {
    return {
      navitems: [
        { id: 'home', href: '/', name: 'Home' },
        { id: 'projects', href: '/projects', name: 'Projects' },
        { id: 'contact', href: '/contact', name: 'Contact' }
      ],
      adminnav: [
        { id: 'plexstatus', href: '/plexstatus', name: 'PlexMonitor' },
        { id: 'wakeonlan', href: '/wakeonlan', name: 'WakeOnlan' }
      ],
      usernav: [
        { id: 'images', href: '/images', name: 'Images' },
        { id: 'logout', href: '/auth/logout', name: 'Logout' }
      ],
      active: false
    }
  },
  methods: {
    toggleNav () {
      this.active = !this.active
    }
  },
  computed: {
    ...mapGetters(['isAuthenticated']),
    ...mapState(['admin', 'user'])
  }

}
</script>
