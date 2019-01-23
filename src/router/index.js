import Vue from 'vue'
import Router from 'vue-router'
import Main from 'components/Main'
import Book from 'components/Book'
import Search from 'components/Search'
import Reader from 'components/Reader'
import Channel from 'components/Channel'
import Free from 'components/Free'
import Catalog from 'components/Catalog'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Main',
      component: Main
    },
    {
      path: '/Search',
      name: 'Search',
      component: Search
    },
    { 
      path: '/Book/:id',
      name: 'Book', 
      component: Book
    },
    { 
      path: '/reader/:id/chapter/:chapter_id',
      name: 'Reader', 
      component: Reader
    },
    { 
      path: '/Channel/:id',
      name: 'Channel', 
      component: Channel
    },
    { 
      path: '/Free/:id',
      name: 'Free', 
      component: Free
    },
    { 
      path: '/Catalog/:id/chapter/:chapter_id',
      name: 'Catalog', 
      component: Catalog
    }        
  ]
})
