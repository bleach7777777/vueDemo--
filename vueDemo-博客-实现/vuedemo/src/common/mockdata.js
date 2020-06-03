//mockjs 模拟数据

import Mock from 'mockjs'

const Random = Mock.Random

//模拟首页-最新文章列表
//Mock.mock('地址', 数据 })
const newList = Mock.mock('newList',getNewList)

function getNewList () {
  let lists = []
  for (let i = 0; i < 10; i++) {
    let tmpArr = {
      id: Random.increment(),
      author: Random.cname(),
      title: Random.ctitle(10, 30), //  Random.csentence( min, max )
      desc: Random.cparagraph(1, 3),
      date: Random.date('yyyy-MM-dd'),
      content: Random.cparagraph(),
      comment: Random.csentence(3,7),
      count: Random.integer(1,1000)
    }
    lists.push(tmpArr)
  }

  return {
    total: 100,
    lists: lists
  }
}

//模拟首页-热评文章列表
const hotLists = Mock.mock('hotLists', getHotList)

function getHotList () {
  let lists = []

  for (let i = 0; i < 5; i++) {
    let tmpArr = {
      id: Random.increment(),
      title: Random.ctitle(10, 20)
    }
    lists.push(tmpArr)
  }

  return {
    lists: lists
  }
}

// 模拟首页-标签列表
const hotTags = Mock.mock('hotTags', getHotTags)

function getHotTags () {
  let lists = []

  for (let i = 0; i < 50; i++) {
    let tmpArr = {
      id: Random.increment(),
      text: Random.word(4, 8),
      color: Random.color()
    }
    lists.push(tmpArr)
  }

  return {
    lists: lists
  }
}

export {newList,hotLists,hotTags}
