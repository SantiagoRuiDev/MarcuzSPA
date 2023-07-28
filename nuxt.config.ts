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
    runtimeConfig: {
       public:{
        API:  "http://198.251.88.211:25581/discord-messages"
       }
    }
})
