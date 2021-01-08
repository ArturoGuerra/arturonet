import Vue from 'vue'

interface NuxtWOWInstance {
    sync(): void
}

declare module '@nuxt/types' {
    interface Context {
        $wow: NuxtWOWInstance
    }
}

declare module 'vue/types/vue' {
    interface Vue {
        $wow: NuxtWOWInstance
    }
}