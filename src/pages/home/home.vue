<template>
	<div>
		<home-head></home-head>
	</div>
	
</template>

<script>
//	引入组件
import homeHead from './components/homeHead'
export default{
	name:'home',
	components:{//接收组件
		homeHead:homeHead
	}
}
</script>
<style>
</style>