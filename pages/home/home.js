// pages/home/home.js
Page({
    data: {
        name: 'IVOZOE',
        age: 22,
        students: [
            {id: 1, name: "张三", age: 18},
            {id: 2, name: "李四", age: 12},
            {id: 3, name: "王五", age: 15},
            {id: 4, name: "ivo", age: 22}
        ],
        counter: 0
    },
    addfun(){
        this.setData({
            counter: this.data.counter + 1
        })
    },
    subfun(){
        this.setData({
            counter: this.data.counter - 1
        })
    }
})