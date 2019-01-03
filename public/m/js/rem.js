// 页面一加载就设置好根元素的font-size
setNowFontSize ()
// 用函数封装设置的根元素
function setNowFontSize (){
    //  获取当前屏幕的宽度,用当前的屏幕宽度/(设计稿的宽度/设计稿的字体大小),这就是要为根元素设置的font-size
    // 在js中实现改变屏幕的大小就重新设置根元素的font-size
    // 通过变量储存号设计稿的宽度和设计稿的字体大小
    var designWidth = 750;
    var designFontSize = 200;
    // 1.获取当前屏幕的大小
    var windowWidth = document.documentElement.offsetWidth;
    // 求出根元素的font-size大小
    // 2.当前的屏幕宽度/(设计稿的宽度/设计稿的字体大小)
    var nowFontSize = windowWidth/(designWidth/designFontSize);
   //  判断,如果根元素的大小大于两百就不再变大
    if(nowFontSize>200){
        nowFontSize=200;
    }
    // 3.给当前的根元素设置font-size
    document.documentElement.style.fontSize = nowFontSize + "px";
}
// 一,通过事件获取当前屏幕的宽度
window.addEventListener('resize',setNowFontSize);