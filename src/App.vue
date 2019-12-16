<template>
  <div id="app">
    <!-- <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link> |
      <router-link to='/login'>Login</router-link>
    </div> -->
    <van-nav-bar 
      title="标题" 
      left-text="返回" 
      left-arrow 
      @click-left="onClickLeft"
      @click-right="onClickRight">
      <van-icon name="search" slot="right" />
    </van-nav-bar>
    <router-view />
  </div>
</template>

<script>
import { NavBar,Toast } from 'vant';
export default {
  data(){
    return{

    }
  },
  methods: {
    onClickLeft() {
      Toast.success('返回');
      history.back(-1)
    },
    onClickRight() {
      Toast.fail('按钮');
    }
  },
  mounted() {
    
  },
}
</script>

<style lang="less">
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  height: 100%;
  .van-nav-bar{
    height: 1.5rem;
    line-height: 1.5rem;
    background: #1989fa;
    .van-nav-bar__left{
      font-size: 0.5rem;
      color:#fff;
      .van-icon-arrow-left{
        font-size: 0.5rem;
        color:#fff;
      }
      .van-nav-bar__text{
        color:#fff;
      }
    }
    .van-nav-bar__title{
      font-size: 0.5rem;
      color:#fff;
    }
    .van-nav-bar__right{
      .van-icon-search{
        font-size: 0.5rem;
        color:#fff;
      }
    }
  }
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
