Page({
  data: { // 参与页面渲染的数据
    urldata: {
      money: '',
      need: ''
    },
  },
  clickMe() {
    // console.log(msg)
  },
  onLoad(url) {
    // console.log(this.route)
    console.log(url.money)
    console.log(url.need)
    this.setData({
      'urldata.money': url.money,
      'urldata.need': url.need
    })
  },
  // 转发
  onShareAppMessage(res) {
    return {
      title: '【道德绑架】你的好友想找你借钱，你借不借？',
      path: '/pages/invite_index/invite_index?invite=true&money=' + this.data.urldata.money,
      imageUrl: ''
    }
  }
})