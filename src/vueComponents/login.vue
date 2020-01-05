<template>
	<div>
		<h1>这是登录组件</h1>
	</div>
</template>

<script>
	export default {
		data() {
			return {
				loginMsg: 'login msg'
			}
		},
		methods: {
			show() {
				console.log( "调用了login的show方法" );
			}
		}
	}
</script>

<style lang="less" scoped>

</style>