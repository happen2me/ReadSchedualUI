// pages/plans/plans.js
const app = getApp()
var toshow = "";
var plan1 = {
  planID: 0,
  DateStart: "2018-1-24",
  DateEnd: "2018-11-24",
  BookName: "The Man Who Changed China",
  Process: 100,
  total: 500,
  backgroundColor: randDarkColor(),
  coverUrl: ""
};
var plan2 = {
  planID: 1,
  DateStart: '2018-04-17',
  DateEnd: '2018-7-17',
  BookName: "1984",
  Process: 400,
  total: 450,
  backgroundColor: randDarkColor(),
  coverUrl: ""
};
var plan3 = {
  planID: 2,
  DateStart: '2018-02-17',
  DateEnd: '2018-5-17',
  BookName: "Animal Farm",
  Process: 0,
  total: 450,
  backgroundColor: randDarkColor(),
  coverUrl: ""
};

Page({

  /**
   * 页面的初始数据
   */
  data: {
    //article将用来存储towxml数据
    article: {},
    planList:
    [
      plan1,
      plan2,
      plan3
    ]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    const _ts = this;

    var that = this;
    wx.request({
      url: 'https://492580066.fkten.xyz/weapp/Plan/getPlanList/oieeV5P3MUvnf3k1lUw5C2NQ1yHw',
      success(result){
        that.setData({planList: that.data.planList.concat(result.data)});
        console.log(result.data);
      }
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
  
  }
})

/* A function to generate random dark color*/
function randDarkColor() {
  var lum = -0.25;
  var hex = String('#' + Math.random().toString(16).slice(2, 8).toUpperCase()).replace(/[^0-9a-f]/gi, '');
  if (hex.length < 6) {
    hex = hex[0] + hex[0] + hex[1] + hex[1] + hex[2] + hex[2];
  }
  var rgb = "#",
    c, i;
  for (i = 0; i < 3; i++) {
    c = parseInt(hex.substr(i * 2, 2), 16);
    c = Math.round(Math.min(Math.max(0, c + (c * lum)), 255)).toString(16);
    rgb += ("00" + c).substr(c.length);
  }
  return rgb;
}