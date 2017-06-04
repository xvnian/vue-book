<template>
  <div style="width:100vw">
    <div class="new-page shelf">
      <div class="shelf__top">
        <div class="shelf__switch shelf__switch_list"></div>
        <div class="shelf-search">输入书名/作者/关键字</div>
      </div>
      <ul class="book-list">
        <li>
          <div class="u-book">
            <a>
              <div class="book-cover" >
                <img alt="逆天透视眼" src="static/hfjdzh92NRtNxW.jpg">
                <div class="u-tagRT"></div>
              </div>
            </a>
            <div class="info">
              <h3 class="title single-line">item.title</h3>
              <p class="author single-line"><span class="author">item.authors</span></p>
              <!-- <p class="extra single-line">已读: 第一章 赶冬荒（上）</p> -->
              <div class="wrap">
                <p class="extra single-line">最新: item.latest</p>
              </div>
            </div>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>
<script>
export default {
  name: 'shelf'
}
</script>
<style>

</style>