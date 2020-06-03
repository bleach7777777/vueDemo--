<template>
  <div>
    <el-form ref="registerForm" class="regForm" :rules="rules" :model="registerForm">
      <h2>用户注册</h2>
      <el-form-item label="用户名" prop="name">
        <el-input v-model="registerForm.name"></el-input>
      </el-form-item>
      <el-form-item label="密码" prop="pwd">
        <el-input type="password" v-model="registerForm.pwd"></el-input>
      </el-form-item>
      <el-form-item label="确认密码"  prop="pwdd">
        <el-input type="password" v-model="registerForm.pwdd"></el-input>
      </el-form-item>
      <el-form-item label="邮箱"  prop="email">
        <el-input v-model="registerForm.email"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button @click="onsubmit('registerForm')">注册</el-button>
        <router-link to="/login">登录</router-link> | <router-link to="/">返回首页</router-link>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
export default {
  name:'Register',
  data(){
    var validatePwd = (rule,value,callback) => {
      if(value == ''){
        callback(new Error('请输入确认密码'))
      }else if(value != this.registerForm.pwd){
        callback(new Error('两次输入的密码不一致'))
      }else{
        callback
      }
    }
    return{
      registerForm:{
        name:'',
        pwd:'',
        pwdd:'',
        email:''
      },
      rules:{
        name:[
          {required:true,message:'请输入用户名'}
        ],
        pwd:[
          {required:true,message:'请输入密码'}
        ],
        pwdd:[
          {required:true,validator:validatePwd}
        ],
        email:[
          {required:true,message:'请输入邮箱'}
        ]
      }
    }
  },
  methods:{
    onsubmit(formname){
      this.$refs[formname].validate((valid) => {
        if(valid){
          alert('register')
        }else{
          return false
        }
      })
    }
  }
}
</script>

<style scoped>
.regForm{
  width: 500px;
  height: 500px;
  margin: auto;
  border: 1px solid lightgray;
  padding: 50px;
}
.regForm h2{
  text-align: center;
}
</style>
