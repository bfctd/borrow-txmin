Page({
  data: { // 参与页面渲染的数据
  },
  bindGetUserInfo(e) {
    if (e.detail.userInfo) {
      //用户按了允许授权按钮
      wx.setStorageSync('userInfo', e.detail.userInfo)
      wx.navigateTo({
        url: '../one/one',
      })
    }
  },
  onLoad() {
    // 获取用户是否授权昵称等
    wx.getSetting({
      success: res => {
        if (res.authSetting['scope.userInfo']) {
          wx.getUserInfo({
            success: res => {
              //用户已经授权过
              wx.setStorageSync('userInfo', res.userInfo)
            }
          })
        }
      }
    })
    // 如果分享人和打开该页面的人  wxid相同
    if(1===1){
      wx.redirectTo({
        url: '../invite_index/invite_index',
      })
    }
  },
  // 转发
  onShareAppMessage(res) {
    return {
      title: '一个很牛逼的小程序',
      path: '/pages/index/index?invite=false',
      imageUrl: ''
    }
  }
})