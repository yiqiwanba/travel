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
import axios from "axios"
export default{
	name:'home',
	components:{//接收组件
		homeHead:homeHead,
		HomeSwiper:HomeSwiper,
		iconfontHead:iconfontHead
	},
	data(){
		return{
			
		}
	},
	mounted(){
		this.getHomeInfo()
	},
	methods:{
		getHomeInfo(){
			axios.get('/api/index.json')//在配置项config文件夹下的index.js,把对api的请求转发到本地文件夹的请求,也就是api变成本地的具体文件路径.配置好后重启服务器
			.then(this.getHomeInfoSucc)
		},
		getHomeInfoSucc(e){
			console.log(e)
		}
	}
}
</script>
<style>
</style>