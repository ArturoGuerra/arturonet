<template>
    <div>
      <div class='hero full-height'>
        <div class='flex flex-column flex-a-center flex-j-center'>
          <div class='hero-header-m'>
            <h1 class="hero-title center blue">Projects</h1>
            <h3 class='subtitle center'>&lt;<vue-typer :pre-type-delay='1500' :repeat='0' text='these are all my public github projects'/>/&gt;</h3>
          </div>
       
          <div v-if='show' class='github-cards'>
            <div class='github-card' v-for='repo in projects' :key='repo.url'>
              <div class='gh-head'>
                <span class='gh-name'>
                  <a :href="repo.url">
                  <span class="gh-org-repo" v-if="repo.organization">{{ repo.owner }}/</span><span>{{ repo.name }}</span>
                  </a>
                </span>
              </div>
              <div class='gh-body'>
                <p class='gh-description'>
                  {{ repo.description }}
                </p>
              </div>
              <div class='gh-footer'>
                <span class='gh-stars'>
                  {{ repo.stars }}
                  <span class='fa fa-star checked'></span>
                </span>

                <span class='gh-language'>
                  {{ repo.language }}
                  <span class='gh-circle github-default-color' :class="[repo.language]"></span>
                </span>
              </div>
            </div>
          </div>
          <!-- Loadblocks thing lol --->
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
</template>

<script lang='ts'>
import Vue from 'vue'

interface Repo {
  name: string,
  description: string,
  url: string,
  language: string,
  stars: number,
  forks: number,
  forked: boolean,
  organization: boolean,
  owner: string,
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
        let result: any = await this.$nuxt.$axios.$get('/projects')
        for (let i = 0; i < result.length; i++) {
          let project: Repo = {
            name: result[i].name,
            organization: (result[i].owner.type == "Organization" ? true : false),
            owner: result[i].owner.login,
            url: result[i].html_url,
            language: result[i].language,
            forks: result[i].forks_count,
            forked: result[i].fork,
            stars: result[i].stargazers_count,
            description: result[i].description
          }

          this.projects.push(project)
          setTimeout(() => {
            this.show = true
          }, 500)
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
