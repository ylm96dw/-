//app.js
const Towxml = require('/towxml/main') //引入towxml库
App({
  onLaunch: function () {
    // 展示本地存储能力
    

    // 登录
    wx.login({
     
    })
    // 获取用户信息
    wx.getSetting({
      
    })
    
  },
  towxml: new Towxml(),//创建towxml对象，供小程序页面使用
  
  globalData: {
    userInfo: null
  }
})