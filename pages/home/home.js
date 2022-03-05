// pages/home/home.js
import request from "../service/network.js"
Page({
    data: {

    },
    onLoad: function (options) {
        // 1.原生的方式发送网络请求
        this.get_data_origin()
        // 2.使用封装的request发送网络请求
        request({
            url: 'http://152.136.185.210:7878/api/hy66/recommend',
        }).then(res => {
            console.log(res);
        }).catch(err => {
            console.log(err);
        })
    },
    get_data_origin(){
        // 1.发送最简单的get网络请求
        // wx.request({
        //   url: 'http://152.136.185.210:7878/api/hy66/recommend',
        //   success: function(res){
        //       console.log(res);
        //   }
        // })
        // 2.get请求，但是携带参数
        // wx.request({
        //   url: 'http://152.136.185.210:7878/api/hy66/home/data',
        //   data: {
        //       type: "sell",
        //       page: 1
        //   },
        //   success: function(res){
        //           console.log(res);
        //       }
        // })
        // 2.post请求，但是携带参数
        // wx.request({
        //     url: 'http://httpbin.org/post',
        //     method: "post",
        //     data:{
        //         name: "ivozoe",
        //         age: 22
        //     },
        //     success: function(res){
        //         console.log(res);
        //     },
        //     fail: function(err){
        //         console.log(err);
        //     }
        //   })
    }
})