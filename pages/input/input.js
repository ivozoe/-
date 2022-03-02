// pages/input/input.js
Page({
    data: {

    },
    inputevent(event){
        console.log("用户输入时：",event);
    },
    focusevent(event){
        console.log("获得焦点时：",event);
    },
    blurevent(event){
        console.log("失去焦点时：",event);
    }
})