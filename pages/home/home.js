// pages/home/home.js
Page({
    data: {
        titles: ['新品',"精选","热卖"]
    },
    btnclick(){
        console.log('btnclick');
    },
    touchstart(){
        console.log('touchstart');
    },
    touchmove(){
        console.log('touchmove');
    },
    touchend(){
        console.log('touchend');
    },
    tap(){
        console.log('tap');
    },
    longpress(){
        console.log('longpress');
    },
    btntouchevent(event){
        console.log("---------",event);
    },
    itemclick(event){
        console.log(event);
        const dataset = event.currentTarget.dataset
        const index = dataset.index
        const item = dataset.item
        console.log(index,item);
    },
    captureview1(){
        console.log('captureview1');
    },
    bindview1(){
        console.log('bindview1');
    },
    captureview2(){
        console.log('captureview2');
    },
    bindview2(){
        console.log('bindview2');
    },
    captureview3(){
        console.log('captureview3');
    },
    bindview3(){
        console.log('bindview3');
    }
})