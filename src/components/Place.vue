<template>
  <div id="place" class="place" v-show="showPlace" v-cloak>
		<header class="fx hd">
			<a class="pt back" @click.prevent="showPlace=false">~</a>
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
  name: 'place',
  props:['showPlace'],
  data () {
    return {
			big_types: [
				'北京市',
				'天津市',
				'河北省',
				'山西省',
				'内蒙古自治区',
				'辽宁省',
				'吉林省',
				'黑龙江省',
				'上海市',
				'江苏省',
				'浙江省',
				'安徽省',
				'福建省',
				'江西省',
				'山东省',
				'河南省',
				'湖北省',
				'湖南省'
			]
    }
  },
  mounted: function() {
		console.log('loading');
	},
	methods: {
		get_info: function(e) {
//			form.formdata.user_place = e.target.innerText;
			this.show=false;
		}
	},
	watch: {

	}
}
</script>

<style lang="scss">
.place {
	z-index: 9999;
	position: fixed;
	top: 0;
	left: 0;
	width: 100%;
	height: 100%;
	background-color: #fff;
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
</style>
