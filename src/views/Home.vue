<template>
  <div class="home">
    <div class='yh-content'>
      <div class="yh-title">
        <span>我的用水</span>
      </div>
      <!-- <div>
        <img src="../../src/assets/img/home/page.png" alt="">
        <span>vum界面</span>
      </div> -->
      <van-grid>
        <van-grid-item icon="photo-o" text="vum界面" />
      </van-grid>
    </div>
  </div>
</template>

<script>
import { Grid, GridItem } from 'vant';
export default {
  name: 'home',
  data() {
    return {
      needData: [],
    }
  },
  methods: {

  },
  mounted() {

  },
}
</script>
<style scoped lang="less">
.home {
  .yh-content {
    .yh-title {
      height: 2rem;
      line-height: 2rem;
      text-align: center;
      font-size: 0.8rem;
      color: #3cc51f;
      border-bottom: 1px solid #999;
    }
    .van-grid {
      width: 100%;
      .van-grid-item {
        width: 25%;
        border-right: 1px solid #999;
        border-bottom: 1px solid #999;
        .van-icon {
          font-size: 0.4rem;
        }
        .van-grid-item__content {
          .van-grid-item__text {
            font-size: 0.4rem;
          }
        }
      }
    }
  }
}
</style>
