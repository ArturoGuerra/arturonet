<template>
  <div>
    <div class="custom-hero dark-blue white custom-hero-small">
      <particles></particles>
      <div class='custom-hero-body wow lightSpeedIn'>
        <h1 class="hero-title">Contact Me</h1>
        <h3 class='hero-subtitle'><vue-typer :pre-type-delay='1500' :repeat='0' text='Mark is a lizard'/></h3>
      </div>
    </div>
    <section class='section section-mod wow zoomIn'>
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
    </section>
  </div>
</template>

<script>
export default {
  name: 'Contact',
  data () {
    return {
      message: null,
      name: null,
      email: null,
      result: null,
      color: null,
      validname: null,
      validemail: null,
      validmessage: null
    }
  },
  head: {
    title: 'Contact'
  },
  mounted () {
    if (process.browser) { this.$nuxt.$wow.sync() }
  },
  methods: {
    async sendEmail () {
      try {
        const result = await this.$axios.$post(
          '/post',
          {
            message: this.message,
            email: this.email,
            name: this.name
          }
        )
        this.result = result.data
        this.validname = result.status
        this.validemail = result.status
        this.validmessage = result.status
        this.color = result.status
      } catch (error) {
        console.log(error)
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
}
</script>
