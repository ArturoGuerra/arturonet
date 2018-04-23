<template>
    <div>
      <div class="custom-hero white dark-blue">
          <particles></particles>
          <div class='custom-hero-body wow lightSpeedIn'>
            <h1 class="hero-title">Projects</h1>
            <h2 class="hero-subtitle">Bots bots and more bots</h2>
            <h3>#HEILTILER</h3>
          </div>
      </div>
      <div class='container small-container'>
        <h1 class='title'>My GitHub Projects</h1>
      </div>
      <section class="hero has-text-centered" style='padding-bottom: 50px;'>
        <div class="container has-text-centered">
          <table class="table is-fullwidth table-mod">
            <thead>
              <tr>
                <th>Name</th>
                <th>Language</th>
                <th class="is-hidden-touch">Forks</th>
                <th class="is-hidden-touch">Forked</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="p in projects" :key="p.url">
                <th>
                  <a :href="p.url">
                    {{ p.name }}
                  </a>
                </th>
                <th>{{ p.language }}</th>
                <th class='is-hidden-touch'>{{ p.forks }}</th>
                <th class='is-hidden-touch'>{{ p.forked }}</th>
              </tr>
            </tbody>
          </table>
        </div>
       </section>
    </div>
</template>
<script>
import axios from 'axios'
export default {
  name: 'Projects',
  head: {
    title: 'Projects',
    meta: [
      { property: 'og:title', hid: 'og:title', content: 'Projects - ArturoNet' },
      { property: 'og:description', hid: 'og:description', content: "Arturo's website" },
      { hid: 'twitter:title', name: 'twitter:title', content: 'Projects - ArturoNet' },
      { hid: 'twitter:description', name: 'twitter:description', content: "Arturo's website" }
    ]
  },
  data () {
    return {
      projects: []
    }
  },
  mounted () {
    if (process.browser) { this.$nuxt.$wow.sync() }
    axios({method: 'GET', url: 'https://api.github.com/users/ArturoGuerra/repos'}).then(response => {
      var r = response.data
      for (let y = 0; y < r.length; y++) {
        this.projects.push({
          name: r[y].name,
          url: r[y].html_url,
          language: r[y].language,
          forks: r[y].forks_count,
          forked: r[y].fork
        })
      }
    }).catch(console.error)
  }
}
</script>
