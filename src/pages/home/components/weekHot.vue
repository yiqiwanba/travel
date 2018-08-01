<template>
	<div>
		<div class="week_hot">本周热门</div>
		<div class="recommend_item border-bottom" v-for="(item,index) of week_hotList" :key="item.id">	
			<div class="week_img_box">
				<img class="week_item_img" :src="item.imgurl"/>
			</div>
			
			<div class="week_item_content">
				<div class="week_item_title">{{item.title}}</div>
				<div class="week_item_auter">{{item.auter}}</div>
			</div>
		</div>
	</div>
</template>

<script>
	export default{
		name:'weekHot',
		data(){
			return {
				week_hotList:[
					{
						id:1,
						imgurl:'http://img1.qunarzz.com/sight/source/1505/37/c1dfc721e6a7fa.jpg_r_640x214_c43f0f37.jpg',
						title:'小说小小说小小说小小说小小说小小说小小说小小说小',
						auter:'天下归元'
					},
						{
						id:2,
						imgurl:'http://img1.qunarzz.com/sight/source/1505/37/c1dfc721e6a7fa.jpg_r_640x214_c43f0f37.jpg',
						title:'小说小小说小小说小小说小小说小小说小小说小小说小',
						auter:'天下归元'
					},
						{
						id:3,
						imgurl:'http://img1.qunarzz.com/sight/source/1505/37/c1dfc721e6a7fa.jpg_r_640x214_c43f0f37.jpg',
						title:'小说小小说小小说小小说小小说小小说小小说小小说小',
						auter:'天下归元'
					}
				]
			}
		}
	}
</script>

<style lang="stylus" scoped="scoped">
@import "~style/mixins.styl"
	.week_hot
		line-height:.8rem
		margin-top:.2rem
		text-indent:.2rem
		background:#eee
	.week_img_box
		width:100%
		height:0
		padding-bottom:33.9%
		overflow:hidden
		.week_item_img
			width:100%
	.week_item_content
		padding:.1rem
		.week_item_title
			line-height:.4rem
			font-size:.32rem
			ellipsis()
		.week_item_auter
			line-height:.4rem
			color:#ccc
			ellipsis()	
			
</style>

