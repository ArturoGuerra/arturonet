<template>
  <div>
    <div class='custom-hero dark-blue white'>
      <particles></particles>
      <div class='custom-hero-body wow lightSpeedIn'>
        <h1 class='hero-title'>Image Uploader</h1>
      </div>
    </div>
    <div class='container container-mod'>
      <div class='base-image-container'>
        <label class='image-container bg-blue aqua'>
          <input type='file' @change='onFileChange' multiple accept="image/*">
          <span class='img-input'>{{ message }}</span>
        </label>
        <span class='img-upload bg-navy blue' @click='upload'>Upload</span>
      </div>
      <div class='gallery-container' v-if='valid'> <!-- Uploaded images -->
        <img class='gallery-item' v-for='file in files' :src='file.src' :key='file.upload.name'>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ImageUploader',
  head: {
    title: 'Image Uploader',
    meta: [
      { property: 'og:title', hid: 'og:title', content: 'Image Upload - ArturoNet' },
      { property: 'og:description', hid: 'og:description', content: "Arturo's website" },
      { hid: 'twitter:title', name: 'twitter:title', content: 'Image Upload - ArturoNet' },
      { hid: 'twitter:description', name: 'twitter:description', content: "Arturo's website" }
    ]
  },
  data () {
    return {
      files: [],
      valid: false,
      message: 'Click me to upload'
    }
  },
  mounted () {
    if (process.browser) { this.$nuxt.$wow.sync() }
  },
  methods: {
    checkFileType (file) {
      let type = false
      switch (file.type) {
        case 'image/png':
          type = true
          break
        case 'image/jpeg':
          type = true
          break
        case 'image/gif':
          type = true
          break
        case 'image/bmp':
          type = true
          break
        default:
          type = false
          break
      }
      return type
    },
    async onFileChange (e) {
      let files = e.target.files || e.dataTransfer.files
      for (let i = 0; i < 13; i++) {
        if (this.checkFileType(files[0])) {
          this.files.push({ upload: files[i], src: URL.createObjectURL(files[i]) })
        } else {
          console.log('Invalid file: ' + files[i])
        }
      }
      this.valid = true
      this.message = this.files.length + ' file(s) ready to upload, Click me to upload more'
    },
    async upload () {
      if (this.files.length === 0) return null
      let form = new FormData()
      for (let i = 0; i < this.files.length; i++) {
        form.append('files', this.files[i].upload)
      }
      this.message = 'Uploading..'
      try {
        let resp = await this.$nuxt.$axios.$post('https://img.dixionary.com/post', form)
        console.log(resp)
      } catch (e) {
        console.error(e)
      }
      this.valid = false
      this.files = []
      this.message = 'Click me to upload'
    }
  }
}
</script>
