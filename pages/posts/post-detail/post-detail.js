// post-detail.js
var postsDetailData = require('../../../data/posts-data.js');
Page({

  /**
   * 页面的初始数据
   */
  data: {

  },
  // 获取缓存中的内容
  poststCollected: function () {
    return wx.getStorageSync("collected");
  },
  // 缓存收藏
  doTapSetStorage: function () {
    var status = this.poststCollected();
    if (status === '') {
      wx.setStorageSync('collected', true);
    } else {
      var tempStatus = !status;
      wx.setStorageSync('collected', tempStatus);
      this.setData({
        collected: tempStatus
      });
      wx.showToast({
        title: tempStatus ? '取消收藏成功' : '收藏成功',
        icon: 'success',
        duration: 2000
      });
    };
  },
  // modal
  tapSetStorage: function () {
    var that = this;
    wx.showModal({
      title: '提示',
      content: '是否收藏文章',
      confirmColor: 'red',
      success: function (res) {
        if (res.confirm) {
          that.doTapSetStorage();
        } else if (res.cancel) {
          console.log('用户点击取消')
        }
      }
    });
  },
  onShare:function() {
    wx.showActionSheet({
      itemList: ['分享到朋友圈', '分享到微信', '分享到微博'],
      success: function (res) {
        console.log(res.tapIndex)
      },
      fail: function (res) {
        console.log(res.errMsg)
      }
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    // 获取父页面传递过来的id
    var postId = options.id;
    var postDetailObj = {};
    for (var i = 0; i < postsDetailData.post_contentList.length; i++) {
      var obj = postsDetailData.post_contentList[i];
      if (obj.postId == postId) {
        this.setData({
          postDetailObj: obj
        });
        if (wx.getStorageSync("collected") === '') {
          this.setData({
            collected: true
          });
          return
        } else {
          this.setData({
            collected: wx.getStorageSync("collected")
          });
        };
      };
      return
    };
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