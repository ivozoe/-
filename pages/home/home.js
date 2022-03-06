// pages/home/home.js
Page({
    data: {
        title: '哈哈哈'
    },
    pushdetail(){
        wx.navigateTo({
          url: '/pages/detial/detial?text=你好啊！加油向未来',
        })
    }
})