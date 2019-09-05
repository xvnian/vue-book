<template>
<div class="search">
    <div class="top">
        <a href="javascript:history.back()" class="top__back"></a>
        <form @submit.prevent="search()" class="search-input"><b class="search-input__mi"></b>
            <input type="text" v-model="keyword" placeholder="输入书名/作者/关键字">
            <div class="search-input__btn" @click="search">搜索</div>
        </form>
    </div>
    <div id="Tag__62" class="top__bd" v-if="!searched">
        <div id="Tag__63">
            <ul class="m-tag -color search-tag" @click="tagSearch">
                <li class="u-tag" id="Tag__64">如果蜗牛有爱情</li>
                <li class="u-tag" id="Tag__65">择天记</li>
                <li class="u-tag" id="Tag__66">一夜弃妃</li>
                <li class="u-tag" id="Tag__67">诛仙</li>
                <li class="u-tag" id="Tag__68">豪门小老婆</li>
                <li class="u-tag" id="Tag__69">异能小农民</li>
                <li class="u-tag" id="Tag__70">武动乾坤</li>
                <li class="u-tag" id="Tag__71">别那么骄傲</li>
            </ul>
        </div>
    </div>
		<div id="Tag__83" class="top__bd" data-dom-uid="11" v-if="searched">
		    <ul class="book-list" >
		        <li @click="book(item.source_id)" v-for="item in searchData">
		            <div class="u-book">
		                <div class="cnt">
		                    <div class="book-cover" ><img :alt="item.title" v-lazy="item.cover">
		                        <div class="u-tagRT"></div>
		                    </div>
		                    <div class="info">
		                        <h3 class="title single-line">{{item.title}}</h3>
		                        <p class="summary">{{item.intro}}</p>
		                        <div class="wrap">
		                            <p class="author single-line"><span>{{item.role[0][1]}}</span></p>
		                        </div>
		                    </div>
		                </div>
		            </div>
		        </li>
		    </ul>
		    <div class="ListView ListView_complete" v-if="empty">
		       <!--  <div class="ListView__loading u-loading">正在加载中... </div>
		        <div class="ListView__error ListView__retry u-loading">加载失败，请点击重试:)</div> -->
		        <div class="ListView__empty">
		            <p class="u-tip">没有相应的搜索结果</p>
		        </div>
		        <div class="ListView__complete"> </div>
		    </div>
		</div>    
</div>
</template>

<script>
export default {
  name: 'search',
  data () {
    return {
      searchData: [],
      searched: false,
      keyword: "",
      empty: false
    }
  },
  methods: {
  	search(){
  		if(this.keyword !== ""){
  			this.searched = true
        this.empty = false
  			var option = {
  					params:{s:encodeURI(this.keyword)}
  			};
  			this.$http.jsonp(window.config.url + '/php/bookapi/search.php', option).then(response => {
			    this.searchData = response.body.items;
			    if(this.searchData.length == 0){
            this.empty = true
          }
			  }, response => {
			    console.log('search list error');
			  });
  		}
  	},
  	tagSearch(event){
  		var target = event.target;

			if(target.className == "u-tag"){
				this.keyword = target.innerText;
				this.search();
			}
  	},
  	book(id){
  		this.$router.push({ name: 'Book', params: { id: id }})
  	}
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
