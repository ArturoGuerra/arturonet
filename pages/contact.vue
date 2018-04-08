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
      <HeroFoot/>
    </section>
    <section class='section'>
      <div class='field'>
        <label class='label'>Subject</label>
        <div class='control'>
          <input v-model='subject' class='input' type='text' placeholder='Email Subject'>
        </div>
      </div>
      <div class='field'>
        <label class='label'>Message</label>
        <div class='control'>
          <textarea v-model='message' class='textarea' placeholder='Email Content'></textarea>
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
      color: null
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
        this.color = result.status
      } catch (error) {
        console.log(error)
      }
    },
    async send () {
      if (!this.message) return
      if (!this.subject) return
      await this.sendEmail()
    }
  }
}
</script>
