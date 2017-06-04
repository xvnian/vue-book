import axios from 'axios'
import jsonp from 'jsonp'


axios.interceptors.response.use(function (response) {
  return response.data
}, function (error) {
  return Promise.reject(error);
})

// 获取首页数据
let getMainData = () => {
  return axios.get('/xiaomi/hs/v3/channel/418')
}

// 获取书籍数据
let getBookData = (fiction_id) => {
  return axios.get('/xiaomi/hs/v0/android/fiction/book/' + fiction_id)
}

// 获取书籍指定章节内容
let getContentUrl = (fiction_id, chapter_id) => {
  return axios.get(`/xiaomi/drm/v0/fiction/link?fiction_id=${fiction_id}&chapter_id=${chapter_id}&format=jsonp`)
}

let getContentData = (fiction_id, chapter_id, callback) => {
  getContentUrl(fiction_id, chapter_id).then(res => {
    let url = res.url
    url = url.replace('http://html.read.duokan.com','/duokan')
    axios.get(url).then(resource => {
      callback(resource)
    })
  })
}

// 获取书籍目录 catalog
let getCatalogData = (fiction_id) => {
  return axios.get('/xiaomi/store/v0/fiction/detail/' + fiction_id)
}

export {
  getMainData,
  getBookData,
  getContentUrl,
  getContentData,
  getCatalogData
}
