## 这是个自己练手的小程序项目

## 小程序的用的尺寸小程序一般是将设计图宽度变成750个尺寸在PS里选择web  1x上传至蓝湖 如尺寸.png图
然后直接在蓝湖中量出页面尺寸，将单位改为rpx


## 小程序存储COS腾讯云上传图片流程笔记
https://cloud.tencent.com/document/product/436/31953
1 首先要获得sigCos的签名如 > utils>index> getCos这个方法就是用来获取云存储的详细资料

2 然后在通过photo >点击触发事件》调用changePhoto方法即可
这个项目文件utiles里有cos-wx-sdk-v5.js文件这个是用来做小程序COS上传文件的项目

3 哦对了别忘了在微信公众平台配置白名单如图 白名单1


## 小程序上后台返回的id是19位的Int类型，由于JS的数字精度问题自动将后两位归零所以要改正
参考文档：https://blog.csdn.net/qq1019648709/article/details/84919500

1 首先在utils的request.js增加 》 dataType:'text',然后将在获得res的结果的时候进行过滤
handleResData(res)


## 小程序wxs的引用，由于小程序是渲染层和展示层无法直接渲染。如列表接口获得数据中的值
## 需要与某个数组进行毕竟对比并将id相同的值在数组中名称取出。
1首先要在utils中定义一个wxs文件如handleResData.wxs,然后在其中进行定义一个方法，如果getStatus()
方法然后在要要用的页面渲染
<wxs src="../../utils/pcsFileter.wxs" module="pcsFileter" />
                        数组       获得值
{{pcsFileter.getStatus(typeList, item.caseType)}}









