# ReaderMovie

## 小程序:
>1、pt：逻辑分辨率（和屏幕物理长度有关系，长度单位）

>2、px：像素点的个数与pt的关系，和屏幕尺寸没有关系，一个pt对应几个px，iphone6有2个px构成一个Pt

>3、以iphone6为原型做设计图才能做到所有设备自适应。不是所有的都是用rpx(比如字体大小)

>4、app.js文件不许加入Page（{}）。

>5、垂直的外边距margin用px，如果用rpx是不可控的，因为手机长度是不确定的。而。水平的要用rpx,因为手机的宽度是有限的。

>6、小程序是单向数据绑定，js向页面改变，页面不能直接改js(只能通过事件传递)

>7、用bindtap时冒泡事件，点击子元素会先触发子在触发父元素事件.直接点击父元素事件不会触发子元素事件。（想阻止冒泡事件不要用bind只用catch）

会触发冒泡的事件列表：
   
    touchstart	手指触摸动作开始

    touchmove	手指触摸后移动

    touchcancel	手指触摸动作被打断，如来电提醒，弹窗

    touchend	手指触摸动作结束

    tap	手指触摸后马上离开

  longtap	手指触摸后，超过350ms再离开

  >8、模板不支持template的js引用。不是模块化而是模板化。页面用import css用@import。template是个占位符，不生成节点，无法添加事件

  >9、缓存一般建议使用同步的，需要解耦或者根据业务需要的来改为异步
  
  >10、在公共页面如：template中的image的路径，要使用绝对路径，如：/images/icon/chat.png。不能使用相对路径，如
  ../../../images/post-detail/share.png。因为调用template的页面的层级是不确定的，使用相对路径可能会找不到图片

  >11、navigateTo, redirectTo 只能打开非 tabBar 页面。
switchTab 只能打开 tabBar 页面。
reLaunch 可以打开任意页面。
页面底部的 tabBar 由页面决定，即只要是定义为 tabBar 的页面，底部都有 tabBar。
调用页面路由带的参数可以在目标页面的onLoad中获取。

>12、豆瓣API的获取:http://api.douban.com/v2/movie/subject/1764796 subject后面的id，随便点击一个电影直接看url。文档地址：https://developers.douban.com/wiki/?title=movie_v2#subject 只能使用Required Scope为basic的API

>13、wx.request中header坑:'content-type': 'application/json'改为xml,或者直接指定为'content-type': 'json'

>14、四种数据传递方式:全局变量 本地缓存 URL 类似于angular的广播事件传递
## CSS：

  margin:auto; 这个是上右下左的值都是自适应的

  vertical-align 属性设置元素的垂直对齐方式。如图片的位置

  letter-spacing 属性增加或减少字符间的空白（字符间距）。

  z-index 属性设置元素的堆叠顺序。拥有更高堆叠顺序的元素总是会处于堆叠顺序较低的元素的前面。

  opacity 属性设置元素的不透明级别(默认是1)

  经典的居中方式：

    width: 102rpx;
    height: 110rpx;
    position: absolute;
    left: 50%;
    margin-left: -51rpx;
    top:108rpx;
    opacity: 0.6;

  包裹的元素左右居中

  .inner-container {
    margin: 0 auto 20rpx;
  }
  
  数字一般颜色#666 #333
  

