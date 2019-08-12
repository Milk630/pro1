$(function () {

    /*语法：$().load()*/
    /*备注1：默认发送的是GET请求，如果提交参数(对象)POST请求*/
    /*备注2：*/
    $("#foot").load("./header.html");
    $("#foot").load("./footer.html");
    /* 懒加载*/
    $("img").delayLoading({
        defaultImg: "./images/mask.png",  // 预加载前显示的图片
        errorImg: "",                      // 读取图片错误时替换图片(默认：与defaultImg一样)
        imgSrcAttr: "originalSrc",         // 记录图片路径的属性(默认：originalSrc，页面img的src属性也要替换为originalSrc)
        beforehand: 0,                     // 预先提前多少像素加载图片(默认：0)
        event: "scroll",                   // 触发加载图片事件(默认：scroll)
        duration: "normal",                // 三种预定淡出(入)速度之一的字符串("slow", "normal", or "fast")或表示动画时长的毫秒数值(如：1000),默认:"normal"
        container: window,                 // 对象加载的位置容器(默认：window)
        success: function (imgObj) { },    // 加载图片成功后的回调函数(默认：不执行任何操作)
        error: function (imgObj) { }       // 加载图片失败后的回调函数(默认：不执行任何操作)
    });
})