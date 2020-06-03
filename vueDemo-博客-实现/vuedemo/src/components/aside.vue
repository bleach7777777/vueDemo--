<template>
  <div class="h">
    <el-aside width="200px" class="aside h">
      <img :src="logoUrl" class="logo" alt="">
      <p>不忘初心，方得始终</p>
      <ul>
        <li v-for="nav in navs" :key="nav.text">
          <router-link :to="nav.link">{{nav.text}}</router-link>
        </li>
      </ul>
    </el-aside>
  </div>
</template>

<script>
export default {
  name:'Aside',
  data(){
    return {
      logoUrl:require('../assets/images/logo.jpg'),
      navs:[
        {
          text:'首页',
          link:'/'
        },
        {
          text:'登陆',
          link:'/login'
        },
        {
          text:'注册',
          link:'/register'
        },
        {
          text:'demo',
          link:'/demo'
        }
      ]
    }
  }
}
</script>

<style scoped>
.logo {
    width: 85px;
    height: 85px;
    display: block;
    background-color: #fff;
    border-radius: 50%;
    margin: 35px auto;
}
p{
  color: #fff;
  font-size: 17px;
  margin: 20px auto
}
.el-aside {
    text-align: center;
    background-color: #A9B6C9;
}
.el-aside ul {
    margin: 40px 25% 0;
}
.el-aside li {
    border-bottom: 1px dashed #d1f1e9;
    padding: 10px 0;
}
.el-aside li a {
    font-size: 16px;
    color: #fff;
    display: block;
}
.el-aside li a:hover {
    color: #333;
}
</style>
