// pages/home/home.js
Page({
    showToast(){
        wx.showToast({
          title: '你好啊',
          duration:3000,
          icon: 'loading',
          mask: true,
          success: function(res){
            console.log(res);
          },
          fail: function(err){
            console.log(err);
          }
        })
    },
    showModal(){
        wx.showModal({
          title:'我是标题',
          content:'我是内容哈哈哈',
          cancelText: "退出",
        //   showCancel: false,
          cancelColor: "red",
        //   editable: true,
        //   placeholderText: "请输入..."
        success: function(res){
            console.log(res);
            if(res.cancel){
                console.log('用户点击了取消按钮');
            }
            if(res.confirm){
                console.log('用户点击了确定按钮');
                
            }
        }
        })
    },
    showLoading(){
        wx.showLoading({
          title: '加载中...',
          mask: true
        })
        // showLoading没有时间限制，需要手动结束
        setTimeout(() => {
            wx.hideLoading()
        },2000)
    },
    showActionSheet(){
        wx.showActionSheet({
          itemList: ['相册',"拍照"],
          itemColor: 'pink',
          success: function(res){
              console.log(res);
              switch(res.tapIndex){
                  case 0: 
                  console.log('相册');
                  break;
                  case 1:
                  console.log('拍照');
                  break;
              }
          }
        })
    },
    /**
     * 用户点击右上角分享
     */
    onShareAppMessage: function () {
      return {
        title: '你好啊ivozoe',
        path: '/pages/about/about.js',
        imageUrl: 'http://s3.mogucdn.com/mlcdn/c45406/170915_0a93207ci28kelh617k4hh62l65lb_640x960.jpg'
      }
    }
})