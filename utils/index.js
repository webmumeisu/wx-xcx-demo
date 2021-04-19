const COS = require('./cos-wx-sdk-v5.js')
import { signCos } from '../api/user'
// import { COS } from './cos-wx-sdk-v5'


// cos签名
// export function getCos(openid) {
//   console.log(COS, 'wcccc')
//   return new COS({
//     getAuthorization: (options, callback) => {
//       console.log(options, 'wwwxxx')
//       signCos(openid).then(({ data }) => {
//         const credentials = data.credentials
//         console.log(credentials, 'signCos')
//         callback({
//           TmpSecretId: credentials.tmpSecretId,
//           TmpSecretKey: credentials.tmpSecretKey,
//           XCosSecurityToken: credentials.sessionToken,
//           ExpiredTime: data.expiredTime, // SDK 在 ExpiredTime 时间前，不会再次调用 getAuthorization
//         })
//       })
//     }
//   })
// }
export function getCos(openid) {
  return new COS({
    getAuthorization: function (options, callback) {
      signCos(openid).then(({ data }) => {
        console.log(data)
        const credentials = data.credentials
        callback({
          TmpSecretId: credentials.tmpSecretId,
          TmpSecretKey: credentials.tmpSecretKey,
          XCosSecurityToken: credentials.sessionToken,
          ExpiredTime: data.expiredTime, // SDK 在 ExpiredTime 时间前，不会再次调用 getAuthorization
        })
      })
    }
  })
}