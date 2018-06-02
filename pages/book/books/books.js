// pages/books/books.js

const app = getApp();
const request = require("../../../utils/requests");
var star = require("../../../utils/star");

Page({

  /**
   * 页面的初始数据
   */
  data: {
    books: []
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var that = this;
    wx.request({
      url: 'https://bwg.nyanko.website/v2/book/search?q=%E8%AE%A1%E7%AE%97%E6%9C%BA&start=0&count=5',
      header: {
        "Content-Type": "json" 
      },
      success(result) {
        
        var books = result.data.books;
        for (var i = 0; i < books.length; ++i) {
          var book = books[i];
          var rating = book.rating;

          rating.block = star.get_star(rating.average);
        }
        that.setData({ books: result.data.books });
        console.log(books);
      }
    })
    
    if (options.tag) {
      that.setData({ bookTag: options.tag })
    }
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
    var that = this;
    console.log("渲染了");
    wx.showToast({
      title: '加载中',
      icon: 'loading',
      duration: 8000
    })
    if (that.data.bookTag) {
      request.searchBook({ tag: that.data.bookTag }, function (res) {
        var types = res.data.books;
        for (var i = 0; i < types.length; ++i) {
          var book = types[i];
          var rating = book.rating;

          rating.block = star.get_star(rating.average);
        }
        res.data.books = types;
        console.log(res.data.books);

        if (res.data.count == 0) { return; }
        that.setData({ bookList: res.data.books, count: that.data.count + res.data.count });
        console.log(res.data);
        wx.hideToast();
      })
    } else {
      wx.hideToast();
    }
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
    console.log("已到底部");
    var that = this;
    wx.showToast({
      title: '加载中',
      icon: 'loading',
      duration: 10000
    })

    var sobj = that.data.bookTag ? { tag: that.data.bookTag, start: that.data.count } : { q: that.data.value, start: that.data.count };
    request.searchBook(sobj, function (res) {
      var types = res.data.books;
      for (var i = 0; i < types.length; ++i) {
        var book = types[i];
        var rating = book.rating;

        rating.block = star.get_star(rating.average);
      }
      res.data.books = types;
      console.log(res.data.books);

      if (res.data.count == 0) { return; }
      that.setData({ books: that.data.books.concat(res.data.books), count: that.data.count + res.data.count });
      wx.hideToast();
    })
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {
  
  }
})