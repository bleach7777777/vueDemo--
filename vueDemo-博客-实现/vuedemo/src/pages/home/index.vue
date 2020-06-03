<template>
<div class="home h">
  <el-container class="h">
    <left-side></left-side>
    <el-main>
      <el-row :gutter="21">
        <el-col :span="18">
          <el-carousel :interval="4000" type="card" height="200px">
            <el-carousel-item v-for="item in 4" :key="item">
              <p class="el-carousel-text">{{ item }}</p>
              </el-carousel-item>
            </el-carousel>
            <div class="newList">
              <h2>最新文章</h2>
              <ul>
                <li v-for="list in newList" :key="list.id">
                  <p class="newList-title"><router-link :to="{name:'Detail', params:{id:list.id,nlist:JSON.stringify(list)}}">{{ list.title}}</router-link></p>
                  <p class="el-icon-date newList-date">{{ list.date }}</p>
                  <p class="newList-desc">{{ list.desc }}</p>
                </li>
              </ul>
            </div>
            <el-pagination background layout="prev, pager, next" :total="newListCount" @current-change="handleCurrentChange"></el-pagination>
        </el-col>
        <el-col :span="6">
            <h3>下午好，欢迎来到博客</h3>
            <div class="search">
              <el-form>
              <el-input class="search-input" placeholder="请输入要查询的关键字" v-model="searchMsg"></el-input>
              <el-button icon="el-icon-search" plain @click="searchAction"></el-button>
            </el-form>
            </div>
            <div>
              <h3>热评文章</h3>
              <ul class="hotList">
                <li v-for="hotList in hotLists" :key="hotList.id"><router-link :to="{name:'Detail', params:{id:hotList.id,nlist:JSON.stringify(hotList)}}">{{ hotList.title }}</router-link></li>
              </ul>
            </div>
            <div>
              <h3>热门标签</h3>
              <span class="hotTags" v-for="hotTag in hotTags" :key="hotTag.id" :style={color:hotTag.color}>{{ hotTag.text }}</span>
            </div>
        </el-col>
      </el-row>
    </el-main>
  </el-container>
</div>
</template>

<script>
import leftSide from '@/components/aside.vue'
import axios from 'axios'
import mockdata from '@/common/mockdata'
export default {
  name:'Home',
  data(){
    return{
      newList: [],
      newListCount: 0,
      searchMsg: '',
      hotLists: [],
      hotTags: []
    }
  },
  components:{
    leftSide
  },
  mounted() {
    this.getNewList()
    this.getHotList()
    this.getHotTags()
  },
  methods: {
    getNewList(){
      axios.get('newList').then(res => {
        let data = res.data
        this.newList = data.lists
        this.newListCount = data.total
      })
    },
    handleCurrentChange(val){
        this.getNewList()
      },
    searchAction(){
      alert(this.searchMsg)
    },
    getHotList(){
      axios.get('hotLists').then(res => {
        let data = res.data
        this.hotLists = data.lists
      })
    },
    getHotTags(){
      axios.get('hotTags').then(res => {
        let data = res.data
        this.hotTags = data.lists
      })
    }
  }

}
</script>

<style scoped>
.el-carousel__item{
  background-color: #a9b6c9;
  text-align: center;
}
.el-carousel-text {
    color: white;
    font-size: 14px;
    opacity: 0.75;
    line-height: 200px;
    margin: 0;
  }

  .newList-title{
    color: black;
    font-size: 17px;
  }
  .newList-date{
    color: darkgray;
    font-size: 15px;
    margin-top: 0;
  }
  .newList-desc{
    color: darkgray;
    font-size: 15px;
    margin-top: 0;
  }
  .newList li{
    border-bottom: 1px dotted darkgray;
  }

  .search-input{
    width: 200px;
  }
  .hotList li{
    margin-bottom: 10px;
  }
  .hotTags{
    margin: 0 10px 10px 0; /* 从上边距开始沿着顺时针方向 */
    display: inline-block;
  }
</style>
