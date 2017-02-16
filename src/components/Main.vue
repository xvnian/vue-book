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
                    <li @click="channel(371)" data-href="#page=channel&amp;id=370" data-title="女生"><img class="top-home__icon" src="http://image.read.duokan.com/mfsv2/download/s010/p01LWZmXGCpy/aSrSq6Llgt9PqE.png">
                        <p class="top-home__des">女生</p>
                    </li>
                    <li @click="channel(371)" data-href="#page=channel&amp;id=369" data-title="男生"><img class="top-home__icon" src="http://image.read.duokan.com/mfsv2/download/s010/p01lq7mbkaEJ/OGlv1em8buXDgB.png">
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
                            <div class="book-cover Lazy_loading Lazy_loaded" ><img :alt="item.title" v-lazy="item.cover">
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
                                                <p class="book-h5__finish" v-if="item.finish">完结</p>
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
                    <div>
                        <ul class="list-h5">
                            <li>
                                <div class="book-h5" data-href="#page=book&amp;source_id=316206&amp;source=2" da="index.3.b.5*2_316206" expose="">
                                    <div class="book-h5__cover Lazy_loading" data-id="316206" id="Tag__25"><img alt="嚣张老公很爱我">
                                        <div class="u-tagRT"></div>
                                        <p class="book-h5__finish">完结</p>
                                    </div>
                                    <div class="book-h5__info">
                                        <p class="book-h5__title">嚣张老公很爱我</p>
                                        <p class="book-h5__author"><span class="author">菜鸟也求凰</span></p>
                                        <p class="book-h5__summary">“掉下个老公砸死我吧！”语毕，一个大帅哥倒在了她的面前！救人一命胜造七级浮屠，她好心送他去医院，还赠</p>
                                        <div class="book-h5__wrap">
                                            <div class="book-h5__tag">总裁</div>
                                            <div class="book-h5__tag">总裁世家</div>
                                            <div class="book-h5__tag">175万字</div>
                                            <!--<p class="book-h5__latest">完结</p>-->
                                        </div>
                                    </div>
                                </div>
                            </li>
                            <li>
                                <div class="book-h5" data-href="#page=book&amp;source_id=18225&amp;source=2" da="index.3.b.6*2_18225" expose="">
                                    <div class="book-h5__cover Lazy_loading" data-id="18225" id="Tag__26"><img alt="重生之嫡女不乖">
                                        <div class="u-tagRT"></div>
                                        <p class="book-h5__finish">完结</p>
                                    </div>
                                    <div class="book-h5__info">
                                        <p class="book-h5__title">重生之嫡女不乖</p>
                                        <p class="book-h5__author"><span class="author">菡笑</span></p>
                                        <p class="book-h5__summary">前世，直到她被毒死，才明白原来爱人的柔情、亲人的关怀，都是为了她不菲的财产和那不欲人知的秘密。重生四...</p>
                                        <div class="book-h5__wrap">
                                            <div class="book-h5__tag">重生之嫡女不乖</div>
                                            <div class="book-h5__tag">穿越架空</div>
                                            <div class="book-h5__tag">89万字</div>
                                            <!--<p class="book-h5__latest">完结</p>-->
                                        </div>
                                    </div>
                                </div>
                            </li>
                            <li>
                                <div class="book-h5" data-href="#page=book&amp;source_id=342931&amp;source=2" da="index.3.b.7*2_342931" expose="">
                                    <div class="book-h5__cover Lazy_loading" data-id="342931" id="Tag__27"><img alt="蜜婚霸爱：傲娇男神深深宠">
                                        <div class="u-tagRT"></div>
                                        <p class="book-h5__finish">连载</p>
                                    </div>
                                    <div class="book-h5__info">
                                        <p class="book-h5__title">蜜婚霸爱：傲娇男神深深宠</p>
                                        <p class="book-h5__author"><span class="author">蓝莓籽</span></p>
                                        <p class="book-h5__summary">“不要……求求你出去。” 他嘴角微勾:“不是你夹着我不让我出去吗?” 谁能比她倒霉! ...
                                        </p>
                                        <div class="book-h5__wrap">
                                            <div class="book-h5__tag">现代言情</div>
                                            <div class="book-h5__tag">116万字</div>
                                            <!--<p class="book-h5__latest">连载</p>-->
                                        </div>
                                    </div>
                                </div>
                            </li>
                            <li>
                                <div class="book-h5" data-href="#page=book&amp;source_id=322932&amp;source=2" da="index.3.b.8*2_322932" expose="">
                                    <div class="book-h5__cover Lazy_loading" data-id="322932" id="Tag__28"><img alt="邪帝毒妃：神医大小姐">
                                        <div class="u-tagRT"></div>
                                        <p class="book-h5__finish">连载</p>
                                    </div>
                                    <div class="book-h5__info">
                                        <p class="book-h5__title">邪帝毒妃：神医大小姐</p>
                                        <p class="book-h5__author"><span class="author">夜音如雪</span></p>
                                        <p class="book-h5__summary">杀手之王一朝重生，医毒双绝，坐拥空间，附赠一只爱哭鬼。 百枚金币，买下一只病美男，却无端成了半壁江...
                                        </p>
                                        <div class="book-h5__wrap">
                                            <div class="book-h5__tag">玄幻言情</div>
                                            <div class="book-h5__tag">206万字</div>
                                            <!--<p class="book-h5__latest">连载</p>-->
                                        </div>
                                    </div>
                                </div>
                            </li>
                            <li>
                                <div class="book-h5" data-href="#page=book&amp;source_id=316257&amp;source=2" da="index.3.b.9*2_316257" expose="">
                                    <div class="book-h5__cover Lazy_loading" data-id="316257" id="Tag__29"><img alt="一胎双胞老婆太给力【完】">
                                        <div class="u-tagRT"></div>
                                        <p class="book-h5__finish">完结</p>
                                    </div>
                                    <div class="book-h5__info">
                                        <p class="book-h5__title">一胎双胞老婆太给力【完】</p>
                                        <p class="book-h5__author"><span class="author">端木初初</span></p>
                                        <p class="book-h5__summary">总裁大人的无限宠溺，将她推上浪尖！打压，栽赃，陷害，毒计一环接一环。小三小四轮番上阵，逼着身怀有孕的...</p>
                                        <div class="book-h5__wrap">
                                            <div class="book-h5__tag">宝宝</div>
                                            <div class="book-h5__tag">总裁世家</div>
                                            <div class="book-h5__tag">141万字</div>
                                            <!--<p class="book-h5__latest">完结</p>-->
                                        </div>
                                    </div>
                                </div>
                            </li>
                        </ul>
                    </div>
                    <div>
                        <ul class="list-h5">
                            <li>
                                <div class="book-h5" data-href="#page=book&amp;source_id=30890&amp;source=2" da="index.3.b.10*2_30890" expose="">
                                    <div class="book-h5__cover Lazy_loading" data-id="30890" id="Tag__30"><img alt="醉红颜：朕的倾城鬼后">
                                        <div class="u-tagRT"></div>
                                        <p class="book-h5__finish">完结</p>
                                    </div>
                                    <div class="book-h5__info">
                                        <p class="book-h5__title">醉红颜：朕的倾城鬼后</p>
                                        <p class="book-h5__author"><span class="author">映日</span></p>
                                        <p class="book-h5__summary">曾经的她，倾国倾城，绝代芳华 曾经的她，温婉如莲，无欲无争 从不想独宠六宫，只求平安度日 所以，她掩...
                                        </p>
                                        <div class="book-h5__wrap">
                                            <div class="book-h5__tag">穿越奇情</div>
                                            <div class="book-h5__tag">穿越架空</div>
                                            <div class="book-h5__tag">121万字</div>
                                            <!--<p class="book-h5__latest">完结</p>-->
                                        </div>
                                    </div>
                                </div>
                            </li>
                            <li>
                                <div class="book-h5" data-href="#page=book&amp;source_id=30562&amp;source=2" da="index.3.b.11*2_30562" expose="">
                                    <div class="book-h5__cover Lazy_loading" data-id="30562" id="Tag__31"><img alt="孽欢：冷情上神，请休妻！">
                                        <div class="u-tagRT"></div>
                                        <p class="book-h5__finish">完结</p>
                                    </div>
                                    <div class="book-h5__info">
                                        <p class="book-h5__title">孽欢：冷情上神，请休妻！</p>
                                        <p class="book-h5__author"><span class="author">南觅</span></p>
                                        <p class="book-h5__summary">前世： 他是她的师父，赐她生命，护她安稳，纵她欢乐。 她做他的弟子，当他是一生依赖，然而，她被打成重...
                                        </p>
                                        <div class="book-h5__wrap">
                                            <div class="book-h5__tag">穿越时空</div>
                                            <div class="book-h5__tag">穿越架空</div>
                                            <div class="book-h5__tag">124万字</div>
                                            <!--<p class="book-h5__latest">完结</p>-->
                                        </div>
                                    </div>
                                </div>
                            </li>
                            <li>
                                <div class="book-h5" data-href="#page=book&amp;source_id=317804&amp;source=2" da="index.3.b.12*2_317804" expose="">
                                    <div class="book-h5__cover Lazy_loading" data-id="317804" id="Tag__32"><img alt="妖王鬼妃">
                                        <div class="u-tagRT"></div>
                                        <p class="book-h5__finish">完结</p>
                                    </div>
                                    <div class="book-h5__info">
                                        <p class="book-h5__title">妖王鬼妃</p>
                                        <p class="book-h5__author"><span class="author">诺诺宝贝</span></p>
                                        <p class="book-h5__summary">他是天生紫瞳权势熏天的妖王爷，她是异世来客其丑无比的鬼郡主，初见，她一刀劈开了他的自由之路，再见，她...</p>
                                        <div class="book-h5__wrap">
                                            <div class="book-h5__tag">妖王鬼妃</div>
                                            <div class="book-h5__tag">穿越架空</div>
                                            <div class="book-h5__tag">92万字</div>
                                            <!--<p class="book-h5__latest">完结</p>-->
                                        </div>
                                    </div>
                                </div>
                            </li>
                            <li>
                                <div class="book-h5" data-href="#page=book&amp;source_id=18262&amp;source=2" da="index.3.b.13*2_18262" expose="">
                                    <div class="book-h5__cover Lazy_loading" data-id="18262" id="Tag__33"><img alt="司令夫人">
                                        <div class="u-tagRT"></div>
                                        <p class="book-h5__finish">完结</p>
                                    </div>
                                    <div class="book-h5__info">
                                        <p class="book-h5__title">司令夫人</p>
                                        <p class="book-h5__author"><span class="author">肥妈向善</span></p>
                                        <p class="book-h5__summary">她被爱人背叛，诬陷入狱，最终成功越狱，摘下丑陋的大眼镜，涅火重生。他是大名鼎鼎的海军司令，在军场、官...</p>
                                        <div class="book-h5__wrap">
                                            <div class="book-h5__tag">司令夫人</div>
                                            <div class="book-h5__tag">现代言情</div>
                                            <div class="book-h5__tag">106万字</div>
                                            <!--<p class="book-h5__latest">完结</p>-->
                                        </div>
                                    </div>
                                </div>
                            </li>
                            <li>
                                <div class="book-h5" data-href="#page=book&amp;source_id=322704&amp;source=2" da="index.3.b.14*2_322704" expose="">
                                    <div class="book-h5__cover Lazy_loading" data-id="322704" id="Tag__34"><img alt="邪肆老公缠上门">
                                        <div class="u-tagRT"></div>
                                        <p class="book-h5__finish">完结</p>
                                    </div>
                                    <div class="book-h5__info">
                                        <p class="book-h5__title">邪肆老公缠上门</p>
                                        <p class="book-h5__author"><span class="author">黑心苹果</span></p>
                                        <p class="book-h5__summary">他是红三代中的太子，是黑白两道通杀的帝王，是女人恨不得贴上去死死扒住的金龟婿，可于她，他就是个想啃她...</p>
                                        <div class="book-h5__wrap">
                                            <div class="book-h5__tag">邪肆老公缠上门</div>
                                            <div class="book-h5__tag">现代言情</div>
                                            <div class="book-h5__tag">96万字</div>
                                            <!--<p class="book-h5__latest">完结</p>-->
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
                    <div>
                        <ul class="list-h5">
                            <li>
                                <div class="book-h5" data-href="#page=book&amp;source_id=284409&amp;source=2" da="index.4.b.5*2_284409" expose="">
                                    <div class="book-h5__cover Lazy_loading" data-id="284409" id="Tag__42"><img alt="北宋小厨师">
                                        <div class="u-tagRT"></div>
                                        <p class="book-h5__finish">完结</p>
                                    </div>
                                    <div class="book-h5__info">
                                        <p class="book-h5__title">北宋小厨师</p>
                                        <p class="book-h5__author"><span class="author">南希北庆</span></p>
                                        <p class="book-h5__summary">身为一家超五星级酒店首席大厨的李奇，因为喝了点小酒，竟然奇迹般的穿越到了北宋末年。 来到这个无亲无故...
                                        </p>
                                        <div class="book-h5__wrap">
                                            <div class="book-h5__tag">爆笑</div>
                                            <div class="book-h5__tag">历史传奇</div>
                                            <div class="book-h5__tag">718万字</div>
                                            <!--<p class="book-h5__latest">完结</p>-->
                                        </div>
                                    </div>
                                </div>
                            </li>
                            <li>
                                <div class="book-h5" data-href="#page=book&amp;source_id=321944&amp;source=2" da="index.4.b.6*2_321944" expose="">
                                    <div class="book-h5__cover Lazy_loading" data-id="321944" id="Tag__43"><img alt="通天武尊">
                                        <div class="u-tagRT"></div>
                                        <p class="book-h5__finish">连载</p>
                                    </div>
                                    <div class="book-h5__info">
                                        <p class="book-h5__title">通天武尊</p>
                                        <p class="book-h5__author"><span class="author">夜云端</span></p>
                                        <p class="book-h5__summary">一代至尊炼丹天才杨辰，因为不能修炼武道，遭到自己最亲近的女人背叛杀害，转世重生于一个被人欺凌的废材少...</p>
                                        <div class="book-h5__wrap">
                                            <div class="book-h5__tag">玄幻</div>
                                            <div class="book-h5__tag">367万字</div>
                                            <!--<p class="book-h5__latest">连载</p>-->
                                        </div>
                                    </div>
                                </div>
                            </li>
                            <li>
                                <div class="book-h5" data-href="#page=book&amp;source_id=298942&amp;source=2" da="index.4.b.7*2_298942" expose="">
                                    <div class="book-h5__cover Lazy_loading" data-id="298942" id="Tag__44"><img alt="特种兵王在都市">
                                        <div class="u-tagRT"></div>
                                        <p class="book-h5__finish">完结</p>
                                    </div>
                                    <div class="book-h5__info">
                                        <p class="book-h5__title">特种兵王在都市</p>
                                        <p class="book-h5__author"><span class="author">李暮歌</span></p>
                                        <p class="book-h5__summary">【巅峰聚焦——品牌佳作，强力推荐】兵王回归都市，却意外的和美女总裁结婚，既然老婆那么有钱，我就当个吃...</p>
                                        <div class="book-h5__wrap">
                                            <div class="book-h5__tag">都市情缘</div>
                                            <div class="book-h5__tag">热血都市</div>
                                            <div class="book-h5__tag">295万字</div>
                                            <!--<p class="book-h5__latest">完结</p>-->
                                        </div>
                                    </div>
                                </div>
                            </li>
                            <li>
                                <div class="book-h5" data-href="#page=book&amp;source_id=321798&amp;source=2" da="index.4.b.8*2_321798" expose="">
                                    <div class="book-h5__cover Lazy_loading" data-id="321798" id="Tag__45"><img alt="龙皇武神">
                                        <div class="u-tagRT"></div>
                                        <p class="book-h5__finish">连载</p>
                                    </div>
                                    <div class="book-h5__info">
                                        <p class="book-h5__title">龙皇武神</p>
                                        <p class="book-h5__author"><span class="author">步征</span></p>
                                        <p class="book-h5__summary">凌云渡劫失败，降临地球末法时代，从都市中修真，一步步逆天崛起。 同修佛魔道！丹田蕴真龙！拥有太古龙...
                                        </p>
                                        <div class="book-h5__wrap">
                                            <div class="book-h5__tag">异术超能</div>
                                            <div class="book-h5__tag">都市</div>
                                            <div class="book-h5__tag">438万字</div>
                                            <!--<p class="book-h5__latest">连载</p>-->
                                        </div>
                                    </div>
                                </div>
                            </li>
                            <li>
                                <div class="book-h5" data-href="#page=book&amp;source_id=318578&amp;source=2" da="index.4.b.9*2_318578" expose="">
                                    <div class="book-h5__cover Lazy_loading" data-id="318578" id="Tag__46"><img alt="重生娱乐圈：天后归来">
                                        <div class="u-tagRT"></div>
                                        <p class="book-h5__finish">连载</p>
                                    </div>
                                    <div class="book-h5__info">
                                        <p class="book-h5__title">重生娱乐圈：天后归来</p>
                                        <p class="book-h5__author"><span class="author">夏婉瑛</span></p>
                                        <p class="book-h5__summary">“BOSS，绫小姐在片场和人吵起来了！”“封杀对方。”“BOSS，绫小姐摔坏了您刚花两亿拍卖回来的古...</p>
                                        <div class="book-h5__wrap">
                                            <div class="book-h5__tag">现代言情</div>
                                            <div class="book-h5__tag">296万字</div>
                                            <!--<p class="book-h5__latest">连载</p>-->
                                        </div>
                                    </div>
                                </div>
                            </li>
                        </ul>
                    </div>
                    <div>
                        <ul class="list-h5">
                            <li>
                                <div class="book-h5" data-href="#page=book&amp;source_id=318674&amp;source=2" da="index.4.b.10*2_318674" expose="">
                                    <div class="book-h5__cover Lazy_loading" data-id="318674" id="Tag__47"><img alt="隐身侍卫">
                                        <div class="u-tagRT"></div>
                                        <p class="book-h5__finish">连载</p>
                                    </div>
                                    <div class="book-h5__info">
                                        <p class="book-h5__title">隐身侍卫</p>
                                        <p class="book-h5__author"><span class="author">桃子卖没了</span></p>
                                        <p class="book-h5__summary">无意间触电后的张易，发现自已竟然可以隐去身体，变成一个透明人，意外的惊喜让他开启了新的人生。 一个会...
                                        </p>
                                        <div class="book-h5__wrap">
                                            <div class="book-h5__tag">隐身</div>
                                            <div class="book-h5__tag">都市</div>
                                            <div class="book-h5__tag">467万字</div>
                                            <!--<p class="book-h5__latest">连载</p>-->
                                        </div>
                                    </div>
                                </div>
                            </li>
                            <li>
                                <div class="book-h5" data-href="#page=book&amp;source_id=318687&amp;source=2" da="index.4.b.11*2_318687" expose="">
                                    <div class="book-h5__cover Lazy_loading" data-id="318687" id="Tag__48"><img alt="养个千年女鬼来防身">
                                        <div class="u-tagRT"></div>
                                        <p class="book-h5__finish">完结</p>
                                    </div>
                                    <div class="book-h5__info">
                                        <p class="book-h5__title">养个千年女鬼来防身</p>
                                        <p class="book-h5__author"><span class="author">流云飘风</span></p>
                                        <p class="book-h5__summary">我在超市当收银员，一个女顾客拿冥钞来买东西。 后来我才知道，女顾客不是来买东西，而是来买我的命。 一...
                                        </p>
                                        <div class="book-h5__wrap">
                                            <div class="book-h5__tag">灵异奇谈</div>
                                            <div class="book-h5__tag">灵异</div>
                                            <div class="book-h5__tag">210万字</div>
                                            <!--<p class="book-h5__latest">完结</p>-->
                                        </div>
                                    </div>
                                </div>
                            </li>
                            <li>
                                <div class="book-h5" data-href="#page=book&amp;source_id=319901&amp;source=2" da="index.4.b.12*2_319901" expose="">
                                    <div class="book-h5__cover Lazy_loading" data-id="319901" id="Tag__49"><img alt="超品小农民">
                                        <div class="u-tagRT"></div>
                                        <p class="book-h5__finish">连载</p>
                                    </div>
                                    <div class="book-h5__info">
                                        <p class="book-h5__title">超品小农民</p>
                                        <p class="book-h5__author"><span class="author">寞斜</span></p>
                                        <p class="book-h5__summary">出了点小意外被开除的侦察兵王，无意间得到了残缺修真传承； 自己本来就是种种田，炼炼丹，追求追求什么...
                                        </p>
                                        <div class="book-h5__wrap">
                                            <div class="book-h5__tag">现代修真</div>
                                            <div class="book-h5__tag">仙侠</div>
                                            <div class="book-h5__tag">250万字</div>
                                            <!--<p class="book-h5__latest">连载</p>-->
                                        </div>
                                    </div>
                                </div>
                            </li>
                            <li>
                                <div class="book-h5" data-href="#page=book&amp;source_id=318787&amp;source=2" da="index.4.b.13*2_318787" expose="">
                                    <div class="book-h5__cover Lazy_loading" data-id="318787" id="Tag__50"><img alt="绝美女神爱上我">
                                        <div class="u-tagRT"></div>
                                        <p class="book-h5__finish">连载</p>
                                    </div>
                                    <div class="book-h5__info">
                                        <p class="book-h5__title">绝美女神爱上我</p>
                                        <p class="book-h5__author"><span class="author">温酒煮浣熊</span></p>
                                        <p class="book-h5__summary">长白山当了三年野人后，陆羽带着四份婚书下山。 四个风情各异的未婚妻，都是大美女，该娶哪一个？ 答...
                                        </p>
                                        <div class="book-h5__wrap">
                                            <div class="book-h5__tag">都市生活</div>
                                            <div class="book-h5__tag">都市</div>
                                            <div class="book-h5__tag">181万字</div>
                                            <!--<p class="book-h5__latest">连载</p>-->
                                        </div>
                                    </div>
                                </div>
                            </li>
                            <li>
                                <div class="book-h5" data-href="#page=book&amp;source_id=270797&amp;source=2" da="index.4.b.14*2_270797" expose="">
                                    <div class="book-h5__cover Lazy_loading" data-id="270797" id="Tag__51"><img alt="武神空间">
                                        <div class="u-tagRT"></div>
                                        <p class="book-h5__finish">完结</p>
                                    </div>
                                    <div class="book-h5__info">
                                        <p class="book-h5__title">武神空间</p>
                                        <p class="book-h5__author"><span class="author">傅啸尘</span></p>
                                        <p class="book-h5__summary">叶希文本只是地球上一个普通的大学生，却意外穿越到了一个名为真武界的世界！ 在这个世界中，强大的武者...
                                        </p>
                                        <div class="book-h5__wrap">
                                            <div class="book-h5__tag">玄幻奇幻</div>
                                            <div class="book-h5__tag">1168万字</div>
                                            <!--<p class="book-h5__latest">完结</p>-->
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
        <li id="Tag__62">
            <div class="u-book" data-href="#page=reader&amp;id=294699" da="index.shelf.b.0*2_294699" expose="">
                <a>
                    <div class="book-cover Lazy_loading Lazy_loaded" data-id="294699" id="Tag__63"><img alt="鬼吹灯II" src="http://cover.read.duokan.com/mfsv2/download/s010/p01e4UXqfYOI/CmsdGERS3faA0A.jpg!s">
                        <div class="u-tagRT"></div>
                    </div>
                </a>
                <div class="info">
                    <h3 class="title single-line">鬼吹灯II</h3>
                    <p class="author single-line"><span class="author">本物天下霸唱</span></p>
                    <p class="extra single-line">已读: 第一章 赶冬荒（上）</p>
                    <div class="wrap">
                        <p class="extra single-line">最新: 第七十章 起源(全文完)</p>
                    </div>
                </div>
            </div>
        </li>
        <li id="Tag__64">
            <div class="u-book" data-href="#page=reader&amp;id=270754" da="index.shelf.b.1*2_270754" expose="">
                <a>
                    <div class="book-cover Lazy_loading Lazy_loaded" data-id="270754" id="Tag__65"><img alt="异能狂徒在校园" src="http://cover.read.duokan.com/mfsv2/download/fdsc3/p014X4p3eENJ/WoTZLC7ddAbXqi.jpg!s">
                        <div class="u-tagRT"></div>
                    </div>
                </a>
                <div class="info">
                    <h3 class="title single-line">异能狂徒在校园</h3>
                    <p class="author single-line"><span class="author">三寸烟火</span></p>
                    <p class="extra single-line">已读: 第二章 俏房东</p>
                    <div class="wrap">
                        <p class="extra single-line">最新: 第两千一百五十五章 方之一姓</p>
                    </div>
                </div>
            </div>
        </li>
        <li id="Tag__66">
            <div class="u-book" data-href="#page=reader&amp;id=323725" da="index.shelf.b.2*2_323725" expose="">
                <a>
                    <div class="book-cover Lazy_loading Lazy_loaded" data-id="323725" id="Tag__67"><img alt="老九门" src="http://cover.read.duokan.com/mfsv2/download/fdsc3/p01TQfpyV6px/06EirDzmjj8zuK.jpg!s">
                        <div class="u-tagRT"></div>
                    </div>
                </a>
                <div class="info">
                    <h3 class="title single-line">老九门</h3>
                    <p class="author single-line"><span class="author">南派三叔</span></p>
                    <p class="extra single-line">已读: 引子</p>
                    <div class="wrap">
                        <p class="extra single-line">最新: 第三十一章 惨胜</p>
                    </div>
                </div>
            </div>
        </li>
        <li id="Tag__68">
            <div class="u-book" data-href="#page=reader&amp;id=307667" da="index.shelf.b.3*2_307667" expose="">
                <a>
                    <div class="book-cover Lazy_loading Lazy_loaded" data-id="307667" id="Tag__69"><img alt="神赌狂后" src="http://cover.read.duokan.com/mfsv2/download/s010/p0145bxkZG4g/ymu38GsRjCIyP7.jpg!s">
                        <div class="u-tagRT"></div>
                    </div>
                </a>
                <div class="info">
                    <h3 class="title single-line">神赌狂后</h3>
                    <p class="author single-line"><span class="author">仙魅</span></p>
                    <p class="extra single-line">已读: 报仇之始</p>
                    <div class="wrap">
                        <p class="extra single-line">最新: 病名为爱情</p>
                    </div>
                </div>
            </div>
        </li>
        <li id="Tag__70">
            <div class="u-book" data-href="#page=reader&amp;id=42318" da="index.shelf.b.4*2_42318" expose="">
                <a>
                    <div class="book-cover Lazy_loading Lazy_loaded" data-id="42318" id="Tag__71"><img alt="绝命诱惑" src="http://cover.read.duokan.com/mfsv2/download/s010/p01glg5pchIi/JfGjhpqRREi1WE.jpg!s">
                        <div class="u-tagRT"></div>
                    </div>
                </a>
                <div class="info">
                    <h3 class="title single-line">绝命诱惑</h3>
                    <p class="author single-line"><span class="author">心梦无痕</span></p>
                    <p class="extra single-line">已读: 第一卷 一朵桃花千百缘 第一章 桃花</p>
                    <div class="wrap">
                        <p class="extra single-line">最新: 第二百零七章 重回人间</p>
                    </div>
                </div>
            </div>
        </li>
        <li id="Tag__72">
            <div class="u-book" data-href="#page=reader&amp;id=348531" da="index.shelf.b.5*2_348531" expose="">
                <a>
                    <div class="book-cover Lazy_loading Lazy_loaded" data-id="348531" id="Tag__73"><img alt="误惹前夫：傲娇小妻欠调教" src="http://cover.read.duokan.com/mfsv2/download/fdsc3/p01VX5SwrpLJ/GHzGMSBubJBTiB.jpg!s">
                        <div class="u-tagRT"></div>
                    </div>
                </a>
                <div class="info">
                    <h3 class="title single-line">误惹前夫：傲娇小妻欠调教</h3>
                    <p class="author single-line"><span class="author">樱桃布红</span></p>
                    <p class="extra single-line">已读: 第11章 这是惊喜</p>
                    <div class="wrap">
                        <p class="extra single-line">最新: 第229章 （大结局） 来日方长</p>
                    </div>
                </div>
            </div>
        </li>
        <li id="Tag__74">
            <div class="u-book" data-href="#page=reader&amp;id=345679" da="index.shelf.b.6*2_345679" expose="">
                <a>
                    <div class="book-cover Lazy_loading Lazy_loaded" data-id="345679" id="Tag__75"><img alt="毒医世子妃" src="http://cover.read.duokan.com/mfsv2/download/fdsc3/p01mgpZyXPMz/jQv7L4zA5rq7L9.jpg!s">
                        <div class="u-tagRT"></div>
                    </div>
                </a>
                <div class="info">
                    <h3 class="title single-line">毒医世子妃</h3>
                    <p class="author single-line"><span class="author">兰陵王</span></p>
                    <p class="extra single-line">已读: 第二章 霸道王爷</p>
                    <div class="wrap">
                        <p class="extra single-line">最新: 第七百九十章 曲终人散</p>
                    </div>
                </div>
            </div>
        </li>
        <li id="Tag__76">
            <div class="u-book" data-href="#page=reader&amp;id=345696" da="index.shelf.b.7*2_345696" expose="">
                <a>
                    <div class="book-cover Lazy_loading Lazy_loaded" data-id="345696" id="Tag__77"><img alt="掌御万界" src="http://cover.read.duokan.com/mfsv2/download/fdsc3/p01M6LhFADw8/9YbaGlHagbaKAu.jpg!s">
                        <div class="u-tagRT"></div>
                    </div>
                </a>
                <div class="info">
                    <h3 class="title single-line">掌御万界</h3>
                    <p class="author single-line"><span class="author">纳兰康成</span></p>
                    <p class="extra single-line">已读: 第九章——牛刀小试</p>
                    <div class="wrap">
                        <p class="extra single-line">最新: 第一六一四章——命运回归（大结局）</p>
                    </div>
                </div>
            </div>
        </li>
        <li id="Tag__78">
            <div class="u-book" data-href="#page=reader&amp;id=319207" da="index.shelf.b.8*2_319207" expose="">
                <a>
                    <div class="book-cover Lazy_loading Lazy_loaded" data-id="319207" id="Tag__79"><img alt="诛仙" src="http://cover.read.duokan.com/mfsv2/download/fdsc3/p01YqmjmWxtq/Eis58fZCsBFvXY.jpg!s">
                        <div class="u-tagRT"></div>
                    </div>
                </a>
                <div class="info">
                    <h3 class="title single-line">诛仙</h3>
                    <p class="author single-line"><span class="author">萧鼎</span></p>
                    <div class="wrap">
                        <p class="extra single-line">最新: 新书《天影》</p>
                    </div>
                </div>
            </div>
        </li>
        <li id="Tag__80">
            <div class="u-book" data-href="#page=reader&amp;id=345702" da="index.shelf.b.9*2_345702" expose="">
                <a>
                    <div class="book-cover Lazy_loading Lazy_loaded" data-id="345702" id="Tag__81"><img alt="神级大老板" src="http://cover.read.duokan.com/mfsv2/download/fdsc3/p01LBM6BY89i/Sd413PC8OXoYL0.jpg!s">
                        <div class="u-tagRT"></div>
                    </div>
                </a>
                <div class="info">
                    <h3 class="title single-line">神级大老板</h3>
                    <p class="author single-line"><span class="author">嚣张农民</span></p>
                    <div class="wrap">
                        <p class="extra single-line">最新: 第1969章 执掌天地（大结局）</p>
                    </div>
                </div>
            </div>
        </li>
        <li id="Tag__82">
            <div class="u-book" data-href="#page=reader&amp;id=345683" da="index.shelf.b.10*2_345683" expose="">
                <a>
                    <div class="book-cover Lazy_loading Lazy_loaded" data-id="345683" id="Tag__83"><img alt="兼职少奶奶" src="http://cover.read.duokan.com/mfsv2/download/fdsc3/p019mQ5X8pcI/nI09l0NvQ02uNN.jpg!s">
                        <div class="u-tagRT"></div>
                    </div>
                </a>
                <div class="info">
                    <h3 class="title single-line">兼职少奶奶</h3>
                    <p class="author single-line"><span class="author">纳兰湘湘</span></p>
                    <div class="wrap">
                        <p class="extra single-line">最新: 【1091】汐汐大婚，嫦娥奔月</p>
                    </div>
                </div>
            </div>
        </li>
        <li id="Tag__84">
            <div class="u-book" data-href="#page=reader&amp;id=41421" da="index.shelf.b.11*2_41421" expose="">
                <a>
                    <div class="book-cover Lazy_loading Lazy_loaded" data-id="41421" id="Tag__85"><img alt="修真之覆宇翻云" src="http://cover.read.duokan.com/mfsv2/download/s010/p01r5DIeZY6f/M4OLEZsws34Irz.jpg!s">
                        <div class="u-tagRT"></div>
                    </div>
                </a>
                <div class="info">
                    <h3 class="title single-line">修真之覆宇翻云</h3>
                    <p class="author single-line"><span class="author">飞舞激扬</span></p>
                    <div class="wrap">
                        <p class="extra single-line">最新: 第一千七百六十八章 人算不如天算！</p>
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

  		if(endTime - this.startTime > 300){
				if(startTranlateX == 0){
	  			if(offsetX < 0 && offsetX <= -this.width/6){
	  				this.tabIndex = 1
	  			} else {
	  				this.tabIndex = 0
	  			}
	  		} else {
					 if(offsetX >= this.width/6){
					 	this.tabIndex = 0
					 } else {
					 	this.tabIndex = 1
					 }
	  		}
			} else {
				if(offsetX >= 50){
					this.tabIndex = 0
				} else if(offsetX <= -50){
					this.tabIndex = 1
				}
			}
      this.switchTab() 
    },
    book(id){
        this.$router.push({ name: 'Book', params: { id: id }})
    },
    channel(id){
        this.$router.push({ name: 'Channel', params: { id: id }})
    }
  },
  created: function () {
    this.width = window.innerWidth;
    let that = this;
    window.onresize = function(){
    	that.width = window.innerWidth;
    }

    this.$http.jsonp(window.config.url + '/php/bookapi/index.php').then(response => {
	    this.hotData = response.body.items[1].data.data;
	    this.recommendSrcData = response.body.items[2].data.data;
	    this.maleData = response.body.items[3].data.data;
	    this.femaleData = response.body.items[4].data.data;
	    this.freeData = response.body.items[5].data.data;

	  }, response => {
	    console.log('index list error');
	  });
  }
}
</script>


<style scope>
.book-h5__tag{margin: -3px 7px 4px 0;}
.header-user, .header-checkin{
    opacity: 0.5;
}
</style>
