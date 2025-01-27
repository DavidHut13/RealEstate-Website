module.exports = {
  transpileDependencies:['vue2-google-maps'],
  devServer: {
    open: true
  },
    chainWebpack: config => {
      config.module
        .rule('vue')
        .use('vue-loader')
        .loader('vue-loader')
        .tap(options => {
          options['transformAssetUrls'] = {
            img: 'src',
            image: 'xlink:href',
            'b-img': 'src',
            'img-src': 'src',
            'b-img-lazy': ['src', 'blank-src'],
            'b-card': 'img-src',
            'b-card-img': 'img-src',
            'b-card-img-lazy': ['src', 'blank-src'],
            'b-carousel-slide': 'img-src',
            'b-embed': 'src'
          }
  
          return options
        })
    }
  }
  