// pages/posts/movies/more-movie/more-movie.js
var utils = require("../../../../utils/util.js");
var app = getApp();
Page({

  /**
   * 页面的初始数据
   */
  data: {

  },
  // http请求的回调数据
  callBack: function (respData) {
    var movies = [];
    for (var idx in respData.subjects) {
      var subject = respData.subjects[idx];
      var tempObj = {};
      if (subject.title.length > 6) {
        tempObj.title = subject.title.substring(0, 6) + "...";
      } else {
        tempObj.title = subject.title;
      };
      tempObj.average = subject.rating.average;
      tempObj.coverageUrl = subject.images.large;
      tempObj.movieId = subject.id;
      tempObj.stars = utils.covertToStarsArray(subject.rating.stars);
      movies.push(tempObj);
    };
    debugger
    this.setData({
      movies: movies
    });
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var category = options.category;
    var urlparams = options.urlparams;
    var url = app.globalData.g_doubanBase + "v2/movie/" + urlparams;
    var params = {
      start: 0,
      count: 20
    };
    wx.setNavigationBarTitle({
      title: category
    });
    // 两种方法实现callBack 
    // utils.http(url, params, function (resp) {
    //   debugger
    // });
    utils.http(url, params, this.callBack);
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