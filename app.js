App({
    globaltoken: {
        token: ''
    },
    onLaunch: function () {
        const token = wx.getStorageSync('token')
        if(token && token.length){
            //验证token有没有过期
            this.check_token(token)
        }else{
            //没有token就来执行获取新token
            this.login()
        }
        
    },
    check_token(token){
        console.log('执行验证token');
        //将token拼接在header传给服务器，验证token
        wx.request({
          url: 'http://123.207.32.32:3000/auth',
          method: "post",
          header: {
              token
          },
          success: (res) => {
              if(!res.data.errCode){
                  this.globaltoken.token = token
              }else{
                  this.login()
              }
          },
          fail: function(err){
              console.log(err);
          }
        })
    },
    login(){
        console.log('执行获取token');
        wx.login({
            success: (res) => {
                //先获取code
                const code = res.code
                //将code向服务器发送
                wx.request({
                    url: 'http://123.207.32.32:3000/login',
                    method: "post",
                    data: {
                        code
                    },
                    success: (res) => {
                        //将传回的token保存至本地
                        const token = res.data.token
                        this.globaltoken.token = token
                        wx.setStorageSync('token', token)
                    }
                })
            }
        })
    }
})
