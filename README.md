# ReaderMovie

## 小程序:
>1、pt：逻辑分辨率（和屏幕物理长度有关系，长度单位）

>2、px：像素点的个数与pt的关系，和屏幕尺寸没有关系，一个pt对应几个px，iphone6有2个px构成一个Pt

>3、以iphone6为原型做设计图才能做到所有设备自适应。不是所有的都是用rpx(比如字体大小)

>4、app.js文件不许加入Page（{}）。

>5、垂直的外边距margin用px，如果用rpx是不可控的，因为手机长度是不确定的。而。水平的要用rpx,因为手机的宽度是有限的。

>6、小程序是单向数据绑定，js向页面改变，页面不能直接改js(只能通过事件传递)

## CSS：

  margin:auto; 这个是上右下左的值都是自适应的

  vertical-align 属性设置元素的垂直对齐方式。如图片的位置

  letter-spacing 属性增加或减少字符间的空白（字符间距）。

