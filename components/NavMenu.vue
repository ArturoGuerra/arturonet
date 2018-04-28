<template>
    <nav class="navbar has-shadow">
        <div class="navbar-brand">
            <nuxt-link to="/" class="navbar-item">
                <img src="./../assets/img/myface.jpg" class='round-img'>
                <strong style='color: white;'>&nbsp; Arturo Guerra</strong>
            </nuxt-link>
            <div class="navbar-burger burger" id="navtoggle" v-on:click='toggleNav'>
              <span></span>
              <span></span>
              <span></span>
            </div>
        </div>
        <div class="navbar-menu" id='navmenu'>
            <div class="navbar-start">
                <nuxt-link v-for="item in navitems" :id='item.id' :key="item.id" :to="item.href" class="navbar-item is-tab" exact>
                    <span>{{ item.name }}</span>
                </nuxt-link>
             </div>
             <div class='navbar-end' v-if='isAuthenticated'>
                <span class='navbar-item is-tab is-hidden-touch'>{{ loggedUser.nickname ? loggedUser.nickname : loggedUser.name }}</span>
                <nuxt-link class='navbar-item is-tab' to='/auth/logout'>Logout</nuxt-link>
                <nuxt-link class='navbar-item is-tab' v-if='!isAuthenticated' to='/auth/login'>Login</nuxt-link>
             </div>
             <div class='navbar-end' v-else>
                <nuxt-link class='navbar-item is-tab' to='/auth/login'>Login</nuxt-link>
             </div>
        </div>
    </nav>
</template>
<script>
import { mapGetters } from 'vuex'
export default {
  name: 'NavMenu',
  data () {
    return {
      navitems: [
        {id: 'home', href: '/', name: 'Home'},
        {id: 'projects', href: '/projects', name: 'Projects'},
        {id: 'images', href: '/images', name: 'Images'},
        {id: 'contact', href: '/contact', name: 'Contact'}
      ]
    }
  },
  methods: {
    toggleNav () {
      document.getElementById('navtoggle').classList.toggle('is-active')
      document.getElementById('navmenu').classList.toggle('is-active')
    }
  },
  computed: mapGetters(['isAuthenticated', 'loggedUser'])
}
</script>
