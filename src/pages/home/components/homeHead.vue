<template>
	<div class="head">
		<div class="lf">
			<div class="iconfont back-icon">&#xe624;</div>
		</div>
		<div class="middle"><span class="iconfont">&#xe632;</span>输入城市/景点/游玩主题</div>
		<div class="rg">城市
			<span class="iconfont arrow-right">&#xe665;</span></div>
	</div>
	
</template>

<script>
export default{
	name:"homeHead"
}
</script>

<style  lang="stylus" scoped="">
	/*html
		font-size:50px*/
	@import "~style/varibles.styl"
	.head
		height:.86rem
		display:flex
		color:#fff
		background-color:$bgColor
		line-height:.86rem
	
		.lf
			width:.64rem
			float:left
			.back-icon
				text-align:center
				font-size:.4rem
		.rg
			width:1.24rem
			float:right
			text-align:center
			.arrow-right
				font-size:.24rem
		.middle
			flex:1
			background-color:#fff
			border-radius:1rem
			margin-top:.12rem
			height:.64rem
			margin-left:.2rem
			color:#ccc
			line-height:.64rem
			padding-left:.2rem
			
</style>