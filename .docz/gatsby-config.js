const { mergeWith } = require('docz-utils')
const fs = require('fs-extra')

let custom = {}
const hasGatsbyConfig = fs.existsSync('./gatsby-config.custom.js')

if (hasGatsbyConfig) {
  try {
    custom = require('./gatsby-config.custom')
  } catch (err) {
    console.error(
      `Failed to load your gatsby-config.js file : `,
      JSON.stringify(err),
    )
  }
}

const config = {
  pathPrefix: '/',

  siteMetadata: {
    title: 'Pd Base Ui',
    description: 'My awesome app using docz',
  },
  plugins: [
    {
      resolve: 'gatsby-theme-docz',
      options: {
        themeConfig: {},
        src: './',
        gatsbyRoot: null,
        themesDir: 'src',
        mdxExtensions: ['.md', '.mdx'],
        docgenConfig: {},
        menu: [],
        mdPlugins: [],
        hastPlugins: [],
        ignore: [],
        typescript: false,
        ts: false,
        propsParser: true,
        'props-parser': true,
        debug: false,
        native: false,
        openBrowser: null,
        o: null,
        open: null,
        'open-browser': null,
        root: '/Users/4paradigm/Desktop/react-components-lib/.docz',
        base: '/',
        source: './',
        'gatsby-root': null,
        files: '**/*.{md,markdown,mdx}',
        public: '/public',
        dest: '.docz/dist',
        d: '.docz/dist',
        editBranch: 'master',
        eb: 'master',
        'edit-branch': 'master',
        config: '',
        title: 'Pd Base Ui',
        description: 'My awesome app using docz',
        host: 'localhost',
        port: 3000,
        p: 3000,
        separator: '-',
        paths: {
          root: '/Users/4paradigm/Desktop/react-components-lib',
          templates:
            '/Users/4paradigm/Desktop/react-components-lib/node_modules/docz-core/dist/templates',
          docz: '/Users/4paradigm/Desktop/react-components-lib/.docz',
          cache: '/Users/4paradigm/Desktop/react-components-lib/.docz/.cache',
          app: '/Users/4paradigm/Desktop/react-components-lib/.docz/app',
          appPackageJson:
            '/Users/4paradigm/Desktop/react-components-lib/package.json',
          appTsConfig:
            '/Users/4paradigm/Desktop/react-components-lib/tsconfig.json',
          gatsbyConfig:
            '/Users/4paradigm/Desktop/react-components-lib/gatsby-config.js',
          gatsbyBrowser:
            '/Users/4paradigm/Desktop/react-components-lib/gatsby-browser.js',
          gatsbyNode:
            '/Users/4paradigm/Desktop/react-components-lib/gatsby-node.js',
          gatsbySSR:
            '/Users/4paradigm/Desktop/react-components-lib/gatsby-ssr.js',
          importsJs:
            '/Users/4paradigm/Desktop/react-components-lib/.docz/app/imports.js',
          rootJs:
            '/Users/4paradigm/Desktop/react-components-lib/.docz/app/root.jsx',
          indexJs:
            '/Users/4paradigm/Desktop/react-components-lib/.docz/app/index.jsx',
          indexHtml:
            '/Users/4paradigm/Desktop/react-components-lib/.docz/app/index.html',
          db: '/Users/4paradigm/Desktop/react-components-lib/.docz/app/db.json',
        },
      },
    },
  ],
}

const merge = mergeWith((objValue, srcValue) => {
  if (Array.isArray(objValue)) {
    return objValue.concat(srcValue)
  }
})

module.exports = merge(config, custom)
