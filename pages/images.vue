<template>
    <div>
        <section class="hero is-dark is-medium dark-blue">
            <div class="hero-body">
               <div class="container has-text-centered wow lightSpeedIn">
                    <h1 class="title">Arturo Guerra</h1>
                    <h2 class="subtitle">Home of the Dixionary</h2>
                    <h3>#Vindows 11</h3>
               </div>
            </div>
            <HeroFoot/>
        </section>
        <div class="section">
            <div class="container">
                <nav class="level">
                    <div class="level-item has-text-centered">
                        <div>
                            <p class="headline">Programing</p>
                            <p class="title">Go to my <a href="https://github.com/ArturoGuerra">GitHub</a></p>
                        </div>
                    </div>
                    <div class="level-item has-text-centered">
                        <div>
                            <p class="headline">Discord</p>
                            <p class="title">You can find me <a href="https://discord.gg/ssl">Here</a></p>
                        </div>
                    </div>
                </nav>
            </div>
        </div>
        <hr>
        <div class='hero hero-body'>
            <div class="container notification has-text-centered">
                <p class="title">
                    <img src="./../assets/img/myface.jpg" width="50" style="border-radius: 16%; vertical-align:middle;"> About Me
                </p>
                <hr>
                <p class="content">
                    My name is Arturo Guerra, I'm 18 and planning to study Computer Science in the near future. I love messing with computers which has developed my love and interest for fixing hardware and programing.
                    I'm currently one of the main developers of <strong><a href="auttaja.us">Auttaja</a></strong> a very nice <strong><a href='https://discordapp.com'>Discord</a></strong> bot that currenly serves around
                    400 servers. I also enjoy fixing computer hardware ie. Phones and Computer, and I did that as a job when I was living in canada.
                </p>
                <p class="content">
                    I have about year and a half of experience programing in python and consider myself fairly experienced on it. I also have knowledge in JavaScript and some C, But of cource TXT is my main programing
                    language and consider myself a professional notepad coder looool. That last part was totaly serious. I'm currenly gettings into web development and thats why I made this website. If you want to see my
                    other projects go to my <strong><a href="https://github.com/ArturoGuerra">GitHub</a></strong> or click on the projects tab at the top of the website.
                </p>
            </div>
        </div>
        <div class="hero is-info dark-blue-1 is-bold is-medium">
            <div class="hero-body">
                <div class="container">
                    <div class="tile is-ancestor">
                        <div class="tile is-8">
                            <div class="tile is-vertical has-text-centered">
                                <div class="tile is-parent">
                                    <div class="tile is-child is-2">
                                        <span class="icon is-large">
                                            <i class="fa fa-twitter"></i>
                                        </span>
                                    </div>
                                    <div class="tile is-child has-text-left">
                                        <p class="title is-4">
                                        Follow me on
                                        <strong><a href="https://twitter.com/Ar2roGuerra">twitter</a></strong>
                                        its a great(Shit) social media platform.
                                        </p>
                                        <p class="subtitle is-6">
                                        I don't tweet that much but I constantly check it, so follow me
                                        </p>
                                    </div>
                                </div>
                                <div class="tile is-parent">
                                    <div class="tile is-child is-2">
                                        <span class="icon is-large">
                                            <i class="fa fa-github"></i>
                                        </span>
                                    </div>
                                   <div class="tile is-child has-text-left">
                                       <p class="title is-4">
                                       Look at my github projects you might find something you like.
                                       </p>
                                       <p class="subtitle is-6">
                                       Most of my projects are open-sourced so feel free to use them
                                       </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="tile wow slideInRight" data-wow-duration='3s'>
                            <div class="tile is-parent is-vertical has-text-centered">
                                <div class="tile is-child">
                                  <a class="twitter-timeline" data-width="350" data-height="500" data-dnt="true" data-theme="dark" href="https://twitter.com/Ar2roGuerra?ref_src=twsrc%5Etfw">Tweets by Ar2roGuerra</a> <script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
  name: 'Home',
  mounted () {
    if (process.browser) { this.$nuxt.$wow.sync() }
  },
  head: {
    title: 'Home',
    meta: [
      { property: 'og:title', hid: 'og:title', content: 'Home - ArturoNet' },
      { property: 'og:description', hid: 'og:description', content: "Arturo's website" },
      { hid: 'twitter:title', name: 'twitter:title', content: 'Home - ArturoNet' },
      { hid: 'twitter:description', name: 'twitter:description', content: "Arturo's website" }
    ]
  }
}
</script>
