<template>
	<div>
		<home-head></home-head>
		<home-swiper></home-swiper>
		<iconfont-head></iconfont-head>
	</div>
	
</template>

<script>
//	引入组件
import homeHead from './components/homeHead'
import HomeSwiper from './components/swiper'
import iconfontHead from './components/iconfont'
export default{
	name:'home',
	components:{//接收组件
		homeHead:homeHead,
		HomeSwiper:HomeSwiper,
		iconfontHead:iconfontHead
	}
}
</script>
<style>
</style>