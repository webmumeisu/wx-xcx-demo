import { server } from '../config'
import { handleResData } from './handleResData'

const service = (options) => {
  const {
    url,
    data,
    header,
    timeout = 10 * 1000,
    method = 'POST',
    dataType,
    responseType
  } = options

  return new Promise((resolve, reject) => {
    wx.request({
      url: server + url,
      data,
      header,
      timeout,
      method,
      dataType,
      responseType,
      /**
       * 这里加这个是因为
       * 小程序json数据精度丢失问题
       */
      dataType:'text',
      success: ({ data: res }) => {
        /*
        *这里是正则过滤数据
         */
        res = handleResData(res)
        console.log(res)
        if (res.code && res.code === 200) {
          resolve(res)
        } else if (res.data) {
          reject(res)
          wx.showToast({
            title: res.msg,
            icon: 'none'
          })
        } else {
          wx.showModal({
            title: '提示',
            content: '非200，请检查接口',
            showCancel: false
          })
          reject(res)
        }
        /** 
        if (res.header && res.header.rspcode === '00') {
          resolve(res)
        } else if (res.header) {
          reject(res)

          // wx.showModal({
          //   title: '提示',
          //   content: res.header.rspmsg,
          //   showCancel: false
          // })
          wx.showToast({
            title: res.header.rspmsg,
            icon: 'none'
          })
        } else {
          wx.showModal({
            title: '提示',
            content: '非200，请检查接口',
            showCancel: false
          })
          reject(res)
        }

        */
      },
      fail: res => {
        wx.showModal({
          title: '提示',
          content: '进入fail回调',
          showCancel: false
        })
        reject(res)
      }
    })
  })
}


export default service