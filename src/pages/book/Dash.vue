<template>
  <section class="main-card" style="margin-top:-10px">
    <div class="book-dash">
      <div>
        <div class="wrap">
          <ul class="btn-group">
            <li class="u-btn2" @click="gotoReader">
              <span class="book-dash-text"></span>
            </li>
            <li>
              <a class="u-btn3">下载</a>
            </li>
          </ul>
        </div>
        <div class="wrap2" style="display: none;">
          <div class="m-limitinfo">
            <em class="icn-clock"></em>
            <span>限时畅读即将结束</span>
          </div>
        </div>
      </div>
    </div>
    <div class="u-folder ">
      <div class="folder-cnt -flod">
        {{dash.content}}
      </div>
      <div class="folder-tail">
        <div>最新：{{dash.latest}} 更新于 {{getUpdatedDate()}}</div>
      </div>
    </div>
  </section>
</template>
<script type="text/javascript">
import formatDate from '@/utils/formatDate'

export default {
  props: {
    dash: {
      type: Object,
      default () {
        return {}
      }
    }
  },
  methods: {
    getUpdatedDate() {
      return formatDate(new Date(this.dash.updated * 1000), 'yyyy-M-d h:m')
    },
    gotoReader() {
      let fiction_id = this.$route.params.fiction_id
      let chapter_id = localStorage.getItem('v6__fiction_' + fiction_id + '_progress')
      
      this.$router.push({
        name: 'Reader',
        params: {
          fiction_id: fiction_id,
          chapter_id: chapter_id || 0
        }
      })
    }
  }
}
</script>
