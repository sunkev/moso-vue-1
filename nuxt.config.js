module.exports = {
    /*
    ** SPA-mode
    */
    mode: 'spa',
    /*
    ** Headers of the page
    */
    head: {
        title: 'Morten Sørensen | moso.io',
        meta: [
            { charset: 'utf-8' },
            { name: 'viewport', content: 'width=device-width, initial-scale=1.0, maximum-scale=1.0' },
            { vmid: 'og:description', property: 'og:description', content: 'Portfolio made with Vue.js and Nuxt.js' },
            { vmid: 'og:image', property: 'og:image', content: 'https://moso.io/images/og_image.png'},
            { vmid: 'og:image:secure_url', property: 'og:image:secure_url', content: 'https://moso.io/images/og_image.png'},
            { vmid: 'og:image:width', property: 'og:image:width', content: '700'},
            { vmid: 'og:image:height', property: 'og:image:height', content: '500'},
            { vmid: 'og:title', property: 'og:title', content: 'Morten Sørensen | moso.io'},
            { vmid: 'og:type', property: 'og:type', content: 'website'},
            { vmid: 'og:url', property: 'og:url', content: 'https://moso.io'},
            { name: 'description', name: 'description', content: 'Portfolio made with Vue.js and Nuxt.js' },
            { name: 'author', content: 'Morten Sørensen' },
            { name: 'mobile-web-app-capable', content: 'yes' },
            { name: 'apple-mobile-web-app-capable', content: 'yes' },
            { name: 'application-name', content: 'Morten Sørensen | moso.io' },
            { name: 'theme-color', content: '#263238' }
        ],
        link: [
            { rel: 'manifest', href: '/manifest.json' }
        ]
    },
    /*
    ** Customize the progress bar color
    */
    loading: { color: '#263238' },
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
        },
        /*
        ** Vendor plugins
        */
        vendor: [
            'axios',
            'v-lazy-img',
            'vue-masonry'
        ]
    },
    /*
    ** Plugins
    */
    plugins: [
        '~/plugins/v-lazy-img',
        '~/plugins/vue-masonry'
    ]
}
