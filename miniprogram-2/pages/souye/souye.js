// pages/souye/souye.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    TeahousePic:'http://img.zx123.cn/Resources/zx123cn/uploadfile/2015/0516/e05d6df60f4b9e3bc13dc8b74bf4ff60.jpg',
    imgUrl:[]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var that = this
    var picList = []
    picList.push("http://image.chawenyi.com/201904/2019040364716_b.jpg")
    picList.push("http://image.suning.cn/uimg/sop/commodity/113581741812086093648839_x.jpg")
    picList.push("http://img.zcool.cn/community/018ef45632ea256ac7259e0f9af769.png")
    picList.push("http://img.zcool.cn/community/019bd25632ea256ac7259e0f8f6840.png")
    var imgUrl =[]
    imgUrl.push("http://image.chawenyi.com/201904/2019041654428_b.jpg")
    imgUrl.push("http://image.chawenyi.com/201904/2019040471929_b.jpg")
    imgUrl.push("http://image.chawenyi.com/201904/2019040364716_b.jpg")
    imgUrl.push("http://image.chawenyi.com/201904/2019040264724_b.jpg")
    that.setData({
      picList: picList,
      imgUrl:imgUrl
    })
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

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

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

  },
  previewImg: function (e) {
    var currentUrl = e.currentTarget.dataset.currenturl
    var previewUrls = e.currentTarget.dataset.previewurl
    wx.previewImage({
      current: currentUrl, //必须是http图片，本地图片无效
      urls: previewUrls, //必须是http图片，本地图片无效
    })
  },


})