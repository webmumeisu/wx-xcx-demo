// pages/photo/photo.js
/***
 * 正常情况下要以下接口
 */
// import { cosBase, signCos } from '../../api/user'
// import { getCos } from '../../utils/index'
// import { msgId } from '../../utils/util'
Page({

  /**
   * 页面的初始数据
   */
  data: {
    type: '2',
    pageSize:  1,
    pageNum: 2
  
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var that = this
    console.log(that.type, 'this.type')
    console.log(that.data, 'this.data')
  },
  changePhoto() {
    wx.chooseImage({
      count: 1,
      sizeType: ['compressed'],
      success: res => {
        wx.showLoading({
          title: '上传中...'
        })
        const filePath = res.tempFilePaths[0]
        const imgFormat = filePath.substring(filePath.lastIndexOf('.'))
        if (imgFormat != ".png" && imgFormat != ".jpg" && imgFormat != ".jpeg") {
          return wx.showToast({
            title: '只能上传.png、.jpg、.jpep 格式',
            icon: 'none',
            image: '',
            duration: 2000,
            mask: true,
          })
        }
        /**
         * msgId()这个方法是调用随机字符串，这个随机字符串是在在拍照的时候给拍照
         * 图片随机的文件名，因为原本拍照图片不知到文件，需要我们加
         */
        const key = this.packPath + msgId() + imgFormat
        this.cos.postObject({
          Bucket: this.bucketName,
          Region: this.regionname,
          Key: key,
          FilePath: filePath,
          onProgress: (info) => {
            console.log(JSON.stringify(info), 'zz');
          }
        }, (err, data) => {
          console.log(data)
          if (data.statusCode === 200) {
            wx.hideLoading()
            this.setData({
              // 这里test-125...是腾讯云服务器上的地址
              'imgUrl': '//test-1254071088.cossh.myqcloud.com' + key
            })
          }
        })
      }
    })
  },
  click() {
    console.log(this.data)
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