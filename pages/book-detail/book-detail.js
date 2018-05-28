// pages/detail/detail.js
const req = require("../../utils/requests.js");
var star = require("../../utils/star");
Page({

  /**
   * 页面的初始数据
   */
  data: {
    id:""
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var that = this;
    that.setData({id:options.id});
    wx.showToast({
      title: '加载中',
      icon: 'loading',
      duration: 10000
    })

    req.getBookById(that.data.id, function (res) {
      res.data = { "rating": { "max": 10, "numRaters": 102, "average": "8.5", "min": 0 }, "subtitle": "新日语能力考试考前对策", "author": ["佐佐木仁子", "松本纪子"], "pubdate": "2010-10", "tags": [{ "count": 53, "name": "日语", "title": "日语" }, { "count": 45, "name": "N1", "title": "N1" }, { "count": 31, "name": "日语学习", "title": "日语学习" }, { "count": 16, "name": "日本語", "title": "日本語" }, { "count": 11, "name": "语言学习", "title": "语言学习" }, { "count": 11, "name": "日语教材", "title": "日语教材" }, { "count": 10, "name": "日本語學習", "title": "日本語學習" }, { "count": 6, "name": "词汇", "title": "词汇" }], "origin_title": "", "image": "https://img3.doubanio.com\/view\/subject\/m\/public\/s4640245.jpg", "binding": "平装", "translator": [], "catalog": "", "pages": "146", "images": { "small": "https://img3.doubanio.com\/view\/subject\/s\/public\/s4640245.jpg", "large": "https://img3.doubanio.com\/view\/subject\/l\/public\/s4640245.jpg", "medium": "https://img3.doubanio.com\/view\/subject\/m\/public\/s4640245.jpg" }, "alt": "https:\/\/book.douban.com\/subject\/5300685\/", "id": "5300685", "publisher": "世界图书出版公司", "isbn10": "7510027977", "isbn13": "9787510027970", "title": "N1词汇", "url": "https:\/\/api.douban.com\/v2\/book\/5300685", "alt_title": "", "author_intro": "佐佐木仁子，日本著名日语教学专家，1983年开始从事日语教学。曾任日语培训机构主任讲师。负责分析考题、开发教材等工作。\n\n    2001年留年任千叶大学，负责留学生日语教学。\n\n    主要著作有：“4周掌握日语能力考试（文字、词汇、语法）”（外研社，2010），“新出题基准·日语能力考试考前对策”系列2级（外研社，2007），“新标准对应日语能力考试复习与测试”（上海外教，2005）。\n    松本纪子，日本著名日语教学专家，1983年开始从事日语教学。曾任日语培训机构主任讲师，负责分析考题、开发教材等工作。1985年起经营语言学校。主要著作有：“新出题基准·日语能力考试考前对策”系列2级（外研社，2007）。", "summary": "《N1词汇:新日语能力考试考前对策》内容简介：茫茫题海中，你是否已然晕乎？忙忙碌碌中，你是否难得偷闲？满怀自信中，你是否只欠东风？看漫画、读例句，归类记考点用你看得懂的日语，体会细微语感，用你最熟悉的母语，理解贴切含义，考前6周起跑，带你轻松闯通关。", "series": { "id": "23240", "title": "新日语能力考试考前对策：N1" }, "price": "23.00元" };
      var types = res.data;
      var rating = types.rating;
      rating.block = star.get_star(rating.average);

      res.data = types;
      console.log(res.data);

      that.setData({ bookInfo: res.data });
    });
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