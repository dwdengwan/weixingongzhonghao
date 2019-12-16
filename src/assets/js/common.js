//公共js封装
import Vue from 'vue';

const common = {
  //是否为空判断
  isNull: function (text) {
    console.log(text);
    if (undefined == text) {
      return true;
    }
    if (text.length == "" || text.length == 0) {
      return true;
    }
    return false;
  }
};

Vue.prototype.$common = common;


export default {};
