// pages/image/image.js
Page({
    data: {
        imagePath: ''
    },
    choosepic(){
        // 微信给的api：弹出选择图片
        wx.chooseImage({
          success: (res)=>{
            const path = res.tempFilePaths[0]
            this.setData({
                imagePath: path
            })
          }
        })
    },
    imageload(){
      console.log('图片加载完成');
    }
})