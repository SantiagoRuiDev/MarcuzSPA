// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    modules: ['@nuxtjs/tailwindcss'],
    app: {
        head: {
            link: [
                { rel: 'icon', type: 'image/x-icon', href: '/assets/images/marcuzweb.png' }
              ]
        }
    },
    loading: false
})
