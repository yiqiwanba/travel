<template>
	<div class="wrapper">
		<swiper :options="swiperOption" ref="mySwiper">
		    <!-- slides -->
		    <swiper-slide v-for="(item,index) of swiperList" :key="item.id"><img class="swiper-img" :src="item.img_src"/></swiper-slide>
		    <!--<swiper-slide><img class="swiper-img" src="http://img1.qunarzz.com/piao/fusion/1807/48/8128ec070c9d0f02.jpg_750x200_69e45460.jpg"/></swiper-slide>-->
		    
		    <!-- Optional controls -->
		    <div class="swiper-pagination"  slot="pagination"></div>
		   
		  </swiper>
	</div>

</template>

<script>
export default{
	name:'HomeSwiper',
	data () {
		return{
			swiperOption:{
				pagination:'.swiper-pagination',
				loop:true
			},
			swiperList:[
			{
				id:'pic1',
				img_src:'http://img1.qunarzz.com/piao/fusion/1804/9f/e5338f70c42a0502.jpg_750x200_e95e14c7.jpg'
			},
			{
				id:'pic2',
				img_src:'http://img1.qunarzz.com/piao/fusion/1807/48/8128ec070c9d0f02.jpg_750x200_69e45460.jpg'
			}
			]
		}
	}
}
</script>

<style lang="stylus" scoped="scoped">
.wrapper >>> .swiper-pagination-bullet-active/*穿透，wrapper下面只要出现该名字组件样式都是这样*/
	background:#fff
.wrapper
	overflow:hidden
	width:100%
	height:0
	padding-bottom:26.8%/*高度会相对于他的宽度自动撑开31.25%。直接设置高度值是相对于父级元素的高度，不是元素本身的宽度*/
	background:#eee
	.swiper-img
		width: 100%;
	
</style>