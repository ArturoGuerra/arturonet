<template>
  <div>
    <div class='custom-hero dark-blue white custom-hero-small'>
      <particles></particles>
      <div class='custom-hero-body wow lightSpeedIn'>
        <h1 class='hero-title'><vue-typer :pre-type-delay='1500' :repeat='0' text='Plex Service Monitor'/></h1>
      </div>
    </div>
    <div class='container'>
      <div v-if='ready' class='status-container'>
        <table class='table is-fullwidth table-mod-2'>
          <tbody>
            <tr v-for='item in running' :key='item.service' class='status-item'>
              <span class='status-start'>{{ item.name }}</span><span class='status-end has-text-success'>Operational</span>
            </tr>
            <tr v-for='item in errors' :key='item.service' class='status-item'>
              <span class='status-start'>{{ item.name }}</span><span class='status-end has-text-danger'>Offline</span>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'plexmonitor',
  middleware: 'isadmin',
  head: {
    title: 'Plex Monitor',
    meta: [
      { property: 'og:title', hid: 'og:title', content: 'Plex Monitor - ArturoNet' },
      { property: 'og:description', hid: 'og:description', content: "Arturo's website" },
      { hid: 'twitter:title', name: 'twitter:title', content: 'Plex Monitor - ArturoNet' },
      { hid: 'twitter:description', name: 'twitter:description', content: "Arturo's website" }
    ]
  },
  data () {
    return {
      ready: false,
      running: [],
      errors: []
    }
  },
  mounted () {
    if (process.browser) { this.$nuxt.$wow.sync() }
    this.$nuxt.$axios.$get('https://plexmonitor.arturonet.com').then(response => {
      this.running = response.running
      this.errors = response.error
      this.ready = true
    }).catch(console.error)
  }
}
</script>
