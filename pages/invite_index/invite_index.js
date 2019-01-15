Page({
  data:{
    getshareurldata:{ // 分享连接上过来的数据
      money:'',
      wish:'',
      nickName:'',
      avatarUrl:''
    },
    payBox:true // 不显示支付弹框
  },
  pay(){
    this.setData({
      'payBox':false
    })
  },
  /*********************************************************/
  onLoad(e) {
    console.log(e.money)
    this.setData({
      'getshareurldata.wish': e.wish,
      'getshareurldata.money': e.money,
      'getshareurldata.nickName': e.nickName,
      'getshareurldata.avatarUrl': e.avatarUrl
    })
  },
  // 转发
  onShareAppMessage(res) {
    console.log(res)
    if(res.from === "button"){
      var w = this.data.getshareurldata.wish
      var m = this.data.getshareurldata.money
      var n = this.data.getshareurldata.nickName
      var a = this.data.getshareurldata.avatarUrl
      var params = '?invite=true' + '&wish=' + w + '&money=' + m + '&nickName=' + n + '&avatarUrl=' + a
      return {
        title: '【道德绑架】你的好友想找你借钱，你借不借？',
        path: '/pages/invite_index/invite_index' + params,
        imageUrl: ''
      }
    }else{
      return {
        title: '一个很牛逼的小程序',
        path: '/pages/index/index?invite=false',
        imageUrl: ''
      }
    }
  }
})