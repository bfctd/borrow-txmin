// 小程序启动之后，在 app.js 定义的 App 实例的 onLaunch 回调会被执行:小程序启动之后 触发
App({
  onLaunch(option) {
    // 小程序启动之后 触发
    // console.log(option) 
    // {
    //   path: "pages/index/index" 
    //   query: {}
    //   scene: 1001 场景值
    // }
    // console.log(this.route)
    // wx.redirectTo({
    //   url: './pages/invite_index/invite_index',
    //   success(e){
    //     console.log('跳转成功')
    //   },
    //   fail(){
    //     console.log('跳转失败')
    //   }
    // })
    
    console.log('主页面')
  }
})