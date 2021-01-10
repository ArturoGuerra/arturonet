<template>
  <div class='hero full-height'>
    <div class='body'>
      <div class='l-container'>
        <div class='grid grid-t-shape'>
          <div class='grid-item grid-contact-head flex flex-column flex-j-center'>
            <h1 class="hero-title blue">Contact Me</h1>
            <h3 class='hero-subtitle m-auto'><vue-typer :pre-type-delay='1500' :repeat='0' text='Mark is a lizard'/></h3>
          </div>
          <div class='grid-contact-contact'>
            <div class='field'>
              <label class='label'>Name</label>
              <div class='control'>
                <input v-model='name' :class='[validname]' class='input' type='text' placeholder='name'>
              </div>
            </div>
            <div class='field'>
              <label class='label'>Email</label>
              <div class='control'>
                <input v-model='email' :class='[validemail]' class='input' type='email' placeholder='email' required>
              </div>
            </div>
            <div class='field'>
              <label class='label'>Message</label>
              <div class='control'>
                <textarea v-model='message' :class='[validmessage]' class='textarea' placeholder='email content'></textarea>
              </div>
            </div>
            <div class="field">
              <a @click='send' class="button is-info">Submit</a>
            </div>
            <p class='help' :class="[color]">{{ result }}</p>
          </div>
          <div class='grid-contact-social is-hidden-mobile'>
            <div class='flex flex-j-center flex-column m-bottom-auto m-right-auto m-left-auto m-top-1'>
              <a href='https://github.com/ArturoGuerra'>
                <div class='fab fa-github contact-fa-padding font-3'>
                </div>
              </a>
              <a href='https://twitter.com/Ar2ro_'>
                <div class='fab fa-twitter contact-fa-padding font-3'>
                </div>
              </a>
              <a href='https://destinyarena.app'>
                <div class='fab fa-discord contact-fa-padding font-3'>
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang='ts'>
import Vue from 'vue'
export default Vue.extend({
  name: 'contact',
  data () {
    let message: any = null
    let name: any = null
    let email: any = null
    let result: any = null
    let color: any = null
    let validname: any = null
    let validemail: any = null
    let validmessage: any = null
    return {
      message,
      name,
      email,
      result,
      color,
      validname,
      validemail,
      validmessage
    }
  },
  head: {
    title: 'Contact',
    meta: [
      { property: 'og:title', hid: 'og:title', content: 'Contact - ArturoNet' },
      { property: 'og:description', hid: 'og:description', content: "Arturo's website" },
      { hid: 'twitter:title', name: 'twitter:title', content: 'Contact - ArturoNet' },
      { hid: 'twitter:description', name: 'twitter:description', content: "Arturo's website" }
    ]
  },
  async mounted () {
    if (process.browser) { this.$nuxt.$wow.sync() }
    try {
      await this.$recaptcha.init()
    } catch (err) {
      console.error(err)
    }
  },
  methods: {
    async sendEmail (): Promise<void> {
      try {
        const token: string = await this.$recaptcha.execute('login')
        console.log(token)
        const result: any = await this.$axios.$post(
          '/email',
          {
            message: this.message,
            email: this.email,
            name: this.name,
            recaptcha: token
          }
        )
        this.result = result.data
        this.validname = result.status
        this.validemail = result.status
        this.validmessage = result.status
        this.color = result.status
      } catch (error) {
        console.error(error)
      }
    },
    async send () {
      let pass = true

      if (!this.message) {
        this.validmessage = 'is-danger'
        pass = false
      } else {
        this.validmessage = 'is-success'
      }

      if (!this.name) {
        this.validname = 'is-danger'
        pass = false
      } else {
        this.validname = 'is-success'
      }

      if (!this.email) {
        this.validemail = 'is-danger'
        pass = false
      } else if (this.email.indexOf('@') > -1) {
        this.validemail = 'is-success'
      } else {
        this.validemail = 'is-danger'
        pass = false
      }

      if (!pass) {
        this.color = 'is-danger'
        this.result = 'Missing fields'
        return
      }

      this.validmessage = 'is-success'
      this.validemail = 'is-success'
      this.validname = 'is-success'
      await this.sendEmail()
    }
  }
})
</script>
