// welcome.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
  
  },
  ontap:function() {
    // 父子关系跳转，最多五级,父页面被隐藏，调用的是onHide
    // wx.navigateTo({
    //   url: '../posts/post',
    // });
    // 父页面被直接关闭，调用的是onUnload
    wx.redirectTo({
      url: '../posts/post',
    });
    console.log('onTap');
  },
  onTextTap:function() {
    console.log('onTextTap');
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
  
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
    console.log('welcome onHide');
  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {
    console.log('welcome onUnload');
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