<template>
    <div>
      <div class='hero full-height'>
        <particles></particles>
        <div class='body l-container'>
          <div class='child center'>
            <div class='h-left'>
              <img src='../assets/img/myface.jpg' class='hero-img'>
              <span class='hero-title font-2'>Arturo Guerra</span>
            </div>
            <span class='bar'></span>
            <div class='h-right'>
              <div class='terminal'>
                <div class='head'>
                  <div class='t-buttons'>
                    <div class='t-button red'></div>
                    <div class='t-button yellow'></div>
                    <div class='t-button green'></div>
                  </div>
                  <div class='terminal-title'>
                    <i class='fas fa-folder'></i>
                    /home/arturo
                  </div>
                </div>
                <div class='body'>
                  <div class='child text'>
                    <vue-typer :pre-type-delay='1500' :repeat='0' :text='terminal'></vue-typer>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class='child small'>
            <a href='#about'><div class='arrow'></div></a>
          </div>
        </div>
        <div class='height-3 foot l-container'>
          <a class='z-index-50' v-for='item in foot' :key='item.href' :href='item.href'>
            <div class='child font-3 fab' :class='[item.cls]'>
            </div>
          </a>
        </div>
      </div>
      <div class="hero full-height">
        <hr class='hr-1'/>
        <div class="grid-container grid-container-padding">
          <div class="grid-twitter">
            <p class="grid-title is-4 blue-2">
            Follow me on twitter or add me on discord
            </p>
            <p class="grid-subtitle is-6">
            I don't tweet much but i'm always lurking
            </p>
          </div>
          <div class="grid-github">
            <p class="grid-title is-4 blue-2">
            Look at my github projects you might find something you like.
            </p>
            <p class="grid-subtitle is-6">
            Most of my projects are open-sourced so feel free to use them
            </p>
          </div>
          <div class="grid-twitter-em">
            <a class="twitter-timeline" data-width="350" data-height="500" data-dnt="true" data-theme="dark" href="https://twitter.com/Ar2ro_">Tweets</a> <script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>
          </div>
        </div>
      </div>
    </div>
</template>
<script lang='ts'>
import Vue from 'vue'

interface footerItem {
  cls: string
  href: string
}

export default Vue.extend({
  name: 'Home',
  head: {
    title: 'Home',
    meta: [
      { property: 'og:title', hid: 'og:title', content: 'Home - ArturoNet' },
      { property: 'og:description', hid: 'og:description', content: "Arturo's website" },
      { hid: 'twitter:title', name: 'twitter:title', content: 'Home - ArturoNet' },
      { hid: 'twitter:description', name: 'twitter:description', content: "Arturo's website" }
    ]
  },
  data () {
    const terminal: string[] = [
      ':(){ :|: & };:',
      'sudo rm -rf / --no-preserve-root'
    ]

    const foot: footerItem[] = [
      { cls: 'fa-github-square github-color-blue', href: 'https://github.com/ArturoGuerra' },
      { cls: 'fa-twitter-square twitter-color', href: 'https://twitter.com/Ar2ro_' },
      { cls: 'fa-discord discord-color', href: 'https://destinyarena.app' }
    ]

    return {
      terminal,
      foot
    }
  }
})
</script>
