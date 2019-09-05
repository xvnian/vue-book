<template>
  <div class="Swipe Swipe_full">
    <div>
    	<div style="width:100%;">
				<div class="header-tab">
					<div class="Swipe-tab Swipe-tab_2 f-cb">
						<a @click="clickTab(0)" href="javascript:" :class="[!tabIndex ? 'Swipe-tab__on' : '']"></a>
						<a @click="clickTab(1)" href="javascript:" :class="[tabIndex ? 'Swipe-tab__on' : '']"></a>
						<i v-bind:style="{width: '50%', transform: 'translate3d('+swipeTabI+'px, 0px, 0px)' , transition:'transform '+0.2*!touchFlag+'s ease-out'}"></i>
					 </div>
					 <em class="header-user" ></em>
					 <em class="header-checkin" ></em>
				</div>

				<div class="Swipe Swipe_full container-scroll">
					<div 
						  @touchstart="touchstart"
              @touchmove="touchmove"
              @touchend="touchend"
              @touchcancel="touchend"
						v-bind:style="{width: width*2+'px', transform: 'translate3d('+tranlateX+'px, 0px, 0px)' , transition:'transform '+0.2*!touchFlag+'s ease-out'}">
						<div v-bind:style="{width: width+'px'}">
							<div class="Pull">
							    <div class="Pull__arrow"><i></i></div>
							    <div class="Pull__loading" style="display:none"><i></i></div>
							</div>
							<p class="Pull-tip" style="display:none"></p>

<div class="Pull-scroll" >
    <div class="wrap">
        <div class="new-page channel-page" id="Tag__2">
            <section class="top-home">
                <div class="top-home__search" @click="$router.push({ path: '/search' })">输入书名/作者/关键字</div>
                <div class="Swipe slider-banner" data-track="s" id="Tag__3" data-dom-uid="4" data-dom-del="1">
                    <div style="width: 100%; transform: translate3d(0px, 0px, 0px); transition-duration: 0s;">
                        <div class="u-topic" data-href="#page=topic&amp;type=fiction&amp;id=11439" data-track="0" expose="" da="index.0.sld.0" style="width: 100%;">
                            <div class="banner"><img class="cover" src="http://image.read.duokan.com/mfsv2/download/fdsc3/p01qDSHWUGqf/DoSt6VIaNe0oC2.jpg"></div>
                        </div>
                    </div>
                </div>
                <ul class="top-home__btn">
                    <li @click="channel(371)" data-href="#page=channel&amp;id=371" data-title="免费"><img class="top-home__icon" src="http://image.read.duokan.com/mfsv2/download/s010/p015iBxwdkmU/5wc5uzYhLZ7iVa.png">
                        <p class="top-home__des">免费</p>
                    </li>
                    <li @click="channel(370)" data-href="#page=channel&amp;id=370" data-title="女生"><img class="top-home__icon" src="http://image.read.duokan.com/mfsv2/download/s010/p01LWZmXGCpy/aSrSq6Llgt9PqE.png">
                        <p class="top-home__des">女生</p>
                    </li>
                    <li @click="channel(369)" data-href="#page=channel&amp;id=369" data-title="男生"><img class="top-home__icon" src="http://image.read.duokan.com/mfsv2/download/s010/p01lq7mbkaEJ/OGlv1em8buXDgB.png">
                        <p class="top-home__des">男生</p>
                    </li>
                    <li @click="channel(371)" data-href="/hs/market/cate" data-title="分类"><img class="top-home__icon" src="http://image.read.duokan.com/mfsv2/download/s010/p01pz5NtyRI0/2ENONnvOg23NXM.png">
                        <p class="top-home__des">分类</p>
                    </li>
                    <li @click="channel(371)" data-href="/hs/market/rank" data-title="排行"><img class="top-home__icon" src="http://image.read.duokan.com/mfsv2/download/s010/p010kK7M5VyH/8kPz9nKvRXyu1k.png">
                        <p class="top-home__des">排行</p>
                    </li>
                </ul>
            </section>
            <section class="channel-group main-card">
                <div class="channel-group__header">
                    <h2 class="channel-group__title channel-group__title_left">本周最火</h2></div>
                <ul class="book-table">
                    <li v-for='item in hotData' @click="book(item.fiction_id)">
                        <div class="u-book -vertical" >
                            <div class="book-cover Lazy_loading Lazy_loaded" ><img :alt="item.title" v-lazy="item.cover+'!s'">
                                <div class="u-tagRT"></div>
                            </div>
                            <div class="info">
                                <h3 class="title">{{item.title}}</h3>
                            </div>
                        </div>
                    </li>
                </ul>
                <a class="channel-group__footer">查看更多</a>
            </section>
            <section class="channel-h5 channel-h5_tab" id="Tag__10">
                <div class="channel-h5__header">
                    <p class="channel-h5__title channel-group__title_left">重磅推荐<i>推</i></p>
                    <div class="tab" ><a @click="isMale=true" href="javascript:" :class="{'tab__on':isMale}">男</a><a @click="isMale=false" href="javascript:" :class="{'tab__on':!isMale}">女</a></div>
                </div>
                <div class="tab__bd">
                    <div class="tab__wrap">
                        <div class="Fade list-h5__wrap">
                            <div style="visibility: visible;">
                                <ul class="list-h5">
                                    <li  @click="book(item.fiction_id)" v-for="(item, index) in recommendData" v-if="index==0">
                                        <div class="book-h5" >
                                            <div class="book-h5__cover Lazy_loading Lazy_loaded"><img v-lazy="item.cover">
                                                <div class="u-tagRT"></div>
                                                <p class="book-h5__finish" >{{item.finish?'完结':'连载'}}</p>
                                                <div class="book-h5__order">1</div>
                                            </div>
                                            <div class="book-h5__info">
                                                <p class="book-h5__title">{{item.title}}</p>
                                                <p class="book-h5__author"><span class="author">{{item.authors}}</span></p>
                                                <p class="book-h5__summary">{{item.summary}}</p>
                                                <div class="book-h5__wrap">
                                                    <div class="book-h5__tag" v-if="tIndex<2" v-for="(tag, tIndex) in item.tags">{{tag}}</div>
                                                </div>
                                            </div>
                                        </div>
                                    </li>
                                    <li  @click="book(item.fiction_id)" v-for="(item, index) in recommendData" v-if="index>0&&index<5">
                                        <div class="book-h5 book-h5_no-img" ><span class="book-h5_no-img__order">0{{index+1}}</span>
                                            <div class="book-h5_no-img__info">
                                                <p class="book-h5_no-img__title">{{item.title}}<i class="book-h5_no-img__author"><span class="author">{{item.authors}}</span></i></p>
                                            </div>
                                        </div>
                                    </li>
                                </ul>
                            </div>                            
                        </div>
                        <div class="channel-h5__footer_next" ><a @click="changeRecommend" class="btn-h5__next" href="javascript:" >换一换</a><a class="btn-h5__more" >查看全部</a></div>
                    </div>
                    <div class="tab__wrap" style="display:none">
                        <div class="Fade list-h5__wrap" data-dom-uid="7">
                            <div style="visibility: visible;">
                                <ul class="list-h5">
                                    <li>
                                        <div class="book-h5" data-href="#page=book&amp;source_id=24524&amp;source=2" da="index.2.b.15*2_24524" expose="">
                                            <div class="book-h5__cover Lazy_loading" data-id="24524" id="Tag__15"><img alt="天价前妻">
                                                <div class="u-tagRT"></div>
                                                <p class="book-h5__finish">完结</p>
                                                <div class="book-h5__order">1</div>
                                            </div>
                                            <div class="book-h5__info">
                                                <p class="book-h5__title">天价前妻</p>
                                                <p class="book-h5__author"><span class="author">吕颜</span></p>
                                                <p class="book-h5__summary">甜蜜的婚约，不过是一场无情的骗局而已，他需要的只是她孩子的脐带血，然后去救自己深爱的女人，而她竟然。</p>
                                                <div class="book-h5__wrap">
                                                    <div class="book-h5__tag">现言</div>
                                                    <div class="book-h5__tag">总裁世家</div>
                                                    <div class="book-h5__tag">158万字</div>
                                                    <!--<p class="book-h5__latest">完结</p>-->
                                                </div>
                                            </div>
                                        </div>
                                    </li>
                                    <li>
                                        <div class="book-h5 book-h5_no-img" data-href="#page=book&amp;source_id=348083&amp;source=2" da="index.2.b.16*2_348083" expose=""><span class="book-h5_no-img__order">02</span>
                                            <div class="book-h5_no-img__info">
                                                <p class="book-h5_no-img__title">前妻，别来无恙<i class="book-h5_no-img__author"><span class="author">罗莎夜罗</span></i></p>
                                            </div>
                                        </div>
                                    </li>
                                    <li>
                                        <div class="book-h5 book-h5_no-img" data-href="#page=book&amp;source_id=318724&amp;source=2" da="index.2.b.17*2_318724" expose=""><span class="book-h5_no-img__order">03</span>
                                            <div class="book-h5_no-img__info">
                                                <p class="book-h5_no-img__title">田园弃女很嚣张<i class="book-h5_no-img__author"><span class="author">安晓妍</span></i></p>
                                            </div>
                                        </div>
                                    </li>
                                    <li>
                                        <div class="book-h5 book-h5_no-img" data-href="#page=book&amp;source_id=352615&amp;source=2" da="index.2.b.18*2_352615" expose=""><span class="book-h5_no-img__order">04</span>
                                            <div class="book-h5_no-img__info">
                                                <p class="book-h5_no-img__title">隐婚99天，总裁好眼光！<i class="book-h5_no-img__author"><span class="author">酒酒音</span></i></p>
                                            </div>
                                        </div>
                                    </li>
                                    <li>
                                        <div class="book-h5 book-h5_no-img" data-href="#page=book&amp;source_id=318609&amp;source=2" da="index.2.b.19*2_318609" expose=""><span class="book-h5_no-img__order">05</span>
                                            <div class="book-h5_no-img__info">
                                                <p class="book-h5_no-img__title">战王独宠：杀手王妃千千岁<i class="book-h5_no-img__author"><span class="author">彦七</span></i></p>
                                            </div>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                            <div>
                                <ul class="list-h5">
                                    <li>
                                        <div class="book-h5" data-href="#page=book&amp;source_id=349380&amp;source=2" da="index.2.b.20*2_349380" expose="">
                                            <div class="book-h5__cover Lazy_loading" data-id="349380" id="Tag__16"><img alt="豪门重生之妇贵逼人">
                                                <div class="u-tagRT"></div>
                                                <p class="book-h5__finish">连载</p>
                                                <div class="book-h5__order">1</div>
                                            </div>
                                            <div class="book-h5__info">
                                                <p class="book-h5__title">豪门重生之妇贵逼人</p>
                                                <p class="book-h5__author"><span class="author">恩很宅</span></p>
                                                <p class="book-h5__summary">7年婚姻。 相见如宾，浓情甜蜜。 到头来，镜花水月。 倾尽所有，换来一场蓄谋已久的杀人灭口。 ...
                                                </p>
                                                <div class="book-h5__wrap">
                                                    <div class="book-h5__tag">现代言情</div>
                                                    <div class="book-h5__tag">362万字</div>
                                                    <!--<p class="book-h5__latest">连载</p>-->
                                                </div>
                                            </div>
                                        </div>
                                    </li>
                                    <li>
                                        <div class="book-h5 book-h5_no-img" data-href="#page=book&amp;source_id=316243&amp;source=2" da="index.2.b.21*2_316243" expose=""><span class="book-h5_no-img__order">02</span>
                                            <div class="book-h5_no-img__info">
                                                <p class="book-h5_no-img__title">总裁一抱好欢喜<i class="book-h5_no-img__author"><span class="author">安姿莜</span></i></p>
                                            </div>
                                        </div>
                                    </li>
                                    <li>
                                        <div class="book-h5 book-h5_no-img" data-href="#page=book&amp;source_id=317703&amp;source=2" da="index.2.b.22*2_317703" expose=""><span class="book-h5_no-img__order">03</span>
                                            <div class="book-h5_no-img__info">
                                                <p class="book-h5_no-img__title">倾城国医<i class="book-h5_no-img__author"><span class="author">风梧</span></i></p>
                                            </div>
                                        </div>
                                    </li>
                                    <li>
                                        <div class="book-h5 book-h5_no-img" data-href="#page=book&amp;source_id=45104&amp;source=2" da="index.2.b.23*2_45104" expose=""><span class="book-h5_no-img__order">04</span>
                                            <div class="book-h5_no-img__info">
                                                <p class="book-h5_no-img__title">一嫁南希爱终生<i class="book-h5_no-img__author"><span class="author">纳兰静语</span></i></p>
                                            </div>
                                        </div>
                                    </li>
                                    <li>
                                        <div class="book-h5 book-h5_no-img" data-href="#page=book&amp;source_id=316343&amp;source=2" da="index.2.b.24*2_316343" expose=""><span class="book-h5_no-img__order">05</span>
                                            <div class="book-h5_no-img__info">
                                                <p class="book-h5_no-img__title">至尊宝宝狂傲娘亲<i class="book-h5_no-img__author"><span class="author">深蓝水浅</span></i></p>
                                            </div>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                            <div>
                                <ul class="list-h5">
                                    <li>
                                        <div class="book-h5" data-href="#page=book&amp;source_id=45031&amp;source=2" da="index.2.b.25*2_45031" expose="">
                                            <div class="book-h5__cover Lazy_loading" data-id="45031" id="Tag__17"><img alt="豪门叛妻">
                                                <div class="u-tagRT"></div>
                                                <p class="book-h5__finish">完结</p>
                                                <div class="book-h5__order">1</div>
                                            </div>
                                            <div class="book-h5__info">
                                                <p class="book-h5__title">豪门叛妻</p>
                                                <p class="book-h5__author"><span class="author">顾盼琼依</span></p>
                                                <p class="book-h5__summary">【简介】 他，是坐拥房地产半壁江山的地产大亨，看似温文儒雅，实则却冷酷无情，阴险狡诈 她，聪明而睿智...
                                                </p>
                                                <div class="book-h5__wrap">
                                                    <div class="book-h5__tag">都市高干</div>
                                                    <div class="book-h5__tag">总裁世家</div>
                                                    <div class="book-h5__tag">122万字</div>
                                                    <!--<p class="book-h5__latest">完结</p>-->
                                                </div>
                                            </div>
                                        </div>
                                    </li>
                                    <li>
                                        <div class="book-h5 book-h5_no-img" data-href="#page=book&amp;source_id=348027&amp;source=2" da="index.2.b.26*2_348027" expose=""><span class="book-h5_no-img__order">02</span>
                                            <div class="book-h5_no-img__info">
                                                <p class="book-h5_no-img__title">萌宠甜妻<i class="book-h5_no-img__author"><span class="author">宠宠</span></i></p>
                                            </div>
                                        </div>
                                    </li>
                                    <li>
                                        <div class="book-h5 book-h5_no-img" data-href="#page=book&amp;source_id=351278&amp;source=2" da="index.2.b.27*2_351278" expose=""><span class="book-h5_no-img__order">03</span>
                                            <div class="book-h5_no-img__info">
                                                <p class="book-h5_no-img__title">修真之掌门真绝色<i class="book-h5_no-img__author"><span class="author">吴瑕</span></i></p>
                                            </div>
                                        </div>
                                    </li>
                                    <li>
                                        <div class="book-h5 book-h5_no-img" data-href="#page=book&amp;source_id=348004&amp;source=2" da="index.2.b.28*2_348004" expose=""><span class="book-h5_no-img__order">04</span>
                                            <div class="book-h5_no-img__info">
                                                <p class="book-h5_no-img__title">天赐钻石甜心<i class="book-h5_no-img__author"><span class="author">上善</span></i></p>
                                            </div>
                                        </div>
                                    </li>
                                    <li>
                                        <div class="book-h5 book-h5_no-img" data-href="#page=book&amp;source_id=280963&amp;source=2" da="index.2.b.29*2_280963" expose=""><span class="book-h5_no-img__order">05</span>
                                            <div class="book-h5_no-img__info">
                                                <p class="book-h5_no-img__title">弃妇再嫁<i class="book-h5_no-img__author"><span class="author">子夜妃子</span></i></p>
                                            </div>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div class="channel-h5__footer_next" id="Tag__18"><a class="btn-h5__next" href="javascript:" da="index.2.n.1" expose="">换一换</a><a class="btn-h5__more" data-href="#page=channel&amp;id=370" da="index.2.m.1" expose="">查看全部</a></div>
                    </div>
                </div>
            </section>
            <section class="channel-h5 channel-h5_next" id="Tag__19">
                <div class="channel-h5__header">
                    <p class="channel-h5__title channel-group__title_left">女生最爱</p>
                </div>
                <div class="Fade list-h5__wrap" data-dom-uid="8">
                    <div style="visibility: visible;">
                        <ul class="list-h5">
                            <li  @click="book(item.fiction_id)" v-for="(item, index) in femaleData" v-if="index<5">
                                <div class="book-h5" >
                                    <div class="book-h5__cover " ><img v-lazy="item.cover" :alt="item.title">
                                        <div class="u-tagRT"></div>
                                        <p class="book-h5__finish" v-if="item.finish">完结</p>
                                    </div>
                                    <div class="book-h5__info">
                                        <p class="book-h5__title">{{item.title}}</p>
                                        <p class="book-h5__author"><span class="author">{{item.authors}}</span></p>
                                        <p class="book-h5__summary">{{item.summary}}</p>
                                        <div class="book-h5__wrap">
                                            <div class="book-h5__tag" v-for="tag in item.tags">{{tag}}</div>
                                        </div>
                                    </div>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
                <div class="channel-h5__footer_next" id="Tag__35"><a class="btn-h5__next" href="javascript:" da="index.3.n.0" expose="">换一换</a><a class="btn-h5__more" data-href="#page=channel&amp;id=370" da="index.3.m.0" expose="">女生频道&gt;&gt;</a></div>
            </section>
            <section class="channel-h5 channel-h5_next" id="Tag__36">
                <div class="channel-h5__header">
                    <p class="channel-h5__title channel-group__title_left">男生最爱</p>
                </div>
                <div class="Fade list-h5__wrap" data-dom-uid="9">
                    <div style="visibility: visible;">
                        <ul class="list-h5">
                            <li  @click="book(item.fiction_id)" v-for="(item, index) in maleData" v-if="index<5">
                                <div class="book-h5" >
                                    <div class="book-h5__cover " ><img v-lazy="item.cover" :alt="item.title">
                                        <div class="u-tagRT"></div>
                                        <p class="book-h5__finish" v-if="item.finish">完结</p>
                                    </div>
                                    <div class="book-h5__info">
                                        <p class="book-h5__title">{{item.title}}</p>
                                        <p class="book-h5__author"><span class="author">{{item.authors}}</span></p>
                                        <p class="book-h5__summary">{{item.summary}}</p>
                                        <div class="book-h5__wrap">
                                            <div class="book-h5__tag" v-for="tag in item.tags">{{tag}}</div>
                                        </div>
                                    </div>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
                <div class="channel-h5__footer_next" id="Tag__52"><a class="btn-h5__next" href="javascript:" da="index.4.n.0" expose="">换一换</a><a class="btn-h5__more" data-href="#page=channel&amp;id=369" da="index.4.m.0" expose="">男生频道&gt;&gt;</a></div>
            </section>
            <section class="channel-group main-card">
                <div class="channel-group__header">
                    <h2 class="channel-group__title channel-group__title_left">限时免费</h2></div>
                <ul class="book-table">
                    <li v-for="item in freeData"  @click="book(item.reference_id)">
                        <div class="u-book -vertical">
                            <div class="book-cover"><img v-lazy="item.data.cover" >
                                <div class="u-tagRT -freefiction"></div>
                            </div>
                            <div class="info">
                                <h3 class="title">{{item.data.title}}</h3></div>
                        </div>
                    </li>
                </ul>
                <a class="channel-group__footer">更多限免佳作&gt;&gt;</a>
            </section>
        </div>
    </div>
</div>

						</div>
						<div v-bind:style="{width: width+'px'}">

<div class="new-page shelf">
    <div class="shelf__top">
        <div class="shelf__switch shelf__switch_list" @click="shelfList=!shelfList"></div>
        <div class="shelf-search"  @click="$router.push({ path: '/search' })">输入书名/作者/关键字</div>
    </div>
    <ul :class="[shelfList ? 'book-list' : 'book-list shelf-book book-table']">
        <li v-for="item in bookrackData" @click="book(item.fiction_id)">
            <div class="u-book" >
                <a>
                    <div class="book-cover" ><img :alt="item.title" v-lazy="item.cover">
                        <div class="u-tagRT"></div>
                    </div>
                </a>
                <div class="info">
                    <h3 class="title single-line">{{item.title}}</h3>
                    <p class="author single-line"><span class="author">{{item.authors}}</span></p>
                    <!-- <p class="extra single-line">已读: 第一章 赶冬荒（上）</p> -->
                    <div class="wrap">
                        <p class="extra single-line">最新: {{item.latest}}</p>
                    </div>
                </div>
            </div>
        </li>
    </ul>
</div>

						</div>
					</div>
				</div>   		
    	</div>
    </div>
  </div>
</template>

<script>
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
      bookrackData : [],
      tabIndex : 0,
    	shelfList : true,
    	width :0,
    	startTime:0,
      startX : 0,
      startY : 0,
      offsetX : 0,
      startTranlateX : 0,
      tranlateX : 0,
      touchFlag : false
    }
  },
  computed: {
    recommendData(){
      let index = this.isMale ? 0 : 15
      index = index + this.recommendIndex * 5

      return this.recommendSrcData.slice(index, index+5)
    },
    swipeTabI(){
    	return -(this.width - 180)/2 * (this.tranlateX/this.width)
    }
  },
  methods: {
    changeRecommend(){
      if(this.recommendIndex == 1){
        this.recommendIndex = 0
      } else {
        this.recommendIndex = this.recommendIndex + 1
      }
    },
    clickTab(val){
      this.tabIndex = val
      this.switchTab()
    },
  	switchTab(){
  		if(this.tabIndex == 0){
  			this.startTranlateX = 0
  		} else {
  			this.startTranlateX = -this.width
  		}
  		this.tranlateX = this.startTranlateX
  	},
    touchstart(event) {
    	this.touchFlag = true
    	this.startX = event.touches[0].pageX;
    	this.startY = event.touches[0].pageY;
    	this.startTime = new Date() * 1;
      
    },
    touchmove(event) {
      if(Math.abs(event.touches[0].pageY - this.startY)<10){
      	// event.preventDefault()
      	this.offsetX = event.touches[0].pageX - this.startX

      	var tranlateX = this.startTranlateX + this.offsetX;
      	if(tranlateX > 0){
      		tranlateX = 0;
      	}
      	if(tranlateX< -this.width){
      		tranlateX = -this.width;
      	}
      	this.tranlateX = tranlateX;
      }
    },
    touchend(event) {
      
      this.touchFlag = false
      
      var offsetX = this.offsetX;
      var startTranlateX = this.startTranlateX;
      var endTime = new Date() * 1;

      /*if(offsetX < 0){
        this.switchTab(1)
      } else if(offsetX > 0){
        this.switchTab(0)
      }*/

  // 		if(endTime - this.startTime > 300){
		// 		if(startTranlateX == 0){
	 //  			if(offsetX < 0 && offsetX <= -this.width/20){
	 //  				this.tabIndex = 1
	 //  			} else {
	 //  				this.tabIndex = 0
	 //  			}
	 //  		} else {
		// 			 if(offsetX >= this.width/15){
		// 			 	this.tabIndex = 0
		// 			 } else {
		// 			 	this.tabIndex = 1
		// 			 }
	 //  		}
		// } else {
			if(offsetX >= 10){
				this.tabIndex = 0
			} else if(offsetX <= -10){
				this.tabIndex = 1
			}
		// }
      this.switchTab() 
    },
    book(id){
        this.$router.push({ name: 'Book', params: { id: id }})
    },
    channel(id){
        if(id == 371){
            this.$router.push({ name: 'Free', params: { id: id }})
        } else {
            this.$router.push({ name: 'Channel', params: { id: id }})
        }
    }
  },
  created: function () {
    this.width = window.innerWidth;
    let that = this;
    window.onresize = function(){
    	that.width = window.innerWidth;
    }

    if(this.hotData.length === 0){
      this.$http.jsonp(window.config.url + '/php/bookapi/index.php').then(response => {
        this.hotData = response.body.items[1].data.data;
        this.recommendSrcData = response.body.items[2].data.data;
        this.maleData = response.body.items[4].data.data;
        this.femaleData = response.body.items[3].data.data;
        this.freeData = response.body.items[5].data.data;

      }, response => {
        console.log('index list error');
      });
    }

    

    if(this.bookrackData.length === 0){
      this.$http.jsonp(window.config.url + '/php/bookapi/bookrack.php').then(response => {
        this.bookrackData = response.body.items;
      }, response => {
        console.log('bookrack list error');
      });
    }
    

  }
}
</script>


<style scope>
.book-h5__tag{margin: -3px 7px 4px 0;}
.header-user, .header-checkin{
    opacity: 0.5;
}
</style>
