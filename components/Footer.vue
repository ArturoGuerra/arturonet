<template>
  <footer class="footer">
    <p class='footer-item item-hidden'>
    <span><a href="/">Arturonet.com </a> is written and maintained by Arturo Guerra </span>
    </p>
    <p class='footer-item'>
      <span>Your IP is {{ ip }}</span>
    </p>
  </footer>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  name: 'Footer',
  data () {
    return {
      ip: ''
    }
  },
  methods: {
    async iprequest (): Promise<void> {
      try {
        let result: any = await this.$nuxt.$axios.$get("https://httpbin.org/ip")
        this.ip = result.origin
      } catch (error: any) {
        console.log(error)
      }
    } 

  },
  mounted () {
    this.iprequest()
  }
})
</script>
