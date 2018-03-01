<template>
    <nav class="navbar has-shadow">
        <div class="navbar-brand">
            <router-link to="/" class="navbar-item" @click.native='fixMobile'>
                <img src="/static/img/webicon.png" style="border-radius: 60%; display: block; height: auto; width: auto;">
                <strong>&nbsp; Arturo Guerra</strong>
            </router-link>
            <div class="navbar-burger burger" id="navtoggle" v-on:click='toggleNav'>
              <span></span>
              <span></span>
              <span></span>
            </div>
        </div>
        <div class="navbar-menu" id='navmenu'>
            <div class="navbar-end" id='navhandler'>
                <router-link v-for="item in navitems" :id='item.id' :key="item.id" :to="item.href" class="navbar-item is-tab"  @click.native="fixMobile" exact>
                    <span>{{ item.name }}</span>
                </router-link>
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
        {id: 'projects', href: '/projects', name: 'Projects'}
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
    },
    fixMobile () {
      this.$nextTick(() => {
        if (document.getElementById('navmenu').className.split(' ').length === 2) {
          var navitems = document.getElementsByClassName('navbar-item')
          Array.prototype.filter.call(navitems, (f) => {
            f.className = 'navbar-item'
          })
        }
      })
    }
  }
}
</script>
