// pages/news/news.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    tab: [{
      "text": "主页",
      "iconPath": "/images/home.png",
      "selectedIconPath": "/images/home-on.png",
    },
    {
      "text": "我的",
      "iconPath": "/images/mine.png",
      "selectedIconPath": "/images/mine-on.png",
    }],
    current: 0,
    imgUrl: [
      {id: 1, photoUrl: "/images/swiper-3.png"},
      {id: 3, photoUrl: "/images/swiper-1.png"},
      {id: 2, photoUrl: "/images/swiper-2.png"}
    ],
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})