<template>
	<div>
		<home-head></home-head>
		<home-swiper></home-swiper>
	</div>
	
</template>

<script>
//	引入组件
import homeHead from './components/homeHead'
import HomeSwiper from './components/swiper'
export default{
	name:'home',
	components:{//接收组件
		homeHead:homeHead,
		HomeSwiper:HomeSwiper
	}
}
</script>
<style>
</style>