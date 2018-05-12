<template>
    <div>
      <div class='hero full-height'>
        <div class='flex flex-column flex-a-center flex-j-center'>
          <div class='hero-header-m'>
            <h1 class="hero-title center blue">Projects</h1>
            <h3 class='subtitle center'>&lt;<vue-typer :pre-type-delay='1500' :repeat='0' text='drunk code is best code'/>/&gt;</h3>
          </div>
          <div class='flex-grow'>
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
            <div class='container has-text-centered sk-padding'>
              <div class='sk-wave'>
                <div class='sk-rect sk-rect1'/>
                <div class='sk-rect sk-rect2'/>
                <div class='sk-rect sk-rect3'/>
                <div class='sk-rect sk-rect4'/>
                <div class='sk-rect sk-rect5'/>
              </div>
            </div>
          </div>
        </div>
      </div>
  </div>
</template>

<script>
export default {
  name: 'projects',
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
      projects: [],
      show: false
    }
  },
  mounted () {
    if (process.browser) { this.$nuxt.$wow.sync() }
    this.$nuxt.$axios.$get('https://api.github.com/users/ArturoGuerra/repos').then(response => {
      var r = response
      for (let y = 0; y < r.length; y++) {
        this.projects.push({
          name: r[y].name,
          url: r[y].html_url,
          language: r[y].language,
          forks: r[y].forks_count,
          forked: r[y].fork
        })
        setTimeout(() => {
          this.show = true
        }, 2000)
      }
    }).catch(console.error)
  }
}
</script>
