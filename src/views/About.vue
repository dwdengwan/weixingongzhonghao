<template>
  <div class="about">
    <h1>This is an about page</h1>
    <span>姓名:{{preson.name}}</span>
    <span>年龄:{{preson.age}}</span>
    <button @click="ageAdd()">+</button>
    <span>{{preson.num}}</span>
    <div>
      <table border='1'>
        <thead>
          <th>
            <input type="checkbox">
          </th>
          <th>姓名</th>
          <th>年龄</th>
        </thead>
        <tr>
          <td>
            <input type="checkbox">
          </td>
          <td>tom</td>
          <td>18</td>
        </tr>
        <tr>
          <td>
            <input type="checkbox">
          </td>
          <td>jack</td>
          <td>20</td>
        </tr>
        <tr>
          <td>
            <input type="checkbox" role='checkbox'>
          </td>
          <td>marry</td>
          <td>22</td>
        </tr>
      </table>
    </div>
  </div>
</template>

<script>
export default {
  name: 'home',
  data(){
    return {
      preson:{
        name:"",
        age:0,
        num:0,
      }
    }
  },
  mounted() {
    this.preson.name = '邓乐';
    this.preson.age = 23;
  },
  methods: {
    ageAdd(){
      this.preson.age ++;
      this.preson.num = parseInt(Math.random()*10); 
    }
  },
}
</script>

<style scoped>
.about{}
</style>

