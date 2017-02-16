import Vue from 'vue'
import Router from 'vue-router'
import Main from 'components/Main'
import Book from 'components/Book'
import Search from 'components/Search'
import Reader from 'components/Reader'
import Channel from 'components/Channel'
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
      path: '/search',
      name: 'Search',
      component: Search
    },
    { 
      path: '/book/:id',
      name: 'Book', 
      component: Book
    },
    { 
      path: '/reader/:id/chapter/:chapter_id',
      name: 'Reader', 
      component: Reader
    },
    { 
      path: '/channel/:id',
      name: 'Channel', 
      component: Channel
    },
    { 
      path: '/catalog/:id/chapter/:chapter_id',
      name: 'Catalog', 
      component: Catalog
    }        
  ]
})
