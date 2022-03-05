// pages/home/home.js
Page({
    data: {
        counter: 0,
        titles: ['衣服','裤子','鞋子']
    },
    homeadd(){
        this.setData({
            counter: this.data.counter + 1
        })
    },
    homeclick(event){
        // console.log(event);
    },
    btnclick(){
        //拿到组件
        const my_sel = this.selectComponent("#sel-class")
        console.log(my_sel);
        my_sel.addnum(20)
    }
})