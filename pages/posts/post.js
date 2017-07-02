Page({

  /**
   * 页面的初始数据
   */
  data: {
    post_contentList: []
  },
  process: function (val) {
    console.log(val);
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var post_content = [
      {
        isShowAuthor: true,
        date: "2016年7月",
        title: "阳澄湖大闸蟹上市啦",
        post_image: "../../images/post/xie.jpg",
        author_image: "/images/avatar/girl.png",
        content: "中华绒螯蟹是一种经济蟹类，又称河蟹、毛蟹、清水蟹、大闸蟹。为中国久负盛名的美食。其螯足用于取食和抗敌，掌部内外缘密生绒毛，绒螯蟹因此而得名。杂食性动物，鱼、虾、螺、蚌、蠕虫、蚯蚓、昆虫及其幼虫等均可作为大闸蟹的动物性饵料。",
        collect_num: "1000+",
        view_num: "5236"
      },
      {
        isShowAuthor: true,
        date: "2016年7月",
        title: "奔驰汽车销售指南",
        post_image: "../../images/post/car.jpg",
        author_image: "/images/avatar/girl.png",
        content: "奔驰，德国汽车品牌，被认为是世界上最成功的高档汽车品牌之一，其完美的技术水平、过硬的质量标准、推陈出新的创新能力、以及一系列经典轿跑车款式令人称道。奔驰三叉星已成为世界上最著名的汽车及品牌标志之一。",
        collect_num: "1000+",
        view_num: "5236"
      }
    ];
    this.setData({
      post_contentList: post_content
    });
    this.process('test process Func');
    console.log("onLoad")
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
    console.log("onReady")
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
    console.log("onShow")
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {
    console.log("onHide")
  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {
    console.log("onUnload")
  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {
    console.log("onPullDownRefresh")
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {
    console.log("onReachBottom")
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {
    console.log("onShareAppMessage")
  }
})