<template>
<div :class="['reader',reader_op, reader_op_font]" :data-night="night" :data-bg="bg">
    <div class="reader__mask" @click="hideMenu"></div>
    <div class="reader__hd">
        <a class="reader__back" href="javascript:history.back()"></a>返回
        <a class="reader__more" vp-click="$root.toggle()" vp-class="{'reader__more_on' : $root.on}" id="Tag__30"></a>
    </div>
    <div class="reader__ft">
        <div class="reader__ft-bar"><a @click="prevCharpter" href="javascript:" class="reader__prev-chapter">上一章</a><a href="javascript:" id="Tag__31">{{chapter_id*1+1}}/{{chapter_count}}</a><a @click="nextCharpter" href="javascript:" class="reader__next-chapter">下一章</a></div>
        <a href="javascript:" class="reader__ft-toc reader__toc" @click="getCatalog"></a>
        <a href="javascript:" class="reader__ft-font" @click="showFont"></a>
        <a href="javascript:" class="reader__ft-night" @click="switchNight"></a>
    </div>
    <div class="reader__font">
        <div class="reader__font-size"><span>字号</span>
        	<a href="javascript:" class="reader__font-large" @click="bigFont()">大</a>
        	<a href="javascript:" class="reader__font-small" @click="smallFont()">小</a>
        </div>
        <div class="reader__font-bg"><span>背景</span>
            <a href="javascript:" data-bg="1" @click="setBg(1)"></a>
            <a href="javascript:" data-bg="2" @click="setBg(2)"></a>
            <a href="javascript:" data-bg="3" @click="setBg(3)"></a>
            <a href="javascript:" data-bg="4" @click="setBg(4)"></a>
            <a href="javascript:" data-bg="5" @click="setBg(5)"></a>
            <a href="javascript:" data-bg="0" @click="setBg(0)"></a>
        </div>
    </div>
    <div class="reader__bd" @click="showMenu" :style="{fontSize: font+'px'}">
        <ul class="reader__chapter">
            <li data-track="0" data-chapter_id="0">
                <div class="reader__content">
                    <h1>{{title}}</h1>
                    <p v-for="item in content">{{item}}</p>
                </div>
                <div class="reader__ad" id="Tag__33" style="display: none;">
                    <div class="reader__close"></div>
                </div>
            </li>
        </ul>
        <!-- <div class="ListView ListView_loading ListView_error">
            <div class="ListView__complete">
                <div class="reader__chapter-btn"><a href="javascript:" class="reader__prev-chapter">上一章</a><a href="javascript:" class="reader__toc">目录</a><a href="javascript:" class="reader__next-chapter">下一章</a></div>
            </div>
        </div> -->
    </div>
</div>
</template>

<script>
import Base64 from '../lib/base64'

export default {
  name: 'book',
  data () {
    return {
			bookData: [],
			author_books: [],
			menu: false,
			night: 0,
			bg:1,
			font:14,
			reader_on: false,
			font_on:false,
      title:"",
      content: [],
      chapter_id: 0,
      chapter_count : 0
    }
  },
  computed:{
  	reader_op(){
  		if(this.reader_on){
  			return "reader_op"
  		} else {
  			return "reader"
  		}  		 
  	},
  	reader_op_font(){
  		if(this.font_on){
  			return "reader_op-font"
  		} else {
  			return ""
  		} 
  	},
  	updateTime(){
  		
  	}
  },
  watch: {
    '$route' (to, from) {
      this.render();
    }
  },
  methods: {
    getCatalog(){
      let params = { id: this.$route.params.id ,chapter_id: parseInt(this.$route.params.chapter_id)};
      this.$router.push({ name: 'Catalog', params: params});
    },
    nextCharpter(){
      let params = { id: this.$route.params.id ,chapter_id: parseInt(this.$route.params.chapter_id)+1};
      this.$router.replace({ name: 'Reader', params: params});
    },
    prevCharpter(){
      if(this.$route.params.chapter_id != 0){
        let params = { id: this.$route.params.id ,chapter_id: parseInt(this.$route.params.chapter_id)-1};
        this.$router.replace({ name: 'Reader', params: params});
      }
    },
  	bigFont(){
  		if(this.font>21)
  			return
  		this.font = this.font + 1
  	},
  	smallFont(){
  		if(this.font<12)
  			return
  		this.font = this.font - 1
  	},
  	showMenu(event){  		
  		if(event.clientY>50 && event.clientY< window.innerHeight-120){
  			this.reader_on = true
  		}
  	},
  	hideMenu(){
  		this.reader_on = false
  		this.font_on = false
  	},
  	switchNight(){
  		this.night = this.night ? 0 : 1
  	},
  	showFont(){
  		this.font_on = !this.font_on
  	},
  	setBg(val){
  		this.bg = val
  	},
    render(){
      this.chapter_id = this.$route.params.chapter_id;
      var option = {
        params:{
          f_id: this.$route.params.id,
          c_id: this.$route.params.chapter_id
        }
      };
      this.$http.jsonp('http://chenxizihui.gotoip2.com/php/bookapi/link.php', option).then(response => {
        var ret = JSON.parse(Base64.decode(response.body));
        this.title = ret.t;
        this.content = ret.p;
      }, response => {
        console.log('reader api error');
      });  
    }
  },
  created: function () {
    this.render();

    var option = {
      params:{
        id: this.$route.params.id
      }
    };
    this.$http.jsonp('http://chenxizihui.gotoip2.com/php/bookapi/detail.php', option).then(response => {
      // var ret = JSON.parse(Base64.decode(response.body));
      // this.title = ret.t;
      // this.content = ret.p;
      this.chapter_count = response.body.item.chapter_count;
    }, response => {
      console.log('detail api error');
    }); 

  }  
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.reader__more{
	opacity:0.5;
}
.reader__ft a{
	width: 33.3333%
}
</style>
