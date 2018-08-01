<template>
	<div>
		<div class="hot_book">热门小说</div>
		<div class="recommend_item border-bottom" v-for="item of hot_bookList" :key="item.id">	
			<img class="recommend_item_img" :src="item.imgurl"/>
			<div class="recommend_item_content">
				<div class="recommend_item_title">{{item.title}}</div>
				<div class="recommend_item_auter">{{item.auter}}</div>
				<button class="recommend_item_btn">查看详情</button>
			</div>
		</div>
	</div>
</template>

<script>
	export default{
		name:'recommend',
		data(){
			return {
				hot_bookList:[
					{
						id:1,
						imgurl:'http://img1.qunarzz.com/sight/p0/201405/13/cc6b2870049aa5086badad72fed0d36d.jpg_200x200_85a759dc.jpg',
						title:'小说小小说小小说小小说小小说小小说小小说小小说小',
						auter:'天下归元'
					},
						{
						id:2,
						imgurl:'http://img1.qunarzz.com/sight/p0/201405/13/cc6b2870049aa5086badad72fed0d36d.jpg_200x200_85a759dc.jpg',
						title:'小说小小说小小说小小说小小说小小说小小说小小说小',
						auter:'天下归元'
					},
						{
						id:3,
						imgurl:'http://img1.qunarzz.com/sight/p0/201405/13/cc6b2870049aa5086badad72fed0d36d.jpg_200x200_85a759dc.jpg',
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
	.hot_book
		line-height:.8rem
		margin-top:.2rem
		text-indent:.2rem
		background:#eee
	.recommend_item
		display:flex
		overflow:hidden
		border-bottom:1px solid #eee
		.recommend_item_img
			width:1.7rem
			height:1.7rem
			padding:.1rem
		.recommend_item_content
			flex:1	
			padding:.1rem
			min-width:0/*为了让ellipsis()定义的文字溢出时省略号起作用*/
		.recommend_item_title
			line-height:.4rem
			font-size:.32rem
			ellipsis()
		.recommend_item_auter
			line-height:.4rem
			color:#ccc
			ellipsis()
		.recommend_item_btn
			line-height:.44rem
			color:#fff
			background:#ff9300
			padding:0 .2rem
			border-radius:.1rem
			margin-top:.16rem
</style>