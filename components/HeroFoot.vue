<template id="HeroStart">
    <div id="app" class="hero-foot">
        <div class="tabs is-boxed is-centered is-hidden-touch">
            <div class="container">
                <ul>
                    <li v-for="item in heroitem" :key="item.id">
                        <a :href="item.href">
                            <span>{{ item.content }}</span>
                        </a>
                    </li>
                </ul>
            </div>
        </div>
    </div>
</template>

<script>
export default {
  name: 'HeroStart',
  data () {
    return {
      heroitem: []
    }
  },
  mounted () {
    this.heroitem.push(
      {href: 'https://discord.gg/ssl', content: 'SSL'},
      {href: 'https://github.com/ArturoGuerra', content: 'GitHub'},
      {href: 'https://www.dixionary.com', content: 'Dixionary'},
      {href: 'https://inwite.dixionary.com', content: 'Dixionary Serwer'}
    )
  }
}
</script>
