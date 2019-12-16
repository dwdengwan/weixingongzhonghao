<template>
  <div class="moreWaterPay">
    <HelloWorld msg="moreWaterPay"></HelloWorld>
    <h1>
      水费查缴多户页面
    </h1>
    <button @click="takeChage()">+</button>
  </div>
</template>

<script>
import HelloWorld from '@/components/HelloWorld.vue'
export default {
  name: 'moreWaterPay',
  components:{
    HelloWorld
  },
  data(){
    return {
      
    }
  },
  mounted() {
    
  },
  methods: {
    takeChage(){
      this.$common.isNull('dyk')
      console.log(this.$common.isNull('dw'));
    }
  },
}
</script>

<style lang='less'>
.moreWaterPay{}
</style>