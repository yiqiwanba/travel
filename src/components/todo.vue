<template>
	<li @click="$emit('del',index)">{{value}}{{index}}</li>
</template>

<script>
export default {
	props:['value','index'],
	methods:{
		handledel(){
			this.$emit("del",this.index)
		}
	}
}
</script>
	
<style>
</style>