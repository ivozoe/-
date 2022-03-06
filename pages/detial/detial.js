// pages/detial/detial.js
Page({
    /**
     * 生命周期函数--监听页面加载
     */
    onLoad: function (options) {
        console.log(options);
    },
    /**
     * 生命周期函数--监听页面卸载/页面退出
     */
    onUnload: function () {
        const pages = getCurrentPages()
        console.log(pages);
        const home = pages[pages.length - 2]
        home.setData({
            title: '呵呵呵'
        })
    },
    back(){
        wx.navigateBack({
          delta: 1,
        })
    }
})