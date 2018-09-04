//index.js
//获取应用实例
import {fetch} from '../../utils/util.js'
const app = getApp()

Page({
  data: {
    imgUrls: [],
    mainContent:[],
    indicatorDots: true,
    autoplay: false,
    interval: 3000,
    duration: 500,
    isLoading:false
  },
  //事件处理函数
 
  onLoad: function () {
    this.getData();
    this.getContent();
  },
  getData(){ 
    this.setData({
        isLoading: true
      }
    )
    fetch.get('/swiper').then(res=>{
      this.setData({
        imgUrls:res.data,
        isLoading:false
      })
    }).catch(err=>{
      this.setData({
        isLoading:false
      })
    })
  },
  getContent(){
    fetch.get('/category/books').then(res=>{
      console.log(res),
      this.setData({
        mainContent:res.data
      })
    })
  },
  jumpBook(event){
    const id = event.currentTarget.dataset.id
    wx.navigateTo({
      url: `/pages/details/details?id=${id}`,
    })
    
  }
})
