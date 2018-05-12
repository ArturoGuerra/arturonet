<template>
  <div>
    <div class='hero full-height'>
      <div class='body'>
        <div class='l-container'>
          <div class='flex flex-column flex-a-center flex-j-center'>
            <div>
              <h1 class='hero-title center blue'>WakeOnLan</h1>
            </div>
            <div class='flex-grow'>
              <div class="field">
               <label for='mac'>Mac Address</label>
               <div class="control">
                  <input class="input" id='mac' type="text" name="mac" placeholder="00:11:22:33:44:55" v-model='mac' :class='[validmac]'/>
               </div>
              </div>
              <div class='field'>
                <div class='control'>
                  <button class='button is-info' @click='send'>Submit</button>
                </div>
              </div>
              <p class='help' :class='[result.status]'>{{ result.text }}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'wakeonlan',
  middleware: 'isadmin',
  head: {
    title: 'WakeOnlan',
    meta: [
      { property: 'og:title', hid: 'og:title', content: 'WakeOnLan - ArturoNet' },
      { property: 'og:description', hid: 'og:description', content: "Arturo's website" },
      { hid: 'twitter:title', name: 'twitter:title', content: 'WakeOnLan - ArturoNet' },
      { hid: 'twitter:description', name: 'twitter:description', content: "Arturo's website" }
    ]
  },
  data () {
    return {
      result: {
        text: null,
        status: null
      },
      mac: null,
      validmac: null
    }
  },
  mounted () {
    if (process.browser) { this.$nuxt.$wow.sync() }
  },
  methods: {
    validateMac () {
      let remac = /^([0-9A-Fa-f]{2}[:-]){5}([0-9A-Fa-f]{2})$/
      if (remac.test(this.mac)) {
        this.validmac = 'is-success'
        return true
      } else {
        this.validmac = 'is-danger'
        this.result.status = 'is-danger'
        this.result.text = 'Sorry invalid mac address'
        return false
      }
    },
    async wol () {
      try {
        let result = await this.$nuxt.$axios({
          method: 'POST',
          url: 'https://wol.arturonet.com/post',
          headers: { 'authorization': 'Bearer ' + this.$nuxt.$store.state.atoken },
          data: {
            mac: this.mac
          }
        })
        this.result = result.data
      } catch (e) {
        console.error(e)
        this.result = e
      }
    },
    async send (e) {
      let passed = true
      if (!this.validateMac()) {
        passed = false
        e.preventDefault()
      }
      if (!passed) return
      await this.wol()
    }
  }
}
</script>
