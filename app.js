App({
  onLaunch: function () {
    //网络请求
  },
  onShow: function (options) {
    // console.log(options);
    wx.getUserInfo({
      success: function(res){
        // console.log(res);
      }
    })
  },
  onHide: function () {
    
  },
  onError: function (msg) {
    
  },
  //全局保存的变量，在home里也可以拿到
  globalData: {
      name:"ivozoe",
      age:22
  }
})
