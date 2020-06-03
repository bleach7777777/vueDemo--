<template>
<div class="detail h">
  <el-container class="h">
  <leftAside></leftAside>
  <el-main>
  <el-breadcrumb class="el-breadcrumb" separator="/">
  <el-breadcrumb-item class="el-breadcrumb-item" :to="{ path: '/' }">首页</el-breadcrumb-item>
  <el-breadcrumb-item class="el-breadcrumb-item">正文</el-breadcrumb-item>
  </el-breadcrumb>
  <div class="content"  v-for="list in newList" :key="list.id">
    <p>
      <span>作者：{{ list.author }}</span>
      <span>发表日期：{{ list.date }}</span>
      <span>浏览量：{{ list.count }}</span>
    </p>
    <p>当前文章的id：{{ id }}</p>
    <p>正文：{{ list.content }}</p>
    <p>评论：{{ list.comment }}</p>
  </div>
  <div class="addComment">
    <el-form>
      <el-form-item>
        <el-input placeholder="请输入评论" class="comment-text" type="textarea" :rows="3" v-model="zan"></el-input>
        <el-button type="text" size="medium" @click="addComment">发布</el-button>
      </el-form-item>
    </el-form>
  </div>
  </el-main>
</el-container>
</div>
</template>

<script>
import leftAside from '@/components/aside'
import axios from 'axios';
export default {
  name: 'Detail',
  components: {
    leftAside
  },
  data(){
    return{
      newList: {},
      id: this.$route.params.id,
      zan:''
    }
  },
  mounted(){
    this.getNewList()
  },
  methods:{
    getNewList(){
      //axios.get('newList').then(res => {
        //let data = res.data
        //this.newList = data.lists
        //console.log(this.$route)
      //})
      this.newList = JSON.parse(this.$route.params.nlist)
      console.log(this.$route)
    },
    addComment(){
      alert(this.zan)
      this.zan = ''
    }
  }

}
</script>

<style scoped>
.el-breadcrumb{
  height: 30px;
  width: 100%;
  margin: 10px 10px 10px 10px;
  border-bottom: 1px solid lightgray;
}
.el-breadcrumb-item{
  margin: 7px 3px 7px 3px;
  font-size: 16px;
}
.content{
  border-bottom: 1px solid lightgray;
}
</style>
