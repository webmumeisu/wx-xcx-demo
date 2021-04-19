// app.js
App({
  onLaunch() {
    // 展示本地存储能力
    const logs = wx.getStorageSync('logs') || []
    logs.unshift(Date.now())
    wx.setStorageSync('logs', logs)

    // 登录
    wx.login({
      success: res => {
        // 发送 res.code 到后台换取 openId, sessionKey, unionId
        /*
        https://developers.weixin.qq.com/community/develop/article/doc/000aecd2f38df8efb55a0250b5bc13
        */
      }
    })
  },
  globalData: {
    userInfo: null
  }
})
