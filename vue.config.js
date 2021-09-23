// 跨域配置
module.exports = {
  devServer:{
    proxy:{
      '/api':{
        target:'http://localhost:8081',
        changeOrigin:true,
        pathRewrite:{
          '/api':''
        }
      }
    }
  }
}
