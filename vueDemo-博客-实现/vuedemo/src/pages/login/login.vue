<template>
  <div>
    <el-form ref="loginform" v-if="!islogin" :model="loginform" status-icon :rules="rules" class="login">
      <h2>用户登录</h2>
      <el-form-item label="用户名" prop="name">
        <el-input v-model="loginform.name"></el-input>
      </el-form-item>
      <el-form-item label="密码" prop="password">
        <el-input type="password" v-model="loginform.password"></el-input>
      </el-form-item>
      <el-form-item>
        <el-checkbox v-model="loginform.checked">记住密码</el-checkbox>
      </el-form-item>
      <el-form-item>
        <el-button @click="onsubmit('loginform')">登陆</el-button>
        <router-link to="/register">注册</router-link> | <router-link to="/">返回首页</router-link>
      </el-form-item>
    </el-form>

    <el-card v-if="islogin" class="notlogin">
      <div>
        <router-link to="/">已登录，返回首页</router-link> | <router-link to="/login" @click.native="unsubmit()">退出</router-link>
      </div>
    </el-card>
  </div>
</template>

<script>
import {setStore,getStore} from '@/utils/mUtils'
export default {
  name:'Login',
  data(){
    return{
      islogin:false,
      loginform:{
        name:'',
        password:'',
        checked:false
      },
      rules:{
        name:[
          {
            required:true,
            message:'请输入用户名'
          }
        ],
        password:[
          {
            required:true,
            message:'请输入密码'
          }
        ]
      }
    }
  },
  mounted(){
    this.islogin = getStore('islogin')
  },
  methods:{
    onsubmit(formname){
      this.$refs[formname].validate((valid) => {
        if(valid){
          setStore('islogin',true)
          this.loginform.name = ''
          this.loginform.password = ''
          this.$router.push({path:'/'})
        }else{
          return false
        }
      })
    },
    unsubmit(){
      this.islogin=false
      setStore('islogin',false)
    }
  }
}
</script>

<style scoped>
.login{
  width: 300px;
  height: 300px;
  margin: auto;
  padding: 50px;
  border: 1px solid lightgray;
}
h2{
  text-align: center;
}
</style>
