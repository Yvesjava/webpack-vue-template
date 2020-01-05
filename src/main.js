// 入口文件
import '@babel/polyfill'
import './css/index.css'
import './css/index.less'
import './css/index.scss'
import Vue from 'vue'
import VueRouter from 'vue-router'
import router from './router.js'
import app from './App.vue'

Vue.use(VueRouter)

var vm = new Vue( {
	el: '#app',
	data: {
		msg: '123'
	},
	render: c => c( app ),
	router
} )
