// This is where project configuration and plugin options are located.
// Learn more: https://gridsome.org/docs/config

// Changes here require a server restart.
// To restart press CTRL + C in terminal and run `gridsome develop`

module.exports = {
  siteName: 'Liège HackerSpace',
  siteUrl: 'https://lghs.github.io',
  pathPrefix: '/lghs.be',
  plugins: [
    'gridsome-plugin-brotli',
    {
      use: '@gridsome/vue-remark',
      options: {
        typeName: 'Pages', // Required
        baseDir: './content/pages', // Where .md files are located
        template: './src/templates/Pages.vue' // Optional
      }
    },
    {
      use: '@gridsome/vue-remark',
      options: {
        typeName: 'Articles', // Required
        baseDir: './content/articles', // Where .md files are located
        pathPrefix: '/blog/',
        template: './src/templates/Articles.vue' // Optional
      }
    },
    {
      use: '@gridsome/vue-remark',
      options: {
        typeName: 'Equipements', // Required
        baseDir: './content/equipements', // Where .md files are located
        pathPrefix: '/equipements/',
        template: './src/templates/Equipements.vue' // Optional
      }
    },
    {
      use: '@gridsome/vue-remark',
      options: {
        typeName: 'Projets', // Required
        baseDir: './content/projets', // Where .md files are located
        pathPrefix: '/projets/',
        template: './src/templates/Projets.vue' // Optional
      }
    },
    {
      use: '@gridsome/plugin-sitemap',
      options: {
        config: {
          '/*': {
            changefreq: 'monthly',
            priority: 0.7,
            lastmod: '2021-12-31',
          }
        }
      }
    },
    {
      use: 'gridsome-plugin-gtm',
      options: {
        id: 'GTM-XXXXXXX',
        enabled: true,
        debug: true
      }
    }
  ]
}
