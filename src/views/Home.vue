<template>
  <div class="home">
    <div class='yh-content' v-for='item in needData' :key="item.id">
      <div class="yh-title">
        <span>{{item.title}}</span>
      </div>
      <!-- <div>
        <img src="../../src/assets/img/home/page.png" alt="">
        <span>vum界面</span>
      </div> -->
      <van-grid>
        <van-grid-item 
          v-for='val in item.list' 
          :key='val.listId' 
          icon="photo-o" 
          :text="val.text"
          @click="goOther(val.path)" />
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
      needData: [
        {
          title:"我的用水",
          list:[
            {icon:"1",text:"VUM界面",path:"/",listId:0},
            {icon:"2",text:"水费查缴",path:"/moreWaterPay",listId:1},
            {icon:"3",text:"电子发票",path:"/moreWaterPay",listId:2},
            {icon:"4",text:"业务办理",path:"/moreWaterPay",listId:3},
            {icon:"5",text:"个人中心",path:"/moreWaterPay",listId:4},
            {icon:"6",text:"自助抄表",path:"/moreWaterPay",listId:5},
            {icon:"7",text:"共享抄表",path:"/moreWaterPay",listId:6},
          ],
          id:0
        },
        {
          title:"公共服务",
          list:[
            {icon:"1",text:"营业网点",path:"/moreWaterPay",listId:7},
            {icon:"2",text:"水价信息",path:"/moreWaterPay",listId:8},
            {icon:"3",text:"水质报告",path:"/moreWaterPay",listId:9},
            {icon:"4",text:"通知公告",path:"/moreWaterPay",listId:10},
            {icon:"5",text:"粤海水务",path:"/moreWaterPay",listId:11},
          ],
          id:1
        },
        {
          title:"更多精彩",
          list:[
            {icon:"1",text:"投书举报",path:"/moreWaterPay",listId:12},
            {icon:"2",text:"报修报漏",path:"/moreWaterPay",listId:13},
            {icon:"3",text:"智慧客服",path:"/moreWaterPay",listId:14},
            {icon:"4",text:"水管家",path:"/moreWaterPay",listId:15},
          ],
          id:2
        },
      ],
    }
  },
  methods: {
    goOther(path){
      console.log(path);
      if(path!=='/'){
        this.$router.push({path})
      }
    }
  },
  mounted() {

  },
}
</script>
<style lang="less">
.home {
  padding:3% 1%;
  background: #efefef;
  .yh-content {
    border:1px solid #999;
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
        // border:1px solid #999;
        border-right: 1px solid #999;
        border-bottom: 1px solid #999;
        .van-icon {
          font-size: 0.4rem;
        }
        .van-grid-item__content {
          .van-grid-item__text {
            font-size: 0.4rem !important;
          }
        }
      }
    }
  }
}
</style>
