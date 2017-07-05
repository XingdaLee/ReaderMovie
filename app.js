App({
  // 自定义了一个全局变量globalDta
  globalData: {
    g_isPlsyingMusic: false,
    g_currentMusicPostsId: null
  },
  /**
   * 当小程序初始化完成时，会触发 onLaunch（全局只触发一次）
   * 优先级1
   */
  onLaunch: function () {

  },

  /**
   * 当小程序启动，或从后台进入前台显示，会触发 onShow
   * 优先级2，从后台进入小程序
   */
  onShow: function (options) {

  },

  /**
   * 当小程序从前台进入后台，会触发 onHide
   * 按手机的home回到手机菜单页会触发,也就是后台运行
   */
  onHide: function () {
    // console.log('onHide');
  },

  /**
   * 当小程序发生脚本错误，或者 api 调用失败时，会触发 onError 并带上错误信息
   */
  onError: function (msg) {

  }
})
