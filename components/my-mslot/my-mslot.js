// components/my-mslot/my-mslot.js
Component({
    // 定义页面传入的属性：properties
    properties:{
        title: {
            type: String,
            value: ""
        }
    },
    // 定义组件内初始化数据data
    data: {
        message: 22
    },
    // 定义组件内部函数
    methods:{
        foo(){

        }
    },
    // 定义组件的配置选项
    options: {
        multipleSlots: true
    },
    // 外界给组件传入额外的样式
    externalClasses: ['title'],
    // 监听properties/data的改变
    observers: {
        message: function(newval){
            console.log(newval);
        }
    },
    // 组件中监听生命周期的函数
    //1.监听所在页面的生命周期函数
    pageLifetimes:{
        show:function(){
            console.log('监听组件所在页面显示出来');
        },
        hide: function(){
            console.log('监听组件所在页面隐藏起来');
        },
        resize: function(){
            console.log('监听页面尺寸的变化');
        }
    },
    // 2.监听组件本身的生命周期
    lifetimes: {
        created:function(){
            console.log('组件被创建出来');
        },
        attached: function(){
            console.log('组件被添加到页面中');
        },
        ready: function(){
            console.log('组件被渲染出来');
        },
        moved: function(){
            console.log('组件被移动到另外一个节点');
        },
        detached:function(){
            console.log('组件被移除掉');
        }
    }
})
