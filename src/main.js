// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import VueAwesomeSwiper from 'vue-awesome-swiper'
import App from './App'
import router from './router'
import fastClick from "fastclick"
//import reset from "reset-css"
import "style/border.css"
import "style/reset.css"
import "style/iconfont/iconfont.css"
// require styles
import 'swiper/dist/css/swiper.css'
Vue.config.productionTip = false
fastClick.attach(document.body)
Vue.use(VueAwesomeSwiper, /* { default global options } */)
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
	template: '<App/>'
})
