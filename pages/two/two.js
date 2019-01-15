Page({
  data: { // 参与页面渲染的数据
    urldata: {
      money: '',
      need: ''
    },
    userInfo: {}
  },
  clickMe() {
    // console.log(msg)
  },
  onLoad(url) {
    // console.log(this.route)
    this.setData({
      'urldata.money': url.money,
      'urldata.need': url.need,
      'urldata.wish': url.wish
    })
    wx.getStorage({
      key: 'userInfo',
      success: (res) => {
        this.setData({
          userInfo: res.data
        })
      }
    })
  },
  // 转发
  onShareAppMessage(res) {
    var w = this.data.urldata.wish
    var m = this.data.urldata.money
    var n = this.data.userInfo.nickName
    var a = this.data.userInfo.avatarUrl
    var params = '?invite=true' + '&wish=' + w + '&money=' + m + '&nickName=' + n + '&avatarUrl=' + a
    return {
      title: '【道德绑架】你的好友想找你借钱，你借不借？',
      path: '/pages/invite_index/invite_index' + params,
      imageUrl: ''
    }
  }
})