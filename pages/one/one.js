Page({
  data: {
    checkbox: {
      value: true,
      name: '当然需要'
    },
    urldata: {
      wish:'',
      money: '',
      need: 'false'
    },
    userInfo: {}
  },
  // 多选框
  checkboxChange(e) {
    console.log('checkbox发生change事件，携带value值为：', e.detail.value)
    this.setData({
      'urldata.need': e.detail.value[0] ? 'true' : 'false'
    })
  },
  // 输入框心愿
  inputedit(e) {
    console.log('心愿：' + e.detail.value)
    this.setData({
      'urldata.wish': e.detail.value
    })
  },
  // 输入框钱
  inputedit2(e) {
    console.log('钱：' + e.detail.value)
    this.setData({
      'urldata.money': e.detail.value,
    })
  },
  // 跳转到分享页面
  gosharePage() {
    console.log(this.data.urldata.money)
    // 发送ajax请求到开发者服务器，说明该用户已经转发了，生成了订单
    // wx.request({
    //   url: 'test.php',
    //   data: {
    //     x: '',
    //     y: ''
    //   },
    //   success(res) {
    //     wx.navigateTo({
    //       url: '../two/two?money=' + this.data.urldata.money + '&need=' + this.data.urldata.need + '&wish=' + this.data.urldata.wish,
    //     })
    //   },
    //   fail(){
        
    //   }
    // })
    wx.navigateTo({
      url: '../two/two?money=' + this.data.urldata.money + '&need=' + this.data.urldata.need + '&wish=' + this.data.urldata.wish,
    })
  },
  /*******************************************************************/
  onLoad(options) {
    // 在页面加载时进行一些初始化。
    wx.getStorage({
      key: 'userInfo',
      success: (res) => {
        this.setData({
          userInfo: res.data
        })
        console.log(this.data.userInfo)
      }
    })
  },
  onReady() {
    // Do something when page ready.当页面准备好时做一些事情
    // 页面初次渲染完成
  },
  onShow() {
    // Do something when page show.
  },
  onHide() {
    // Do something when page hide.
  },
  onUnload() {
    // Do something when page close.
  },
  onPullDownRefresh() {
    // Do something when pull down.
  },
  onReachBottom() {
    // Do something when page reach bottom.
  },
  onShareAppMessage() {
    // return custom share data when user share.
  },
  onPageScroll() {
    // Do something when page scroll
  },
  onResize() {
    // Do something when page resize
  },
  onTabItemTap(item) {
    console.log(item.index)
    console.log(item.pagePath)
    console.log(item.text)
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