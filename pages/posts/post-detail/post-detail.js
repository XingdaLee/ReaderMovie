// post-detail.js
var postsDetailData = require('../../../data/posts-data.js');
var app = getApp();
Page({

  /**
   * 页面的初始数据
   */
  data: {
    isPlayingMusic: false
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
  // 点击分享
  onShare: function () {
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
  // 根据PostsId查询到相关的音乐数据
  searchByPostsId: function (postsId) {
    for (var i = 0; i < postsDetailData.post_contentList.length; i++) {
      var obj = postsDetailData.post_contentList[i];
      if (obj.postId == postsId) {
        return obj.music;
      }
    }
  },
  // 播放音乐,不能用本地音乐文件，图片也是
  onMusic: function (event) {
    var postsId = event.currentTarget.dataset.postId;
    var musicObj = this.searchByPostsId(postsId);
    var isPlayingMusic = this.data.isPlayingMusic;
    if (isPlayingMusic) {
      wx.pauseBackgroundAudio();
      this.setData({
        isPlayingMusic: false
      });
    } else {
      wx.playBackgroundAudio({
        dataUrl: musicObj.url,
        title: musicObj.title,
        coverImgUrl: musicObj
      });
      this.setData({
        isPlayingMusic: true
      });
    };
  },
  setMusicStatus: function (postId) {
    // 因为下面是写在function中的，this已丢失，必须加that（事件驱动的方式）
    var that = this;
    // 启动的时候全局监听音乐是否播放
    wx.onBackgroundAudioPlay(function () {
      that.setData({
        isPlayingMusic: true
      });
      app.globalData.g_isPlsyingMusic = true;
      app.globalData.g_currentMusicPostsId = postId;
    });
    wx.onBackgroundAudioPause(function () {
      that.setData({
        isPlayingMusic: false
      });
      app.globalData.g_isPlsyingMusic = false;
      app.globalData.g_currentMusicPostsId = null;
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    // 获取父页面传递过来的id
    var postId = options.id;
    //设置全局变量的原因是:防止音乐播放后，返回列表页后，再次点击详情后，音乐的图标没有根据当前播放状态显示正确的图标
    if (app.globalData.g_isPlsyingMusic && postId == app.globalData.g_currentMusicPostsId) {
      this.setData({
        isPlayingMusic: true
      });
    };
    this.setMusicStatus(postId);
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
        return
      };
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