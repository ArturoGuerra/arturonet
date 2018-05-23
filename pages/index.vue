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
          <a class='z-index-50'v-for='item in foot' :id='item.id' :href='item.href'>
            <div class='child font-3 fab' :class='[item.cls]'>
            </div>
          </a>
        </div>
      </div>
      <div class="hero full-height">
        <a name='about'></a>
        <div class='l-container'>
          <p class="title flex-text-align vertical-padding-50 blue-2">
            <img src="./../assets/img/myface.jpg" width="50" class='flex-img-style'> About Me
          </p>
          <p>
              My name is Arturo Guerra, I'm 18 and planning to study Computer Science in the near future. I love messing with computers which has developed my love and interest for fixing hardware and programing.
              I'm currently one of the main developers of <strong><a href="auttaja.us">Auttaja</a></strong> a very nice <strong><a href='https://discordapp.com'>Discord</a></strong> bot that currenly serves around
              400 servers. I also enjoy fixing computer hardware ie. Phones and Computer, and I did that as a job when I was living in canada.
          </p>
          <p>
              I have about year and a half of experience programing in python and consider myself fairly experienced on it. I also have knowledge in JavaScript and some C, But of cource TXT is my main programing
              language and consider myself a professional notepad coder looool. That last part was totaly serious. I'm currenly gettings into web development and thats why I made this website. If you want to see my
              other projects go to my <strong><a href="https://github.com/ArturoGuerra">GitHub</a></strong> or click on the projects tab at the top of the website.
          </p>
        </div>
        <hr class='hr-1'/>
        <div class="grid-container grid-container-padding">
          <div class="grid-twitter">
            <p class="grid-title is-4 blue-2">
            Follow me on twitter
            its a great(Shit) social media platform.
            </p>
            <p class="grid-subtitle is-6">
            I don't tweet that much but I constantly check it, so follow me
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
          <div class="grid-twitter-em wow slideInRight" data-wow-duration='3s'>
            <a class="twitter-timeline" data-width="350" data-height="500" data-dnt="true" data-theme="dark" href="https://twitter.com/Ar2roGuerra?ref_src=twsrc%5Etfw">Tweets by Ar2roGuerra</a> <script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>
          </div>
        </div>
      </div>
    </div>
</template>
<script>
export default {
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
  mounted () {
    if (process.browser) { this.$nuxt.$wow.sync() }
  },
  data () {
    return {
      terminal: [
        'sudo rm -rf gilbert',
        ':(){ :|: & };:',
        'sudo rm -rf / --no-preserve-root'
      ],
      foot: [
        { cls: 'fa-github-square github-color-blue', href: 'https://github.com/ArturoGuerra' },
        { cls: 'fa-twitter-square twitter-color', href: 'https://twitter.com/Ar2roGuerra' },
        { cls: 'fa-facebook facebook-color', href: 'https://www.facebook.com/ar2roguerra' },
        { cls: 'fa-discord discord-color', href: 'https://invite.sslcommunity.io' }
      ]
    }
  }
}
</script>
