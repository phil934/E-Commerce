<template>
  <div>
    <div class="floor">
      <!-- floor title -->
      <div class="floor-title">{{floorTitle}}</div>
      <!-- floor is anomaly -->
      <div class="floor-anomaly">
        <div class="floor-one"><img v-lazy="floorOne_0.image" width="100%" /></div>
        <div>
          <div class="floor-two"><img v-lazy="floorOne_1.image" width="100%" /></div>
          <div><img v-lazy="floorOne_2.image" width="100%" /></div>
        </div>
      </div>
      <!-- floor is rule -->
      <div class="floor-rule">
        <div v-for="(item,index) in floorData.slice(3)" :key="index">
          <img v-lazy="item.image" width="100%" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    floorData: {
      type: Array,
      required: true
    },
    floorTitle: {
      type: String
    }
  },
  data () {
    return {
      floorOne_0: {},
      floorOne_1: {},
      floorOne_2: {}
    }
  },
  watch: {
    floorData: function (val) {
      // console.log(this.floorData)
      this.floorOne_0 = this.floorData[0]
      this.floorOne_1 = this.floorData[1]
      this.floorOne_2 = this.floorData[2]
    }
  }
}
</script>

<style>
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
.floor-title {
  text-align: center;
  font-size: 14px;
  height: 1.8rem;
  line-height: 1.8rem;
}
</style>
