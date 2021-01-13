<template>
  <footer class="footer">
    <p class='footer-item item-hidden'>
    <span><a href="/">Arturonet.com </a> is written and maintained by Arturo Guerra </span>
    </p>
    <p v-if='show' class='footer-item' @click='showip()'>
      <span>Your IP is </span><span :class='[blurry]'>{{ ip }}</span>
    </p>
  </footer>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  name: 'Footer',
  data () {
    let blurry: string = 'blurry-text'
    let ip: string = ''
    let show: boolean = false
    return {
      blurry,
      ip,
      show
    }
  },
  methods: {
    async iprequest (): Promise<void> {
      try {
        let result: any = await this.$nuxt.$axios.$get("https://httpbin.org/ip")
        this.ip = result.origin
        this.show = true
      } catch (error: any) {
        console.log(error)
      }
    },
    showip(): void {
      this.blurry = ""
    }
  },
  async mounted () {
    await this.iprequest()
  }
})
</script>
