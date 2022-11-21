// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    modules: ['@nuxtjs/tailwindcss'],
    runtimeConfig: {
        public: {
            inviteUrl: "https://discord.com/api/oauth2/authorize?client_id=700796664276844612&permissions=275683339328&scope=bot%20applications.commands",
            supportUrl: "https://discord.gg/3gK8mSA"
        }
    }
})
