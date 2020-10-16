<template>
  <div>
    <div class="goods-info">
      <div class="goods-image">
        <img v-lazy="goodsImage" width="90%">
      </div>
      <div class="goods-name">{{goodsName}}</div>
      <div class="goods-price">¥{{goodsPrice | fliterMoney}}</div>
    </div>
  </div>
</template>

<script>
import { toMoney } from '../../js/fliter/MoneyFilter'
export default {
  props: {
    goodsImage: {
      type: String,
      required: true
    },
    goodsName: {
      type: String,
      required: true
    },
    goodsPrice: {
      type: Number,
      required: true
    }
  },
  filters: {
    fliterMoney (money) {
      return toMoney(money)
    }
  }
}
</script>

<style>
.goods-name {
  font-size: 14px;
  padding: 0 8px 8px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
.goods-price {
  font-size: 14px;
  padding: 0 8px;
  color: #e5017d;
}
</style>
