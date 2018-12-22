module.exports = {
    /*
    ** SPA-mode
    */
    mode: 'spa',
    /*
    ** Headers of the page
    */
    head: {
        title: 'Kevin Sun',
        meta: [
            { charset: 'utf-8' },
            { name: 'viewport', content: 'width=device-width, initial-scale=1.0, maximum-scale=1.0' },
            { vmid: 'og:description', property: 'og:description', content: 'Portfolio made with Vue.js and Nuxt.js' },
            { vmid: 'og:image', property: 'og:image', content: 'http://www.kevinsun.me/images/profile.jpg' },
            { vmid: 'og:title', property: 'og:title', content: 'Kevin Sun - Personal Site' },
            { vmid: 'og:type', property: 'og:type', content: 'website' },
            { vmid: 'og:url', property: 'og:url', content: 'http://kevinsun.me' },
            { name: 'description', content: 'Portfolio made with Vue.js and Nuxt.js' },
            { name: 'author', content: 'Kevin Sun' },
            { name: 'mobile-web-app-capable', content: 'yes' },
            { name: 'apple-mobile-web-app-capable', content: 'yes' },
            { name: 'application-name', content: 'Kevin Sun' },
            { name: 'msapplication-TileColor', content: '#263238' },
            { name: 'msapplication-TileImage', content: '/images/favicon.ico' },
            { name: 'theme-color', content: '#263238' }
        ],
        link: [
            { rel: 'icon', type: 'image/png', sizes: '32x32', href: '/images/favicon.ico' }
        ]
    },
    /*
    ** CSS
    */
    css: [
        '~/node_modules/flexgrid.co/css/flexgrid-tailwind.css',
        '~/assets/sass/app.scss'
    ],
    /*
    ** Customize the progress bar color
    */
    loading: {
        color: '#37474F',
        failedColor: '#F44336',
        height: '3px',
    },
    /*
    ** Modules
    */
    modules: [
        '@nuxtjs/router',
        '@nuxtjs/axios'
    ],
    /*
    ** axios config
    */
    axios: {
        proxy: false
    },

    proxy: {
    },

    generate: {
        routes: [
            '/'
        ]
    },
    /*
    ** Build configuration
    */
    build: {
        /*
        ** Run ESLint on save
        */
        extend (config, { isDev, isClient }) {
            if (isDev && isClient) {
                config.module.rules.push({
                    enforce: 'pre',
                    test: /\.(js|vue)$/,
                    loader: 'eslint-loader',
                    exclude: /(node_modules)/
                })
            }
        }
    },
    /*
    ** Plugins
    */
    plugins: [
        '~/plugins/Ripple',
        { src: '~/plugins/vue-masonry', ssr: false }
    ]
}
