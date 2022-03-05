// components/my-prop/my-prop.js
Component({
    /**
     * 组件的属性列表
     */
    properties: {
        title: {
            type: String,
            value: "默认标题",
            observer: function(newval,oldval){
                console.log(newval,oldval);
            }
        }
    },
    externalClasses:['titleclass']
})
