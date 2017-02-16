<template>
  <div id="root">
  	<transition name="slide" enter-active-class="animated slideInRight fast" leave-active-class="animated slideOutLeft fast">
  		
				<router-view></router-view>
			
    </transition>
  </div>
</template>

<script>
import './assets/all.css'

export default {
  name: 'app'
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
