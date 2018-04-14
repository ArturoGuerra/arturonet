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
      <HeroFoot/>
    </section>
    <section class='section wow zoomIn'>
      <div class='field'>
        <label class='label'>Subject</label>
        <div class='control'>
          <input v-model='subject' :class='[validsubject]' class='input' type='text' placeholder='Email Subject'>
        </div>
      </div>
      <div class='field'>
        <label class='label'>Message</label>
        <div class='control'>
          <textarea v-model='message' :class='[validmessage]' class='textarea' placeholder='Email Content'></textarea>
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
      subject: null,
      result: null,
      color: null,
      validsubject: null,
      validmessage: null
    }
  },
  head: {
    title: 'Contact'
  },
  methods: {
    async sendEmail () {
      try {
        const result = await this.$axios.$post(
          '/post',
          {
            message: this.message,
            subject: this.subject
          }
        )
        this.result = result.data
        this.validsubject = result.status
        this.validmessage = result.status
        this.color = result.status
      } catch (error) {
        console.log(error)
      }
    },
    async send () {
      let pass = true
      if (!this.message) {
        this.validmessage = 'is-warning'
        pass = false
      } else {
        this.validmessage = 'is-success'
      }

      if (!this.subject) {
        this.validsubject = 'is-warning'
        pass = false
      } else {
        this.validsubject = 'is-success'
      }

      if (!pass) {
        this.color = 'is-warning'
        this.result = 'Missing fields'
        return
      }

      this.validmessage = 'is-success'
      this.validsubject = 'is-success'
      await this.sendEmail()
    }
  },
  mounted () {
    if (process.browser) { this.$nuxt.$wow.sync() }
  }
}
</script>
