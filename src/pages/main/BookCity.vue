<template>
  <div style="width:100vw">
    <div class="Pull-scroll" >
      <div class="wrap">
        <div class="new-page channel-page">
          <section class="top-home">
            <div class="top-home__search">输入书名/作者/关键字</div>
            <banner v-if="bannerData.length > 0" :banner="bannerData"></banner>
            <channel-nav></channel-nav>
          </section>
          <hot v-if="hotData.length > 0" :hot="hotData"></hot>
          <recommend></recommend>
          <favorite></favorite>
          <favorite></favorite>
          <free></free>
        </div>
      </div>
    </div>
  </div>
</template>
<script>

import Banner from './Banner'
import ChannelNav from './ChannelNav'
import Hot from './Hot'
import Recommend from './Recommend'
import Favorite from './Favorite'
import Free from './Free'

import {getMainData} from '@/api/index'

export default {
  data () {
    return {
      bannerData: [],
      hotData: []
    }
  },
  components: {
    'channel-nav': ChannelNav,
    'banner': Banner,
    'hot': Hot,
    'recommend': Recommend,
    'favorite': Favorite,
    'free': Free
  },
  created () {
    getMainData().then(res => {
      // console.log(res)

      this.bannerData = res.items[0].data.data.slice(0, 2)
      this.hotData = res.items[1].data.data
    }).catch(err => {

    })
  }
}
</script>