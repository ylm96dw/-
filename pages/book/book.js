// pages/book/book.js
import {fetch} from '../../utils/util.js'
const app =getApp();
Page({

  /**
   * 页面的初始数据
   */
  data: {
    //article将用来存储towxml数据
    article:{},
    titleId:"",
    title:"",
    bookId:"",
  },
  onLoad: function(options){
    this.setData({
      titleId:options.id,
    })  
    this.getData()  
  },
  getData(){
    fetch.get(`/article/${this.data.titleId}`).then(res=>{
      let data = app.towxml.toJson(res.data.article.content,'markdown');
      this.setData({
        article:data,
        title:res.data.title
      })
    })
  },
  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {
  
  }
})