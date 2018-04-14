<template>
  <div>
    <section class="hero is-dark is-medium dark-blue">
       <div class="hero-body">
          <div class="container has-text-centered wow lightSpeedIn">
            <h1 class="title">Social Media</h1>
            <h2 class="subtitle">DISCORD</h2>
            <h3>#MAKEAMERICAGREATAGAIN</h3>
          </div>
      </div>
      <HeroFoot></HeroFoot>
    </section>
    <section class="container is-fluid" style='padding-top: 30px; padding-bottom: 30px;'>
      <div class="container has-text-centered">
        <h1 class="title">My social media</h1>
        <h2 class="subtitle">Go stalk me in the links below</h2>
        <hr>
        <div class="social-grid">
          <div class="social-dixionary">
            <iframe class='social-size' src="https://discordapp.com/widget?id=203164299458379776&theme=dark" allowtransparency="true" frameborder="0"></iframe>
          </div>
          <div class='social-twitter'>
            <a class="twitter-timeline" data-width="350" data-height="500" data-theme="dark" href="https://twitter.com/Ar2roGuerra?ref_src=twsrc%5Etfw">Tweets by Ar2roGuerra</a> <script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>
          </div>
          <div class="social-ssl">
            <iframe class='social-size' src="https://discordapp.com/widget?id=194533269180514305&theme=dark" allowtransparency="true" frameborder="0"></iframe>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>
<script>
export default {
  name: 'Social',
  mounted () {
    if (process.browser) { this.$nuxt.$wow.sync() }
  },
  head: {
    title: 'Social',
    meta: [
      { property: 'og:title', hid: 'og:title', content: 'Social - ArturoNet' },
      { property: 'og:description', hid: 'og:description', content: "Arturo's website" },
      { hid: 'twitter:title', name: 'twitter:title', content: 'Social - ArturoNet' },
      { hid: 'twitter:description', name: 'twitter:description', content: "Arturo's website" }
    ]

  }
}
</script>
