<template>
  <div class="myHeader">
    <div class="header-left">
      <img src="../assets/img/home/person.png" alt="">
      <h4>张三</h4>
    </div>
    <div class="header-right">
      <span>快速缴费通道</span>
    </div>
  </div>
</template>

<script>
export default {
  name: 'myHeader',
  props: {
    msg: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang='less'>
  .myHeader{
    display: flex;
    width: 100%;
    height: 30%;
    .header-left{
      padding: 3% 0 0 0;
      width:67%;
      background: pink;
      img{
        width: 30%;
        border-radius: 50%;
      }
      h4{
        padding:3% 0;
        margin: 0;
        font-size: 0.4rem;
      }
    }
    .header-right{
      width:33%;
      background: red;
      display:flex;
      justify-content:center;
      align-items:center;
      span{
        display: inline-block;
        border-bottom: 1px solid #fff;
        color:#fff;
      }
    }
  }
</style>
