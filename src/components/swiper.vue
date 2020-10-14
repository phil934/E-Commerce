<template>
  <div>
    <swiper :options="swiperOption">
      <swiper-slide class="swiper-slide" v-for="(item,index) in slide" :key="index">
        Slide {{item}}
      </swiper-slide>
      <div class="swiper-pagination" slot="pagination"></div>
    </swiper>
  </div>
</template>

<script>
import 'swiper/swiper-bundle.css'
import { Swiper, SwiperSlide } from 'vue-awesome-swiper'
export default {
  components: {
    Swiper,
    SwiperSlide
  },
  data () {
    return {
      slide: [1, 2, 3, 4, 5],
      swiperOption: {
        direction: 'vertical',
        pagination: '.swiper-pagination',
        loop: true
      }
    }
  }
}
</script>

<style>
.swiper-slide {
  text-align: center;
  height: 4rem;
  /* background-color: #e5017d; */
}
</style>
