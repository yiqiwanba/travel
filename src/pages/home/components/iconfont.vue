<template>
<div class="icon">
	<swiper :options="swiperOption" ref="mySwiper">
	<swiper-slide v-for="(page_list,index) of pages" :key="index">
	<div class="icon-item" v-for="item of page_list" :key="item.id">
		<div class="img_box">
			<img class="icon-item-pic" :src='item.imgurl'/>
		</div>
		<p class="icon_text">{{item.desc}}</p>
	</div>
	
	
	</swiper-slide>
	</swiper>
</div>
</template>

<script>
export default{
	name:'iconfontHead',
	data(){
		return{
			swiperOption:{
				loop:true,
				autoplay:2000
			},
			iconList:[{
				id:1,
				imgurl:"http://img1.qunarzz.com/piao/fusion/1803/95/f3dd6c383aeb3b02.png",
				desc:"门票门票门票门票"
			},
			{
				id:2,
				imgurl:"http://img1.qunarzz.com/piao/fusion/1804/ff/fdf170ee89594b02.png",
				desc:"门票"
			},
			{
				id:3,
				imgurl:"http://img1.qunarzz.com/piao/fusion/1803/95/f3dd6c383aeb3b02.png",
				desc:"门票"
			},
			{
				id:4,
				imgurl:"http://img1.qunarzz.com/piao/fusion/1804/ff/fdf170ee89594b02.png",
				desc:"门票"
			},{
				id:5,
				imgurl:"http://img1.qunarzz.com/piao/fusion/1803/95/f3dd6c383aeb3b02.png",
				desc:"门票"
			},
			{
				id:6,
				imgurl:"http://img1.qunarzz.com/piao/fusion/1804/ff/fdf170ee89594b02.png",
				desc:"门票"
			},
			{
				id:7,
				imgurl:"http://img1.qunarzz.com/piao/fusion/1803/95/f3dd6c383aeb3b02.png",
				desc:"门票"
			},{
				id:8,
				imgurl:"http://img1.qunarzz.com/piao/fusion/1804/ff/fdf170ee89594b02.png",
				desc:"门票"
			},
			{
				id:9,
				imgurl:"http://img1.qunarzz.com/piao/fusion/1803/95/f3dd6c383aeb3b02.png",
				desc:"门票"
			}]
		}
	},
	computed:{
		pages () {
			const pages=[]
			this.iconList.forEach((item,index)=>{
				const page = Math.floor(index/8)
				if(!pages[page]){
					pages[page]=[]
				}
				pages[page].push(item)
			})
//			pages.forEach((item,index)=>{
//				item.push(index)
//			})
			console.log(pages)
			return pages
		}
	}
}
</script>

<style lang="stylus" scoped="scoped">
@import "~style/mixins.styl"
	.icon >>> .swiper-container
		width:100%
		height:0
		padding-bottom:50%
		overflow:hidden
		.icon-item
			width:25%
			height:0
			padding-bottom:25%
			float:left
			position:relative
			text-align:center
			.img_box
				position:absolute
				top:0
				left:0
				right:0
				bottom:.44rem
				box-sizing:border-box
				padding:.1rem
				.icon-item-pic
					height:100%
					display:block
					margin:0 auto
			.icon_text
				position:absolute
				bottom:0
				left:0
				right:0
				text-align:center
				ellipsis()
				
</style>