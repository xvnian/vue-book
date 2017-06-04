<template>
  <div class="book">
    <header-top :title="title"></header-top>
    <div class="top__bd">
      <div class="new-page book-page">
        <detail :detail="detail" v-if="detail!=null"></detail>
        <dash :dash="dash" v-if="dash!=null"></dash>
        <category :category="category" v-if="category.length>0"></category>
        <other-book 
          title="作者其他图书" 
          :bookdata="authorBooks" 
          v-if="authorBooks.length>0"></other-book>
        <other-book 
          title="喜欢本书的人也喜欢" 
          :bookdata="related" 
          v-if="related.length>0"></other-book>
        <right :right="right"></right>
      </div>
    </div>
  </div>
</template>

<script>
import HeaderTop from './Header'
import Detail from './Detail'
import Right from './Right'
import OtherBook from './OtherBook'
import Category from './Category'
import Dash from './Dash'

import {getBookData} from '@/api/index'

export default {
  name: 'book',
  data () {
    return {
      title: '',
      detail: null,
      dash: null,
      category: [],
      related: [],
      authorBooks: [],
      right: ''
    }
  },
  components: {
    'header-top': HeaderTop,
    'detail': Detail,
    'right': Right,
    'other-book': OtherBook,
    'category': Category,
    'dash': Dash
  },
  watch: {
    '$route': 'getData'
  },
  created () {
    this.getData()
  },
  methods: {
    getData () {
      let fiction_id = this.$route.params.fiction_id
      getBookData(fiction_id).then(res => {

        this.title = res.item.title

        this.detail = res.item
        this.dash = res.item
        this.category = res.item.categories
        this.related = res.related
        this.authorBooks = res.author_books
        this.right = res.item.rights

        this.$nextTick(() => {
          document.querySelector('.book-page').scrollIntoView()
        })
      })  
    }
  }
}
</script>
