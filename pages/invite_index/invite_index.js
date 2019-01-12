Page({
  data:{
    getshareurldata:{
      money:''
    }
  },
  onLoad(e) {
    console.log(e.money)
    this.setData({
      'getshareurldata.money':e.money
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