<template>
    <div>
      <div class="custom-hero dark-blue white">
        <particles></particles>
        <div class='custom-hero-body wow lightSpeedIn'>
          <h1 class="hero-title"><vue-typer :pre-type-delay='1500' :repeat='0' text='Arturo Guerra'></vue-typer></h1>
        </div>
      </div>
      <div class="flex-container flex-container-center flex-container-shadow">
        <div class="flex-item">
          <div>
            <p class="hero-subtitle">Programing</p>
            <p class="hero-title">Go to my <a href="https://github.com/ArturoGuerra">GitHub</a></p>
          </div>
        </div>
        <div class="flex-item">
          <div>
            <p class="hero-subtitle">Discord</p>
            <p class="hero-title">You can find me <a href="https://discord.gg/ssl">Here</a></p>
          </div>
        </div>
      </div>
      <br/>
      <div class="container container-padding">
        <p class="hero-subtitle flex-text-align">
          <img src="./../assets/img/myface.jpg" width="50" class='flex-img-style'> About Me
        </p>
        <hr>
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
      <br/>
      <div class='main-grid-container blue-1'>
        <div class="grid-container">
          <div class="grid-twitter">
            <p class="grid-title is-4">
            Follow me on twitter
            its a great(Shit) social media platform.
            </p>
            <p class="grid-subtitle is-6">
            I don't tweet that much but I constantly check it, so follow me
            </p>
          </div>
          <div class="grid-github">
            <p class="grid-title is-4">
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
  }
}
</script>
