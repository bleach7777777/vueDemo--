//异步1秒后加减1
export default{
  asyncAdd(store){
    setTimeout(()=>{
      store.commit('add')
    },1000)
  },
  asyncDiff(store){
    setTimeout(()=>{
      store.commit('diff')
    },1000)
  },
  asyncAddd(store){
    setTimeout(() => {
      store.commit('addd')
    }, 1000);
  }
}
