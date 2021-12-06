export default {
  head: {
    title: 'scheeme-nuxt-components',
    htmlAttrs: {
      lang: 'ja'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },

  css: [

  ],

  plugins: [
    '@/plugins/components'
  ],

  components: false,

  storybook: {
    stories: [
      '~/stories/**/*.stories.[tj]s'
    ],
    addons: [
      '@storybook/addon-docs',
      '@storybook/addon-controls',
      '@storybook/addon-notes'
    ],
    typescript: {
      check: false,
      checkOptions: {},
      reactDocgen: 'react-docgen-typescript',
      reactDocgenTypescriptOptions: {
        shouldExtractLiteralValuesFromEnum: true,
        propFilter: (prop: { parent: { fileName: string; }; }) => (prop.parent ? !/node_modules/.test(prop.parent.fileName) : true)
      }
    }
  },

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    '@nuxt/typescript-build',
    '@nuxtjs/stylelint-module',
    '@nuxtjs/composition-api/module'
  ],

  modules: [
  ],

  build: {
    babel: {
      plugins: [['@babel/plugin-proposal-private-methods', { loose: true }]]
    }
  }
}
