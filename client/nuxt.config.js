module.exports = {
  /*
  ** Headers of the page
  */
  head: {
    title: 'client',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'e-commerce' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },
  /*
  ** Customize the progress bar color
  */
  loading: { color: '#3B8070' },

  env: {
    baseUrl: 3001 || 5555,
    appBaseUrl: '/admin-secret/',
    apiBaseUrl:'http://localhost:3333/'

  },

  /*
  ** Build configuration
  */

  plugins: [
    {src:'~/plugins/toaster' , ssr: false},
    // {src:'~/plugins/vue-modal' , ssr: false},
    // {src:'~/plugins/permission'},
    // {src:'~/plugins/routePermission'}
  ],

  build: {
    /*
    ** Run ESLint on save
    */
    // extend (config, { isDev, isClient }) {
    //   if (isDev && isClient) {
    //     config.module.rules.push({
    //       enforce: 'pre',
    //       test: /\.(js|vue)$/,
    //       loader: 'eslint-loader',
    //       exclude: /(node_modules)/
    //     })
    //   }
    // }
  }
}
