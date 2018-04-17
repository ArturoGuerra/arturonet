<template>
    <div>
       <div class="white dark-blue">
          <no-ssr>
            <vue-particles
              color="#dedede"
              :particlesNumber='250'
              :moveSpeed='5'
              >
            </vue-particles>
          </no-ssr>
          <div class="hero hero-center wow lightSpeedIn">
              <h1 class="hero-title">Projects</h1>
              <h2 class="hero-subtitle">Bots bots and more bots</h2>
              <h3>#HEILTILER</h3>
          </div>
      </div>
      <div class='container small-container'>
        <h1>My GitHub Projects</h1>
      </div>
      <div class='container'>
        <table class="table table-striped">
            <thead>
                <tr>
                    <th scope='col'>Name</th>
                    <th scope='col'>Language</th>
                    <th scope='col' class="touch-item-hidden">Forks</th>
                    <th scope='col' class="touch-item-hidden">Forked</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="p in projects" :key="p.url">
                    <td>
                        <a :href="p.url">
                            {{ p.name }}
                        </a>
                    </td>
                    <td>{{ p.language }}</td>
                    <td class='touch-item-hidden'>{{ p.forks }}</td>
                    <td class='touch-item-hidden'>{{ p.forked }}</td>
                </tr>
            </tbody>
        </table>
      </div>
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
