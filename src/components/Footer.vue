<template>
<footer class="footer">
    <div class="container">
        <div class="content has-text-centered">
            <p>
            <strong><a href="/">ArturoNet.com</a>powered by Hitler and ISIS. JK NOT TRUE. Made by <a href="https://www.dixionary.com">TheOfficialDixionary</a></strong>
            </p>
            <p>
            <a class="icon" href="https://github.com/ArturoGuerra/arturonet">
                <i class="fa fa-github"></i>
            </a>
            </p>
            <p>
            <strong>Your IP is {{ ip }}</strong>
            </p>
        </div>
    </div>
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
