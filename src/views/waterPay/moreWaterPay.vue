<template>
  <div class="moreWaterPay">
    <myHeader msg="moreWaterPay"></myHeader>
    <div class="waterPay-bottom">
      <div>
        <div>
          <p>
            <span>张三</span>(<span>10001010</span>)
          </p>
          <p>
            <span>账户编号：</span><span>10001010</span>
          </p>
          <p>
            <span>水表数量：</span><span>1</span><span>支</span> 
          </p>
          <p>
            <span>余额：</span><span>0</span><span>元</span>
          </p>
          <p>
            <span>欠费总额</span>(<span>10001010</span>)
          </p>
        </div>
        <div>
          <div>
            <span @click='pay()'>充值</span>
          </div>
          <div>
            <span>缴费</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import myHeader from '@/components/myHeader.vue'
export default {
  name: 'moreWaterPay',
  components:{
    myHeader
  },
  data(){
    return {
      
    }
  },
  mounted() {
    
  },
  methods: {
    pay(){
      this.$common.takeChange()
    }
  },
}
</script>

<style lang='less'>
.moreWaterPay{
  height: 100%;
  .waterPay-bottom{
    height: 70%;
  }
}
</style>