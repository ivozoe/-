// pages/wxml/wxml.js
Page({
    data: {
        message: "ivozoe",
        firstname: "张",
        lastname: "三",
        age: 22,
        time: new Date().toLocaleString(),
        isActive:false,
        isshow: true,
        score: 47,
        movies: ["星际穿越","蜘蛛侠","钢铁侠","雷神","复仇者联盟"]
    },
    onLoad: function (options) {
        setInterval(() =>{
            this.setData({
                time: new Date().toLocaleString()
            })
        },1000)
    },
    changecolor(){
        this.setData({
            isActive: !this.data.isActive
        })
    },
    changescore(){
        this.setData({
            score: this.data.score + 5
        })
    }
})