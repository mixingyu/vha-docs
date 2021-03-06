const path = require('path')
const PrerenderSPAPlugin = require('prerender-spa-plugin')

module.exports = {
  baseUrl: 'vha-docs',
  outputDir: path.join(__dirname, '..') + '\\docs',
  productionSourceMap: false,
  css: {
    loaderOptions: {
      stylus: {
        import: path.resolve(__dirname, './src/assets/stylus/mixin.styl')
      }
    }
  },
  configureWebpack: {
    plugins: [
      new PrerenderSPAPlugin({
        staticDir: path.join(__dirname, '..') + '\\docs',
        routes: [
          '/', 
          '/GettingStarted', 
          '/Authentication', 
          '/Errors'
        ],
        postProcess(context) {
          let titles = {
            '/': 'vha-docs'
          };
          let temp_title = titles[context.route]
          if (!temp_title) {
            temp_title = context.route.replace(/\//g, '').replace(/-/g, ' ') + ' 静态文档博客'
          }
          context.html = context.html.replace(
            /<title>[^<]*<\/title>/i,
            `<title>${temp_title}</title>`
          )
          return context
        }
      })
    ]
  }
}