// pages/books/books.js

const app = getApp();
const request = require("../../utils/requests");
var star = require("../../utils/star");

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
    //var book = JSON.parse(text);
    var books = { "count": 8, "start": 3, "total": 8730, "books": [{ "rating": { "max": 10, "numRaters": 102, "average": "8.5", "min": 0 }, "subtitle": "新日语能力考试考前对策", "author": ["佐佐木仁子", "松本纪子"], "pubdate": "2010-10", "tags": [{ "count": 53, "name": "日语", "title": "日语" }, { "count": 45, "name": "N1", "title": "N1" }, { "count": 31, "name": "日语学习", "title": "日语学习" }, { "count": 16, "name": "日本語", "title": "日本語" }, { "count": 11, "name": "语言学习", "title": "语言学习" }, { "count": 11, "name": "日语教材", "title": "日语教材" }, { "count": 10, "name": "日本語學習", "title": "日本語學習" }, { "count": 6, "name": "词汇", "title": "词汇" }], "origin_title": "", "image": "https://img3.doubanio.com\/view\/subject\/m\/public\/s4640245.jpg", "binding": "平装", "translator": [], "catalog": "", "pages": "146", "images": { "small": "https://img3.doubanio.com\/view\/subject\/s\/public\/s4640245.jpg", "large": "https://img3.doubanio.com\/view\/subject\/l\/public\/s4640245.jpg", "medium": "https://img3.doubanio.com\/view\/subject\/m\/public\/s4640245.jpg" }, "alt": "https:\/\/book.douban.com\/subject\/5300685\/", "id": "5300685", "publisher": "世界图书出版公司", "isbn10": "7510027977", "isbn13": "9787510027970", "title": "N1词汇", "url": "https:\/\/api.douban.com\/v2\/book\/5300685", "alt_title": "", "author_intro": "佐佐木仁子，日本著名日语教学专家，1983年开始从事日语教学。曾任日语培训机构主任讲师。负责分析考题、开发教材等工作。\n\n    2001年留年任千叶大学，负责留学生日语教学。\n\n    主要著作有：“4周掌握日语能力考试（文字、词汇、语法）”（外研社，2010），“新出题基准·日语能力考试考前对策”系列2级（外研社，2007），“新标准对应日语能力考试复习与测试”（上海外教，2005）。\n    松本纪子，日本著名日语教学专家，1983年开始从事日语教学。曾任日语培训机构主任讲师，负责分析考题、开发教材等工作。1985年起经营语言学校。主要著作有：“新出题基准·日语能力考试考前对策”系列2级（外研社，2007）。", "summary": "《N1词汇:新日语能力考试考前对策》内容简介：茫茫题海中，你是否已然晕乎？忙忙碌碌中，你是否难得偷闲？满怀自信中，你是否只欠东风？看漫画、读例句，归类记考点用你看得懂的日语，体会细微语感，用你最熟悉的母语，理解贴切含义，考前6周起跑，带你轻松闯通关。", "series": { "id": "23240", "title": "新日语能力考试考前对策：N1" }, "price": "23.00元" }, { "rating": { "max": 10, "numRaters": 0, "average": "0.0", "min": 0 }, "subtitle": "日语", "author": ["李萍 编"], "pubdate": "2006-2", "tags": [], "origin_title": "", "image": "https://img3.doubanio.com\/view\/subject\/m\/public\/s6500813.jpg", "binding": "", "translator": [], "catalog": "前言标注说明    第一部分：常用单词及日常用语1.常用单词  (1)称谓  (2)数字  (3)时间  (4)年、月、日  (5)季节  (6)食品  (7)用餐  (8)交通工具2.日常用语  (1)问候  (2)介绍  (3)询问  (4)感谢  (5)道歉  (6)慰问  (7)邀请  (8)请求    第二部分：应急口语1.在旅途中  (1)在飞机场  (2)在飞机上  (3)在火车站  (4)在火车上  (5)乘轮船  (6)行李寄存、提取2.出入境时  (1)护照检查  (2)海关检查3.在街道上  (1)问路  (2)乘公共汽车  (3)乘出租车  (4)交通标志4.用餐  (1)订位  (2)点菜  (3)在餐桌上  (4)付账  (5)在快餐店5.住宿  (1)询问价格、订房  (2)看房  (3)要求服务  (4)结账退房6.电话用语  (1)找人  (2)咨询  (3)预约7.观光购物  (1)在商店  (2)询问价格、购物  (3)观光购票  (4)询问景点位置8.在邮局  (1)寄信或明信片  (2)寄邮包  (3)拍电报  (4)汇款9.在银行  (1)存／取款  (2)开户  (3)挂失  (4)信用卡  (5)支票  (6)转账  (7)兑换货币10.在医院  (1)预约  (2)挂号  (3)就诊  (4)付费  (5)取药11.遇到麻烦时  (1)迷路  (2)遭窃  (3)呼救  (4)在警察局  (5)语言不通    第三部分：附录1.所在国情况简介2.所在国节日简介3.所在国习俗简介", "pages": "248", "images": { "small": "https://img3.doubanio.com\/view\/subject\/s\/public\/s6500813.jpg", "large": "https://img3.doubanio.com\/view\/subject\/l\/public\/s6500813.jpg", "medium": "https://img3.doubanio.com\/view\/subject\/m\/public\/s6500813.jpg" }, "alt": "https:\/\/book.douban.com\/subject\/1803674\/", "id": "1803674", "publisher": "东南大学出版社", "isbn10": "7564102616", "isbn13": "9787564102616", "title": "日语", "url": "https:\/\/api.douban.com\/v2\/book\/1803674", "alt_title": "", "author_intro": "", "summary": "《临时急需一句话·日语(2009新版·第3版)》共分常用单词及日常用语、应急口语、日本国情况简介三大部分，并附有有关知识的介绍和应注意的事项等。《临时急需一句话·日语(2009新版·第3版)》所选内容全部是日常生活中的常用句子，内容实用性强、涉及面广、使用方面，每个例句按汉语、日语、汉语近似音、汉字谐音的顺序排列。\n《临时急需一句话·日语(2009新版·第3版)》不仅对赴日的读者提供应急、实用的帮助，对那些初学日语或在日资企业工作的读者掌握日常的日语会话也有使用价值。", "price": "7.00元" }, { "rating": { "max": 10, "numRaters": 4, "average": "0.0", "min": 0 }, "subtitle": "日语", "author": ["东南大学音像出版社"], "pubdate": "2006-09-16", "tags": [{ "count": 1, "name": "语言", "title": "语言" }], "origin_title": "", "image": "https://img1.doubanio.com\/f\/shire\/5522dd1f5b742d1e1394a17f44d590646b63871d\/pics\/book-default-lpic.gif", "binding": "", "translator": [], "catalog": "", "pages": "", "images": { "small": "https://img1.doubanio.com\/f\/shire\/5522dd1f5b742d1e1394a17f44d590646b63871d\/pics\/book-default-lpic.gif", "large": "https://img1.doubanio.com\/f\/shire\/5522dd1f5b742d1e1394a17f44d590646b63871d\/pics\/book-default-lpic.gif", "medium": "https://img1.doubanio.com\/f\/shire\/5522dd1f5b742d1e1394a17f44d590646b63871d\/pics\/book-default-lpic.gif" }, "alt": "https:\/\/book.douban.com\/subject\/1666105\/", "id": "1666105", "publisher": "东南大学音", "isbn10": "7888500722", "isbn13": "9787888500723", "title": "临时急需一句话", "url": "https:\/\/api.douban.com\/v2\/book\/1666105", "alt_title": "", "author_intro": "", "summary": "", "price": "14.0" }, { "rating": { "max": 10, "numRaters": 1, "average": "0.0", "min": 0 }, "subtitle": "日语", "pubdate": "1982-5", "image": "https://img1.doubanio.com\/view\/subject\/m\/public\/s4643967.jpg", "binding": "平装", "images": { "small": "https://img1.doubanio.com\/view\/subject\/s\/public\/s4643967.jpg", "large": "https://img1.doubanio.com\/view\/subject\/l\/public\/s4643967.jpg", "medium": "https://img1.doubanio.com\/view\/subject\/m\/public\/s4643967.jpg" }, "alt": "https:\/\/book.douban.com\/subject\/5988894\/", "id": "5988894", "title": "生物", "author_intro": "", "tags": [{ "count": 1, "name": "自然", "title": "自然" }, { "count": 1, "name": "日本", "title": "日本" }], "origin_title": "科普对照注释读物", "price": "0.5", "translator": ["叶广芩"], "catalog": "", "pages": "138", "publisher": "商务印书馆", "isbn10": "SH9017-1165", "alt_title": "科普对照注释读物", "url": "https:\/\/api.douban.com\/v2\/book\/5988894", "author": ["叶广芩"], "summary": "" }, { "rating": { "max": 10, "numRaters": 73, "average": "7.8", "min": 0 }, "subtitle": "我的第一本漫画图解日语书", "author": ["山野内扶"], "pubdate": "2011-8-1", "tags": [{ "count": 44, "name": "日语", "title": "日语" }, { "count": 23, "name": "语言", "title": "语言" }, { "count": 13, "name": "学习", "title": "学习" }, { "count": 11, "name": "绘本", "title": "绘本" }, { "count": 11, "name": "日语学习", "title": "日语学习" }, { "count": 9, "name": "语言学习", "title": "语言学习" }, { "count": 9, "name": "—日语学习—", "title": "—日语学习—" }, { "count": 8, "name": "日本", "title": "日本" }], "origin_title": "", "image": "https://img3.doubanio.com\/view\/subject\/m\/public\/s28316285.jpg", "binding": "平装", "translator": [], "catalog": "", "pages": "284", "images": { "small": "https://img3.doubanio.com\/view\/subject\/s\/public\/s28316285.jpg", "large": "https://img3.doubanio.com\/view\/subject\/l\/public\/s28316285.jpg", "medium": "https://img3.doubanio.com\/view\/subject\/m\/public\/s28316285.jpg" }, "alt": "https:\/\/book.douban.com\/subject\/6720471\/", "id": "6720471", "publisher": "吉林出版集团有限责任公司", "isbn10": "7546354935", "isbn13": "9787546354934", "title": "这样学日语最有效", "url": "https:\/\/api.douban.com\/v2\/book\/6720471", "alt_title": "", "author_intro": "", "summary": "这样学日语最有效：我的第一本漫画图解日语书，ISBN：9787546354934，作者：（日）山野内 扶 著，林勇哲 译", "price": "39.80元" }, { "rating": { "max": 10, "numRaters": 0, "average": "0.0", "min": 0 }, "subtitle": "日语", "author": [], "pubdate": "2010-1-1", "tags": [{ "count": 1, "name": "语言学习", "title": "语言学习" }, { "count": 1, "name": "日语学习", "title": "日语学习" }], "origin_title": "", "image": "https://img3.doubanio.com\/view\/subject\/m\/public\/s11290820.jpg", "binding": "平装", "translator": [], "catalog": "", "pages": "141", "images": { "small": "https://img3.doubanio.com\/view\/subject\/s\/public\/s11290820.jpg", "large": "https://img3.doubanio.com\/view\/subject\/l\/public\/s11290820.jpg", "medium": "https://img3.doubanio.com\/view\/subject\/m\/public\/s11290820.jpg" }, "alt": "https:\/\/book.douban.com\/subject\/4292800\/", "id": "4292800", "publisher": "北京航空航天大学出版社", "isbn10": "7811247615", "isbn13": "9787811247619", "title": "想说就说(日语)(内附光盘1张）", "url": "https:\/\/api.douban.com\/v2\/book\/4292800", "alt_title": "", "author_intro": "", "summary": "想说就说·日语，ISBN：9787811247619，作者：马曹冉，赵秀娟 编", "price": "18.80元" }, { "rating": { "max": 10, "numRaters": 73, "average": "8.9", "min": 0 }, "subtitle": "新日语能力考试考前对策", "author": ["佐佐木仁子", "松本纪子"], "pubdate": "2011-6", "tags": [{ "count": 36, "name": "日语", "title": "日语" }, { "count": 28, "name": "N1", "title": "N1" }, { "count": 14, "name": "日语学习", "title": "日语学习" }, { "count": 12, "name": "日本語", "title": "日本語" }, { "count": 5, "name": "日本語學習", "title": "日本語學習" }, { "count": 4, "name": "读解", "title": "读解" }, { "count": 3, "name": "日语教材", "title": "日语教材" }, { "count": 3, "name": "日语N1", "title": "日语N1" }], "origin_title": "", "image": "https://img3.doubanio.com\/view\/subject\/m\/public\/s22779511.jpg", "binding": "", "translator": [], "catalog": "", "pages": "119", "images": { "small": "https://img3.doubanio.com\/view\/subject\/s\/public\/s22779511.jpg", "large": "https://img3.doubanio.com\/view\/subject\/l\/public\/s22779511.jpg", "medium": "https://img3.doubanio.com\/view\/subject\/m\/public\/s22779511.jpg" }, "alt": "https:\/\/book.douban.com\/subject\/6434125\/", "id": "6434125", "publisher": "世界图书出版公司", "isbn10": "7510035007", "isbn13": "9787510035005", "title": "N1读解", "url": "https:\/\/api.douban.com\/v2\/book\/6434125", "alt_title": "", "author_intro": "", "summary": "《N1读解:新日语能力考试考前对策》是专为希望通过新“日语能力考试”N1的学习者编著的读解学习书。决心考取新“日语能力考试”N1级资格的朋友；已学完中级内容，并开始迈入高级阶段的朋友；想要看懂议论文的朋友。\n此书从1～2行的简短文章开始，努力帮助读者能逐渐看懂较长的文章；不仅提高信息检索和内容理解等方面的读解能力，还针对作为理解文章的基础的语法要点(接续词、指示代词、功能词等)加以解说，可以边巩固基础边深入学习；通过每周1次的小测验(实战问题)，可以确认自己的理解程度；对较难的句子附有英语、汉语、韩语的译文，可以用于自学。", "series": { "id": "23240", "title": "新日语能力考试考前对策：N1" }, "price": "16.80元" }, { "rating": { "max": 10, "numRaters": 1, "average": "0.0", "min": 0 }, "subtitle": "日语", "author": ["邓素娟\/\/徐阳"], "pubdate": "2011-8", "tags": [{ "count": 1, "name": "日本", "title": "日本" }], "origin_title": "", "image": "https://img3.doubanio.com\/view\/subject\/m\/public\/s8847623.jpg", "binding": "", "translator": [], "catalog": "", "pages": "147", "images": { "small": "https://img3.doubanio.com\/view\/subject\/s\/public\/s8847623.jpg", "large": "https://img3.doubanio.com\/view\/subject\/l\/public\/s8847623.jpg", "medium": "https://img3.doubanio.com\/view\/subject\/m\/public\/s8847623.jpg" }, "alt": "https:\/\/book.douban.com\/subject\/6853314\/", "id": "6853314", "publisher": "天津大学", "isbn10": "7561840438", "isbn13": "9787561840436", "title": "应急口语通", "url": "https:\/\/api.douban.com\/v2\/book\/6853314", "alt_title": "", "author_intro": "", "summary": "《应急口语通:西班牙语》从高频词汇入手，提高适应范围。修订后的版本依然是从高频词汇着手，以日常表达为切入点。除了传统的按照场景分类之外，修订后的版本还按照表述方式进行分类，让读者查找更为方便。《应急口语通:西班牙语》的编写者均为一线教师，在编写过程中征求了大量商务人士和旅游爱好者的意见，因此，选句精准，发音贴切。采用汉字和拼音注音的形式，零起点读者使用简单方便。", "price": "9.00元" }] }.books;
    for (var i = 0; i < books.length; ++i) {
      var book = books[i];
      var rating = book.rating;

      rating.block = star.get_star(rating.average);
    }
    this.setData({'books': books});
    var that = this;
    // if (options.tag) {
    //   that.setData({ bookTag: options.tag })
    // }
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
    /*
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
      that.setData({ bookList: that.data.bookList.concat(res.data.books), count: that.data.count + res.data.count });
      wx.hideToast();
    })
    */
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {
  
  }
})