<template>
	<div>
		<h1>这是App组件</h1>
		<h1>{{ appMsg }}</h1>

		<router-link to="/login">Login</router-link>
		<router-view></router-view>
	</div>
</template>

<script>
	export default {
		data() {
			return {
				appMsg: 'login msg'
			}
		},
		methods: {
			show() {
				console.log( "调用了login的show方法" );
			}
		}
	}
</script>


<style lang="scss" scoped>

</style>