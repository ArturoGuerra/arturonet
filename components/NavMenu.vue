<template>
    <nav class="navbar has-shadow">
        <div class="navbar-brand">
            <nuxt-link to="/" class="navbar-item">
                <img src="./../assets/img/webicon.png" style="border-radius: 60%; display: block; height: auto; width: auto;">
                <strong style='color: white;'>&nbsp; Arturo Guerra</strong>
            </nuxt-link>
            <div class="navbar-burger burger" id="navtoggle" v-on:click='toggleNav'>
              <span></span>
              <span></span>
              <span></span>
            </div>
        </div>
        <div class="navbar-menu">
            <div class="navbar-end">
                <nuxt-link v-for="item in navitems" :id='item.id' :key="item.id" :to="item.href" class="navbar-item is-tab" exact>
                    <span>{{ item.name }}</span>
                </nuxt-link>
             </div>
        </div>
        <div class="navbar-menu is-hidden-desktop" id='navmenu'>
            <div class="navbar-end">
                <nuxt-link v-for="item in navitems" :id='item.id' :key="item.id" :to="item.href" class="navbar-item" exact>
                    <span>{{ item.name }}</span>
                </nuxt-link>
             </div>
        </div>
    </nav>
</template>
<script>
export default {
  name: 'NavMenu',
  data () {
    return {
      navitems: [
        {id: 'home', href: '/', name: 'Home'},
        {id: 'social', href: '/social', name: 'Social'},
        {id: 'projects', href: '/projects', name: 'Projects'},
        {id: 'contact', href: '/contact', name: 'Contact'}
      ]
    }
  },
  methods: {
    toggleNav () {
      document.getElementById('navtoggle').classList.toggle('is-active')
      document.getElementById('navmenu').classList.toggle('is-active')
      if (document.getElementById('navmenu').className.split(' ').length === 2) {
        var navitems = document.getElementsByClassName('navbar-item')
        Array.prototype.filter.call(navitems, (f) => {
          f.className = 'navbar-item'
        })
      }
    }
  }
}
</script>
