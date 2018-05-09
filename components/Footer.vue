<template>
  <footer class="footer">
    <p class='footer-item item-hidden'>
    <span><a href="/">ArturoNet.com </a>Written with VueJS, Bulma and way too much custom CSS</span>
    </p>
    <p class='footer-item'>
      <span>Your IP is {{ ip }}</span>
    </p>
  </footer>
</template>

<script>
import axios from 'axios'
export default {
  name: 'Footer',
  data () {
    return {
      ip: ''
    }
  },
  mounted () {
    axios({
      method: 'GET',
      url: 'https://httpbin.org/ip'
    }).then(result => {
      this.ip = result.data.origin
    }, error => {
      console.log(error)
    })
  }
}
</script>
