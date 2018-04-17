<template>
  <div>
    <div class='dark-blue white'>
        <no-ssr>
          <vue-particles
              color="#dedede"
              :particlesNumber='250'
              :moveSpeed='5'
              >
          </vue-particles>
        </no-ssr>
        <div class="hero hero-center wow lightSpeedIn">
          <h1 class="hero-title">Contact Me</h1>
          <h3 class='hero-subtitle'>Mark is a lizard</h3>
        </div>
    </div>
    <section class='email-form wow zoomIn'>
      <div class='form-group'>
        <label class='form-label' for='InputName'>Name</label>
        <input id='InputName' v-model='name' class='form-control' type='text' placeholder='name'>
      </div>
      <div class='form-group'>
        <label class='form-label' for='InputEmail'>Email</label>
        <input id='InputEmail' v-model='email' class='form-control' type='email' placeholder='email' required>
      </div>
      <div class='form-group'>
        <label class='form-label' for='InputMessage'>Message</label>
        <textarea id='InputMessage' v-model='message' rows='5' class='form-control' placeholder='email content'></textarea>
      </div>
      <button @click='send' class="btn btn-primary">Submit</button>
      <p style='padding-top: 30px' :class="[color]">{{ result }}</p>
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
        this.validmessage = 'text-danger'
        pass = false
      } else {
        this.validmessage = 'text-success'
      }

      if (!this.name) {
        this.validname = 'text-danger'
        pass = false
      } else {
        this.validname = 'text-success'
      }

      if (!this.email) {
        this.validemail = 'text-danger'
        pass = false
      } else if (this.email.indexOf('@') > -1) {
        this.validemail = 'text-success'
      } else {
        this.validemail = 'text-danger'
        pass = false
      }

      if (!pass) {
        this.color = 'text-danger'
        this.result = 'Missing fields'
        return
      }

      this.validmessage = 'text-success'
      this.validemail = 'text-success'
      this.validname = 'text-success'
      await this.sendEmail()
    }
  },
  mounted () {
    if (process.browser) { this.$nuxt.$wow.sync() }
  }
}
</script>
