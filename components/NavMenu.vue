<template>
    <nav class="navbar sticky-top navbar-expand-lg navbar-dark bg-git-black">
      <nuxt-link class='navbar-brand' to='/'>Arturo Guerra</nuxt-link>
      <!-- NavBar mobile toggle -->
      <button id='navbar-toggler' class="navbar-toggler collapsed" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation" @click='toggleNav'>
        <span class="navbar-toggler-icon"></span>
      </button>
      <!-- NavBar items -->
      <div class='collapse navbar-collapse' id='navbarSupportedContent'>
        <ul class='navbar-nav mr-auto'>
          <nuxt-link v-for='item in navitems' :id='item.id' :key='item.id' :to='item.href' tag='li' class='nav-item' exact>
            <a class='nav-link'>{{ item.name }}</a>
          </nuxt-link>
        </ul>
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
        {id: 'projects', href: '/projects', name: 'Projects'},
        {id: 'contact', href: '/contact', name: 'Contact'}
      ]
    }
  },
  methods: {
    toggleNav () {
      document.getElementById('navbar-toggler').classList.toggle('collapsed')
      document.getElementById('navbarSupportedContent').classList.toggle('collapse')
    }
  }
}
</script>
