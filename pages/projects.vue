<template>
    <div>
      <div class='hero full-height'>
        <div class='flex flex-column flex-a-center flex-j-center'>
          <div class='hero-header-m'>
            <h1 class="hero-title center blue">Projects</h1>
            <h3 class='subtitle center'>&lt;<vue-typer :pre-type-delay='1500' :repeat='0' text='these are all my public github projects'/>/&gt;</h3>
          </div>
          <div class='flex-grow full-width'>
            <div v-if='show'>
              <table class="table is-fullwidth table-mod-2">
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
            <div v-else class='container has-text-centered sk-padding'>
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

<script lang='ts'>
import Vue from 'vue'

interface Repo {
  name: string,
  url: string,
  language: string,
  forks: number,
  forked: boolean
}

export default Vue.extend({
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
    let projects: Repo[] = []
    let show: boolean = false
    return {
      projects,
      show
    }
  },
  methods: {
    async loadgitrepos(): Promise<any> {
      try {
        let result: any = await this.$nuxt.$axios.$get('https://api.github.com/users/ArturoGuerra/repos')
        for (let i = 0; i < result.length; i++) {
          let project: Repo = {
            name: result[i].name,
            url: result[i].html_url,
            language: result[i].language,
            forks: result[i].forks_count,
            forked: result[i].fork
          }

          this.projects.push(project)
          setTimeout(() => {
            this.show = true
          }, 2000)
        }
      } catch (error: any) {
        console.error(error)
      }
    }
  },
  async mounted () {
    await this.loadgitrepos()
  }
})
</script>
