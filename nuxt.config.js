export default {
  
  target: 'static',

  srcDir: 'src/',

  buildDir: 'build',

  head: {
    title: 'Dice Roller',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' }
    ],
    link: [
      { rel: 'icon', type: 'image/png', sizes: '16x16', href: '/favicon-16x16.png' },
      { rel: 'icon', type: 'image/png', sizes: '32x32', href: '/favicon-32x32.png' }
    ]
  },

  css: [
    'sanitize.css/sanitize.css',
    '~/styles/_index.scss'
  ],

  plugins: [
    '~/plugins/bus'
  ],

  components: true,

  buildModules: [
  ],

  modules: [
  ],

  build: {
  }
}
