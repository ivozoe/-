App({
    // 小程序初始化完成时执行
  onLaunch: function () {
      console.log("小程序初始化完成: onLaunch");
    // 异步调用
    // wx.getUserInfo({
    //   success:function(res){
    //       console.log(res);
    //   }
    // })
    setTimeout(function(){
        const err = new Error()
        throw err
    },3000)
  },
    //小程序界面显示出来后会执行的生命周期函数
  onShow: function (options) {
    console.log('小程序界面显示出来后会执行: onShow');
  },
    //界面被隐藏时会执行
  onHide: function () {
    console.log("界面被隐藏时会执行: onHide");
  },
    //小程序发生了一些错误会执行
  onError: function (msg) {
    console.log('小程序发生了一些错误会执行');
  }
})
