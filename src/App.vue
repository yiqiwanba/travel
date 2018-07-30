<template>
  <div id="app">
   <!--显示当前路由地址所对应的内容-->
   <router-view/>
  </div>
  
</template>

<script>
import home from './pages/home/home'
export default {
	components:{
		'home':home
	},

  name: 'App',
 data(){
 	return {
// 		value:'',
// 		list:[]
 	}
 },
  methods:{
  	
  }
  
}
</script>

<style>

</style>
