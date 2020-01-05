// 路由器
import VueRouter from 'vue-router'
import login from './vueComponents/login.vue'

var router = new VueRouter( {
	routes: [
		{ path: '/login', component: login }
	]
} )

// 把路由对象暴露出去
export default router