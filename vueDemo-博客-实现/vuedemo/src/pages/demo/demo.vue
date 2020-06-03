<template>
  <div class="demo h">
    <el-container class="h">
    <leftaside></leftaside>
    <el-main>
    <el-breadcrumb separator="/" class="el-breadcrumb">
    <el-breadcrumb-item :to="{ path: '/' }" class="el-breadcrumb-item">首页</el-breadcrumb-item>
    <el-breadcrumb-item class="el-breadcrumb-item">demo</el-breadcrumb-item>
    </el-breadcrumb>
    <div class="content1">
      <h2>element-ui demos</h2>
      <a href="javascript:;" @click="loading" v-loading.fullscreen.lock="fullscreenLoading">loading</a>
      <a href="javascript:;" @click="toast">toast</a>
      <a href="javascript:;" @click="messagebox">messagebox</a>
      <a href="javascript:;" @click="nodification">nodification</a>
      <a href="javascript:;" @click="dialog">dialog</a>
    </div>
    <div class="content2">
      <h2>my demos</h2>
      <a v-txtDemo="{ color: 'red', fontsize: '18px' }">通过自定义指令让我变红</a>
      <a>{{ filterTest | filterA}}-过滤器-小写变大写</a>
    </div>
    <div class="content3">
      <h2>vuex demos</h2>
      <p>当前数量：{{ count }}</p>
      <p>当前数量（加2）：{{ countt }}</p>
      <el-button @click="$store.commit('add')">加1</el-button>
      <el-button @click="$store.commit('diff')">减1</el-button>
      <el-button @click="$store.dispatch('asyncAdd')">异步加1</el-button>
      <el-button @click="$store.dispatch('asyncDiff')">异步减1</el-button>
      <el-button @click="addd">加2</el-button>
      <el-button @click="asyncAddd">异步加2</el-button>
    </div>
    <div class="content4">
      <h2>components</h2>
      <hello my-msg='abc'></hello>
      <testc @hey="parentFn"></testc>
      <slotc><span slot="test_slot">---额外的slot内容</span></slotc>
    </div>
    <el-dialog>
  title="提示"
  :visible.sync="dialogVisible"
  width="30%">
  <span>这是一段信息</span>
  <span slot="footer" class="dialog-footer">
    <el-button @click="dialogVisible = false">取 消</el-button>
    <el-button type="primary" @click="dialogVisible = false">确 定</el-button>
  </span>
</el-dialog>
    </el-main>
    </el-container>
  </div>
</template>

<script>
import leftaside from '@/components/aside'
import { resolve } from 'url';
export default {
  name:'Demo',
  data(){
    return{
      fullscreenLoading:false,
      dialogVisible:false,
      filterTest:'hello vue'
  }
},
  components:{
    leftaside,
    hello:{
      props:['myMsg'],
      template:'<p>这是hello组件，此消息：{{myMsg}} 来源于props</p>'
    },
    testc:{
      template:'<p>这是testc <button @click="fn">按钮</button></p>',
      methods:{
        fn(){
          this.$emit('hey','这是子组件传递给父组件的数据')
        }
      }
    },
    slotc:{
      template:'<p>这是slotc组件，测试插槽用<slot name="test_slot"></slot></p>'
    }
  },
  methods:{
    loading(){
       this.fullscreenLoading = true;
        setTimeout(() => {
          this.fullscreenLoading = false;
        }, 2000);
    },
    toast(){
       this.$message({
          showClose: true,
          message: '这是一条消息提示'
        });
    },
    messagebox(){
       this.$alert('这是一段内容', '标题名称', {
          confirmButtonText: '确定',
          callback: action => {
            this.$message({
              type: 'info',
              message: `action: ${ action }`
            });
          }
        });
    },
    nodification(){
      const h = this.$createElement;

        this.$notify({
          title: '标题名称',
          message: h('i', { style: 'color: teal'}, '这是提示文案这是提示文案这是提示文案这是提示文案这是提示文案这是提示文案这是提示文案这是提示文案')
        });
    },
    dialog(){
      this.dialogVisible=true
    },
    parentFn(data){
      alert('父组件'+data)
    },
    addd(){
      this.$store.commit('addd')
    },
    asyncAddd(){
      this.$store.dispatch('asyncAddd')
    }
    },
    directives:{
      txtDemo(el,binding){
        el.style.color=binding.value.color
        el.style.fontsize=binding.value.fontsize
      }
    },
    filters:{
      filterA(value){
        if(!value) return ''
        value = value.toString()
        return value.toUpperCase()
      }
    },
    computed: {
    count () {
      return this.$store.state.count
    },
    countt(){
      return this.$store.state.countt
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
.content1{
  margin-top: 50px;
}
.content1 a{
  display: inline-block;
  padding: 10px 10px;
  margin: 10px 10px 10px 10px;
  background-color: lightgray;
}
.content2 a{
  display: inline-block;
  padding: 10px 10px;
  margin: 10px 10px 10px 10px;
  background-color: lightgray;
}
</style>
