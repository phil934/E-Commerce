<template>
  <div>
    <!-- location-bar -->
    <div class="location-bar">
      <van-row :gutter="5">
        <van-col span="3">
          <img :src="locationIcon" width="80%" class="location-icon" />
        </van-col>
        <van-col span="15">
          <input type="text" class="location-input" placeholder="查找">
        </van-col>
        <van-col span="6" class="location-colBtn">
          <van-button size="mini" class="location-btn">Sreach</van-button>
        </van-col>
      </van-row>
    </div>
    <!-- swiper-area -->
    <div class="swiper-area">
      <van-swipe :autoplay="2000">
        <van-swipe-item v-for="(image,index) in bannerPicArray" :key="index">
          <img v-lazy="image.image" width="100%" />
        </van-swipe-item>
      </van-swipe>
    </div>
    <!-- type-bar -->
    <div class="type-bar">
      <div v-for="(cate,index) in category" :key="index">
        <img v-lazy="cate.image" width="90%" />
        <span>{{cate.mallCategoryName}}</span>
      </div>
    </div>
    <div class="type-bar">
      <div v-for="(cate,index) in category" :key="index">
        <img v-lazy="cate.image" width="90%" />
        <span>{{cate.mallCategoryName}}</span>
      </div>
    </div>
    <!-- ad banner area -->
    <div class="ad-banner">
      <img v-lazy="adBanner.PICTURE_ADDRESS" width="100%">
    </div>
    <!-- recommend goods area -->
    <div class="recommend-area">
      <div class="recommend-titel">
        商品推荐
      </div>
      <div class="recommend-body">
        <swiper :options="SwiperOption" class="swiper-container">
          <swiper-slide v-for="(goods,index) in recommendGoods" :key="index">
            <div class="recommend-item">
              <img v-lazy="goods.image" width="80%" />
              <p>{{goods.goodsName}}</p>
              <p>¥{{goods.price}}(¥{{goods.mallPrice}})</p>
            </div>
          </swiper-slide>
          <div class="swiper-pagination" slot="pagination"></div>
        </swiper>
      </div>
    </div>
    <!-- <swiperTemplate></swiperTemplate> -->
  </div>
</template>

<script>
import 'swiper/css/swiper.css'
import { Swiper, SwiperSlide } from 'vue-awesome-swiper'
// import swiperTemplate from './swiper'
export default {
  components: {
    Swiper,
    SwiperSlide
    // swiperTemplate
  },
  data () {
    return {
      msg: 'Shopping Mall',
      locationIcon: require('../assets/images/icon/location.png'),
      category: [], // 分类数组
      adBanner: [], // 广告
      bannerPicArray: [], // 轮播图地址
      recommendGoods: [], // 推荐商品
      SwiperOption: {
        // loop: true,
        pagination: {
          el: '.swiper-pagination',
          clickable: true
        }
        // direction: 'vertical'
      }
    }
  },
  created () {
    /* 屏幕适配设置 */
    var htmlWidth = document.documentElement.clientWidth || document.body.clientWidth
    if (htmlWidth > 750) {
      htmlWidth = 750
    }
    var htmlDom = document.getElementsByTagName('html')[0]
    htmlDom.style.fontSize = htmlWidth / 20 + 'px'
    /* 获取分类MOCK数据 */
    this.axios({
      url: '/parameter/search',
      method: 'get'
    }).then(res => {
      if (res.data.status === 200) {
        this.category = res.data.data.data.category
        this.adBanner = res.data.data.data.advertesPicture
        this.bannerPicArray = res.data.data.data.slides
        this.recommendGoods = res.data.data.data.recommend // 推荐商品
        // console.log(this.recommendGoods)
      }
    }).catch((err) => {
      console.log(err)
    })
  }
}
</script>

<style scoped>
.location-bar {
  width: 100%;
  height: 2.2rem;
  background-color: #e5017d;
  line-height: 2.2rem;
  overflow: hidden;
}
.location-input {
  width: 100%;
  height: 1.2rem;
  border-top: 0px;
  border-left: 0px;
  border-right: 0px;
  border-bottom: 1px solid #fff;
  background-color: #e5017d;
  color: #fff;
  font-size: 14px;
}
.location-icon {
  height: 1.8rem;
  padding-top: 0.2rem;
  padding-left: 0.2rem;
}
.location-btn {
  background-color: #fff;
  border-radius: 0.6rem;
  font-size: 0.4rem;
}
.location-colBtn {
  height: 2.2rem;
  display: flex;
  justify-content: center;
  align-items: center;
}
.swiper-area {
  max-height: 20rem;
  clear: both;
  overflow: hidden;
}
.type-bar {
  background-color: #fff;
  /* font-size: 14px; */
  display: flex;
  /* 横向排列 */
  flex-direction: row;
  flex-wrap: nowrap;
  margin: 0 0.3rem 0.3rem 0.3rem;
  border-radius: 0.3rem;
}
.type-bar div {
  padding: 0.3rem;
  font-size: 12px;
  text-align: center;
}
.recommend-area {
  background-color: #fff;
  margin-top: 0.3rem;
}
.recommend-titel {
  /* margin-left: 0.3rem; */
  font-size: 16px;
  text-align: left;
  padding: 0.2rem;
  border-bottom: 1px solid #eee;
  color: #e5017d;
}
.recommend-body {
  border-bottom: 1px solid #eee;
}

.recommend-item {
  width: 99%;
  border-right: 1px solid #eee;
  font-size: 12px;
  text-align: center;
}
</style>
