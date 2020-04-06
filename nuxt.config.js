
export default {
  mode: 'universal',
  /*
  ** Headers of the page
  */
  head: {
    title: process.env.npm_package_name || '',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: process.env.npm_package_description || '' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css?family=Roboto:400,500,700,400italic|Material+Icons' }
    ]
  },
  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#fff' },
  /*
  ** Global CSS
  */
  css: [
    '~/assets/style.css'
  ],
  /*
  ** Plugins to load before mounting the App
  */
  plugins: [
    // https://vuematerial.io/
    { src: '~/plugins/vue-material.js' }
  ],
  /*
  ** Nuxt.js dev-modules
  */
  buildModules: [
    // Doc: https://github.com/nuxt-community/eslint-module
    '@nuxtjs/eslint-module'
  ],
  /*
  ** Nuxt.js modules
  */
  modules: [
    '@nuxtjs/pwa',
    ['@nuxtjs/firebase']
  ],
  firebase: {
    config: {
      apiKey: 'AIzaSyDn3_LnvVQ1icKvYtvoyIXD_X7Ik9Lyruw',
      authDomain: 'menuapp-1cb58.firebaseapp.com',
      databaseURL: 'https://menuapp-1cb58.firebaseio.com',
      projectId: 'menuapp-1cb58',
      storageBucket: 'menuapp-1cb58.appspot.com',
      messagingSenderId: '349364600107',
      appId: '1:349364600107:web:94b90dadf5838f4852596e'
    },
    services: {
      auth: true,
      realtimeDb: true
    }
  },
  /*
  ** Build configuration
  */
  build: {
    /*
    ** You can extend webpack config here
    */
    extend (config, ctx) {
    },
    extractCSS: true,
    optimization: {
      splitChunks: {
        cacheGroups: {
          styles: {
            name: 'styles',
            test: /\.(css|vue)$/,
            chunks: 'all',
            enforce: true
          }
        }
      }
    }
  },
  pwa: {
    icon: {
      iconSrc: '/favicon.ico'
    },
    manifest: {
      name: 'Menuapp'
    }
  },
  // makes the service worker
  workbox: {
    runtimeCaching: [
      {
        // make site offline available
        urlPattern: `${process.env.baseUrl}/*`,
        method: 'GET',
        strategyOptions: {
          cacheableResponse: { statuses: [0, 200] }
        }
      },
      {
        urlPattern: 'https://fonts.googleapis.com/*',
        handler: 'cacheFirst',
        method: 'GET',
        strategyOptions: {
          cacheableResponse: { statuses: [0, 200] }
        }
      }
    ]
  }
}
