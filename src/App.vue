<template>
  <div>
    <!-- <p class="hello">Hello vant</p> -->
    <router-view />
  </div>
</template>

<script>
import { Button } from 'vant'
export default {
  components: {
    [Button.name]: Button
  },
  created () {
    /* 屏幕适配设置 */
    var htmlWidth = document.documentElement.clientWidth || document.body.clientWidth
    if (htmlWidth > 750) {
      htmlWidth = 750
    }
    var htmlDom = document.getElementsByTagName('html')[0]
    htmlDom.style.fontSize = htmlWidth / 20 + 'px'
  }
}
</script>
<style>
/* rem = px/16 */
/* .test {
  width: 20rem;
  height: 10rem;
  background-color: bisque;
  text-align: center;
}
.hello {
  color: red;
  font-size: 1rem;
} */
</style>
