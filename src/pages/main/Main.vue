<template>
  <div class="Swipe Swipe_full">
    <div>
      <div style="width:100vw">
        <div class="header-tab">
          <div class="Swipe-tab Swipe-tab_2 f-cb">
            <a href="javascript:"></a>
            <a href="javascript:"></a>
            <i style="width: 97.5px; transition-duration: 0s; transform: translate3d(0px, 0px, 0px);"></i>
           </div>
           <em class="header-user" ></em>
           <em class="header-checkin" ></em>
        </div>
        <div class="Swipe Swipe_full container-scroll">
          <div style="width:200vw">
            <book-city></book-city>
            <book-shelf></book-shelf>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import BookCity from './BookCity'
import Shelf from './Shelf'

export default {
  name: 'main',
  data () {
    return {
      hotData : [],
      recommendSrcData : [],
      isMale : true,
      recommendIndex : 0,
      freeData : [],
      maleData : [],
      femaleData : [],
      bookrackData : []
    }
  },
  computed: {

  },
  components: {
    'book-city': BookCity,
    'book-shelf': Shelf
  },
  created () {

  },
  methods: {

  }
}
</script>


<style>
.book-h5__tag{margin: -3px 7px 4px 0;}
</style>
