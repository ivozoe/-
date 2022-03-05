// components/w-tab-control/w-tab-control.js
Component({
    properties: {
        //设置外界传进来的titles
        titles:{
            type: Array,
            value: []
        }
    },
    data: {
        currentindex : 0
    },
    methods: {
        itemclick(event){
            //1.拿到点击事件的实时index
            const index = event.currentTarget.dataset.index
            //2.设置currentindex
            this.setData({
                currentindex: index
            })
            //3.组件向外传递事件
            this.triggerEvent("homeclick",{index,title: this.properties.titles[index]},{})
        }
    }
})
