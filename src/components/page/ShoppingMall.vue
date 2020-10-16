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
          <van-button size="mini" class="location-btn" @click="register">Sreach</van-button>
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
              <p>¥{{goods.price | tomoney}}(¥{{goods.mallPrice}})</p>
            </div>
          </swiper-slide>
          <div class="swiper-pagination" slot="pagination"></div>
        </swiper>
      </div>
    </div>
    <!-- floor one area -->
    <floorTemplate :floorData="floorDataOne" :floorTitle="floorName.floor1"></floorTemplate>
    <!-- floor two area -->
    <floorTemplate :floorData="floorDataTwo" :floorTitle="floorName.floor2"></floorTemplate>
    <!-- floor three area -->
    <floorTemplate :floorData="floorDataThree" :floorTitle="floorName.floor3"></floorTemplate>
    <!-- hot Goods area-->
    <div class="hot-area">
      <div class="hot-title">热卖商品</div>
      <div class="hot-goods">
        <van-list :finished="finished" :finished-text="finishedText" :offset="10" :loading-text="loadingText" :error-text="errorText" :immediate-check="false">
          <van-row :gutter="20">
            <van-col :span="12" v-for="(item,index) in hotGoods" :key="index">
              <goods-info-template :goodsImage="item.image" :goodsName="item.name" :goodsPrice="item.price"></goods-info-template>
            </van-col>
          </van-row>
        </van-list>
      </div>
    </div>
  </div>
</template>

<script>
import 'swiper/css/swiper.css'
import { Swiper, SwiperSlide } from 'vue-awesome-swiper'
// import swiperTemplate from './swiper'
import floorTemplate from '../component/FloorComponent'
import { toMoney } from '../../js/fliter/MoneyFilter'
import GoodsInfoTemplate from '../component/GoodsInfoComponets'
export default {
  components: {
    Swiper,
    SwiperSlide,
    floorTemplate,
    GoodsInfoTemplate
    // swiperTemplate
  },
  data () {
    return {
      finished: false,
      finishedText: '',
      loading: false,
      loadingText: '加载中...',
      errorText: '加载失败',
      msg: 'Shopping Mall',
      locationIcon: require('../../assets/images/icon/location.png'),
      category: [], // 分类数组
      adBanner: [], // 广告
      bannerPicArray: [], // 轮播图地址
      recommendGoods: [], // 推荐商品
      floorDataOne: [], // 楼层1
      floorName: {}, // 楼层标题
      floorDataTwo: [], // 楼层2
      floorDataThree: [], // 楼层3
      hotGoods: [], // 热卖商品
      SwiperOption: {
        // loop: true,
        pagination: {
          el: '.swiper-pagination',
          clickable: true
        }
      },
      page: 1,
      limit: 6
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
        this.floorDataOne = res.data.data.data.floor1 // 楼层1
        this.floorDataTwo = res.data.data.data.floor2 // 楼层2
        this.floorDataThree = res.data.data.data.floor3 // 楼层三
        this.floorName = res.data.data.data.floorName // 楼层标题
        this.hotGoods = res.data.data.data.hotGoods
      }
    }).catch((err) => {
      console.log(err)
    })
  },
  methods: {
    register () {
      this.$router.push('/register')
    }
  },
  filters: {
    tomoney (money) {
      return toMoney(money)
    }
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
  /* position: fixed;
  top: 0;
  left: 0; */
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
  max-height: 9rem;
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
.floor-anomaly {
  display: flex;
  flex-direction: row;
  background-color: #fff;
  border-bottom: 1px solid #ddd;
}
.floor-anomaly div {
  width: 10rem;
  box-sizing: border-box;
  -webkit-box-sizing: border-box;
}
.floor-one {
  border-right: 1px solid #ddd;
}
.floor-two {
  border-bottom: 1px solid #ddd;
}
.floor-rule {
  display: flex;
  flex-direction: row;
  background-color: #fff;
  flex-wrap: wrap;
  border-bottom: 1px solid #ddd;
}
.floor-rule div {
  width: 10rem;
  box-sizing: border-box;
  -webkit-box-sizing: border-box;
}
.floor-rule div:nth-child(odd) {
  border-right: 1px solid #ddd;
}
.hot-goods {
  height: 130rem;
  overflow: hidden;
  background-color: #fff;
  border-bottom: 1px solid #ddd;
}
.hot-area {
  text-align: center;
  font-size: 14px;
  height: 1.8rem;
  line-height: 1.8rem;
}
.hot-title {
  font-size: 16px;
  padding: 0.2rem;
  border-bottom: 1px solid #eee;
  text-align: left;
  border-bottom: 1px solid #ddd;
  color: #e5017d;
}
</style>
