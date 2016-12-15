<template>
  <div id="fault" class="fault" v-show="faultState" v-cloak>
  	<div class="scroll">
  		<header class="fx hd">
			<a class="pt back" @click.prevent="close_layer"></a>
			<h1>请选择</h1>
		</header>
		<div class="weui-panel">
			<ul class="cells">
				<li v-for="(sup_type,index) of data" v-text="sup_type.trouble_name" :data-id="sup_type.trouble_id" @click="get_info" v-cloak></li>
			</ul>
		</div>
  	</div>
	</div>
</template>

<script>
import $ from 'jquery'
export default {
	name: "fault",
	props: ['faultState','productId'],
	data () {
		return {
			data:[],
			api:{
				//				service:'http://139.196.26.165/ShiTengApi',//测试
//				service:'http://weixin.56365.com/ShiTengApi',
				service:'http://192.168.0.71:8080/ShiTengApi',//测试
	    	fault:'/service/trouble.do'
			}
		}
	},
	mounted: function() {
	},
	methods: {
		close_layer:function(){
			this.$emit('close_fault')
		},
		init1:function(){//获取故障类型
				this.$http.get(this.api.service+this.api.fault,{
					params:{
						pro_id:this.productId
					}
				}).then(function(res){
					if(res.data.rtn_no==100){
							this.data=res.data.result;
					}else{
						alert(res.data.rtn_msg)
					}
				},function(res){
					console.log(res)
				})
			},
		get_info: function(e) {
			var pro_name=$(e.target).text();
			var pro_id=$(e.target).attr("data-id");
			var pro_data={
				name:pro_name,
				id:pro_id
			};
			this.$emit('change_fault', pro_data);
			this.close_layer()
		}
	},
	watch: {
		faultState:function(val){
			if(val){
				this.init1()
			}
		}
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
	overflow-x: hidden;
	background-color: #fff;
	.scroll{
		position: absolute;
		top: 0;
		left: 0;
		width: 100%;
		height: auto;
		overflow-x: hidden;
		overflow-y: scroll;
		-webkit-overflow-scrolling: touch;
	header {
		z-index: 999;
		width: 100%;
		height: 45px;
		overflow: hidden;
		text-align: center;
		background-color: #fff;
		color: #2871e4;
		h1{
			font-size: 20px;
			line-height: 45px;
			font-weight: 400;
		}
		.back{
			top: 0;
			left: 0;
			width: 45px;
			height: 100%;
			line-height: 45px;
			color: #2871e4;
			background: url(../assets/images/back.png) no-repeat center;
				background-size: 70%;
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
}
</style>
