Page({
  data: { // 参与页面渲染的数据
    logs: []
  },
  clickMe() {
    this.setData({
      msg: 'Hello World'
    })
    // wx.scanCode({
    //   success: (res) => {
    //     console.log(res)
    //   }
    // })
    // console.log(msg)
  },
  markertap(e) {
    console.log(e)
  },
  onLoad() {
    // 获取用户经纬度
    wx.getLocation({
      type: 'wgs84',
      success: (res) => {
        const latitude = res.latitude // 纬度
        const longitude = res.longitude // 经度
        console.log(latitude)
      }
    })
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