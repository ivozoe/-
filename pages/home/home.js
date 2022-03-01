// pages/home/home.js
//可以通过getApp()拿到 “ 在app.js通过App({})创建的 ” 实例
const app = getApp()
// console.log(app.globalData.name);
// console.log(app.globalData.age);
Page({
     // -------------2.初始化一些数据----------------
    data: {
        list:[]
    },
    // -------------1.监听页面的生命周期函数----------------
    //页面被加载出来时
    onLoad: function (options) {
        console.log('onload');
        //发送网络请求
        wx.request({
          url: 'http://152.136.185.210:7878/api/hy66/recommend',
          success: (res)=>{
              const data = res.data.data.list
              this.setData({
                  list: data
              })
          }
        })
    },
    //页面初次渲染完成时
    onReady: function () {
        console.log('onready');
    },
    //页面显示出来时执行
    onShow: function () {
        console.log('onshow');
    },
    //当页面隐藏起来时执行
    onHide: function () {
        console.log('onhide');
    },
    onUnload: function () {

    },
    onPullDownRefresh: function () {

    },
    onReachBottom: function () {

    },
    onShareAppMessage: function () {

    },

     // -------------3.监听wxml中的事件，绑定的对应事件----------------
     viewclick(){
         console.log('哈哈哈被点击了');
     },
     // -------------4.监听其他事件----------------
     //监听页面滚动
     onPageScroll(event){
        //  console.log(event);
     },
     //监听滚动到底部
     onReachBottom(){
         console.log('滚动到底部');
     },
    //监听上拉刷新
    onPullDownRefresh(){
        console.log('上拉刷新');
    }
})