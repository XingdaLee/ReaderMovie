// movies.js
var app = getApp();
Page({

  /**
   * 页面的初始数据
   */
  data: {
    inTheaters: {},
    comingSoon: {},
    top250: {}
  },
  processDoubanData: function (respData, settingKey) {
    var movies = [];
    for (var idx in respData.subjects) {
      var subject = respData.subjects[idx];
      var tempObj = {};
      if (subject.title.length > 6) {
        tempObj.title = subject.title.substring(0, 6) + "...";
      };
      tempObj.average = subject.rating.average;
      tempObj.coverageUrl = subject.images.large;
      tempObj.movieId = subject.id;
      movies.push(tempObj);
    };
    // 把数据封装成每个对象里都有个movies，在模板传递数据的时候使用...展开，可以让下面的模板以movies为数据源进行渲染
    var readData = {};
    readData[settingKey] = {
      movies: movies
    };
    this.setData(readData);
  },
  getMovieListData: function (url, settingKey) {
    var that = this;
    wx.request({
      url: url,
      data: {
        start: 0,
        count: 3
      },
      header: {
        'content-type': 'json'
      },
      method: 'GET',
      success: function (res) {
        console.log(res);
        that.processDoubanData(res.data, settingKey);
      },
      fail: function () {

      },
      complete: function () {

      }
    });
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    // header坑:'content-type': 'application/json'改为xml,或者直接指定为'content-type': 'json'
    // 正在热映
    var inTheatersUrl = app.globalData.g_doubanBase + "v2/movie/in_theaters";
    // 即将上映
    var comingSoonUrl = app.globalData.g_doubanBase + "v2/movie/coming_soon";
    // top250
    var top250Url = app.globalData.g_doubanBase + "v2/movie/top250";
    this.getMovieListData(inTheatersUrl, "inTheaters");
    this.getMovieListData(comingSoonUrl, "comingSoon");
    this.getMovieListData(top250Url, "top250");
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})