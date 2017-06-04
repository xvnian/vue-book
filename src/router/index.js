import Vue from 'vue'
import Router from 'vue-router'

import Main from '@/pages/main/Main'
import Book from '@/pages/book/Book'
import Reader from '@/pages/reader/Reader'
import Catalog from '@/pages/reader/Catalog'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      redirect: '/Main/0'
    },
    {
      path: '/Main/:tab',
      name: 'Main',
      component: Main
    },
    {
      path: '/Reader/:fiction_id/chapter_id/:chapter_id',
      name: 'Reader',
      component: Reader
    },
    {
      path: '/Book/:fiction_id',
      name: 'Book',
      component: Book
    },
    {
      path: '/Catalog/:fiction_id/chapter_id/:chapter_id',
      name: 'Catalog',
      component: Catalog
    }
  ]
})
