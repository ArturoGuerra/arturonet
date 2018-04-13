<template>
    <div>
        <section class="hero is-dark is-medium dark-blue">
             <div class="hero-body">
                <div class="container has-text-centered">
                    <h1 class="title">Social Media</h1>
                    <h2 class="subtitle">DISCORD</h2>
                    <h3>#MAKEAMERICAGREATAGAIN</h3>
                </div>
            </div>
            <HeroFoot></HeroFoot>
        </section>
        <section class="section">
          <div class="hero-body">
              <div class="container is-fluid has-text-centered">
                  <h1 class="title">My social media</h1>
                  <h2 class="subtitle">Go stalk me in the links below</h2>
                  <hr>
                  <div class="columns">
                      <div class="column is-hidden-touch wow slideInRight" >
                          <div><a href="https://inwite.dixionary.com"><h1 class="title"><strong>Dixionary Dixord</strong></h1></a></div>
                          <br>
                          <iframe src="https://discordapp.com/widget?id=203164299458379776&theme=dark" width="350" height="500" allowtransparency="true" frameborder="0"></iframe>
                      </div>
                      <div class="column is-hidden-touch">
                          <div><a href="https://twitter.com/Ar2roGuerra"><h1 class="title"><strong>Twitter</strong></h1></a></div>
                          <br>
                          <a class="twitter-timeline" data-width="350" data-height="500" data-dnt="true" data-theme="dark" href="https://twitter.com/Ar2roGuerra?ref_src=twsrc%5Etfw">Tweets by Ar2roGuerra</a> <script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>
                      </div>
                      <div class="column is-hidden-touch wow slideInLeft">
                          <div><a href="https://discord.gg/ssl"><h1 class="title"><strong>SSL Community</strong></h1></a></div>
                          <br>
                          <iframe src="https://discordapp.com/widget?id=194533269180514305&theme=dark" width="350" height="500" allowtransparency="true" frameborder="0"></iframe>
                      </div>
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
    try { this.$nuxt.$wow.sync() } catch (e) { console.error('SSR Page') }
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
