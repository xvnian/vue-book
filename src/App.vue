<template>
  <div id="root">
  	<transition name="slide" :enter-active-class="getEnterClass()" :leave-active-class="getLeaveClass()" v-on:after-leave="afterLeave"
  v-on:leave-cancelled="leaveCancelled">
  		
				<router-view></router-view>
			
    </transition>
  </div>
</template>

<script>
import './assets/all.css'
// window.addEventListener('popstate', function (e) {
// 	console.log(1)
// })
export default {
  name: 'app',
  data(){
  	return {
  		str:'animated slideInRight fast'
  	}
  },
  methods: {
  	afterLeave(){
  		window.isBack = false
  	},
  	leaveCancelled(){
  		window.isBack = false
  	},
  	getEnterClass(){
  		
  		// console.log(window.isBack)
  		// console.log(window.flag++)
  		if(window.isBack == false){
  			return 'animated slideInRight fast'
  		} else {
  			return 'animated slideInLeft fast'
  		}
  	},
  	getLeaveClass(){
  		// console.log(window.isBack)
  		// console.log(window.flag++)
  		if(window.isBack == false){
  			return 'animated slideOutLeft fast'
  		} else {
  			return 'animated slideOutRight fast'
  		}
  	}
  }
}
</script>
<style>
/*@import url(assets/all.css)*/
/*transition*/
#root > div{
	position: absolute;
	width: 100%;
	height: 100%;
}

</style>
