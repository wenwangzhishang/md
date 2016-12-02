<template>
  <div id="fault" class="fault" v-show="showFault" v-cloak>
		<header class="fx hd">
			<a class="pt back" @click.prevent="showFault=false">~</a>
			<h1>请选择</h1>
		</header>
		<div class="weui-panel">
			<ul class="cells">
				<li v-for="(big_type,index) of big_types" v-text="big_type" @click="get_info" v-cloak></li>
			</ul>
		</div>
	</div>
</template>

<script>
export default {
	name: "fault",
	props: ['showFault'],
	data () {
		return {
			big_types: [
				'通电跳闸',
				'自动开关机',
				'内机异味',
				'故障灯亮起',
				'物联网连接故障'
			]
		}
	},
	mounted: function() {
		console.log('loading');
	},
	methods: {
		get_info: function(e) {
//			form.formdata.product = e.target.innerText;
//			this.show=false;
		}
	},
	watch: {

	}
}
</script>
<style lang="scss">
.fault {
	z-index: 9999;
	position: fixed;
	top: 0;
	left: 0;
	width: 100%;
	height: 100%;
	background-color: #fff;
	header {
		z-index: 999;
		width: 100%;
		height: 45px;
		overflow: hidden;
		text-align: center;
		background-color: #333;
		color: #fff;
		h1{
			font-size: 20px;
			line-height: 45px;
		}
		.back{
			top: 0;
			left: 0;
			width: 45px;
			height: 100%;
			line-height: 45px;
			color: #fff
		}
	}
	.weui-panel {
	    padding-top: 45px;
	    padding-bottom: 0;
	    margin: 0;
	    background-color: #eee;
			.cells{
		    background-color: #eee;
		    line-height: 1.41176471;
		    font-size: 17px;
		    overflow: hidden;
		    position: relative;
		    &>li{
		    	margin: 10px 0;
					padding: 10px 15px;
			    position: relative;
			    -webkit-box-align: center;
			    -webkit-align-items: center;
			    align-items: center;
			    background-color: #fff
				}
			}
	}
}
</style>
