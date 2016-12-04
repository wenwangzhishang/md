<template>
  <div id="product" class="product" v-show="productState" v-cloak>
  	<div class="scroll">
  		<header class="fx hd">
			<a class="pt back" @click.prevent="close_layer"></a>
			<h1>请选择</h1>
			</header>
			<div class="weui-panel">
				<ul class="cells">
					<li v-for="(sup_type,index) of data" v-cloak>
						<p class="title" v-text="sup_type.pro_name" :data-id="sup_type.pro_id" @click.self="pull_down"></p>
						<ul class="insert_cells">
	        		<li v-for="(sub_type,index) of sup_type.bean" v-text="sub_type.pro_name" :data-id="sub_type.pro_id" @click="get_info"></li>
	        	</ul>
					</li>
				</ul>
			</div>
  	</div>
	</div>
</template>

<script>
import $ from 'jquery'
export default {
	name: "product", 
	props: ['productState'],
	data() {
		return {
			data:[],
			api:{
				service:'http://139.196.26.165/ShiTengApi/',//测试
//				service:'http://weixin.56365.com/ShiTengApi/',
	    	product:'/service/product.do',
			}
		}
	},
	mounted: function() {
	},
	methods: {
		close_layer:function(){
			this.$emit('close_product')
		},
		init1:function(){//获取产品类型
				this.$http.get(this.api.service+this.api.product).then(function(res){
					if(res.data.rtn_no==100){
							this.data=res.data.result;
//							this.formsdata.fault.name='';
					}else{
						alert(res.data.rtn_msg)
					}
				},function(res){
					console.log(res)
				})
		},
		pull_down: function(e) {
			var cells = $(".insert_cells.show");
			var titles = $(".title.down");
			for(var i = 0, len = cells.length; i < len; i++) {
				titles.eq(i).removeClass('down');
				cells.eq(i).removeClass('show')
			}
			$(e.target).addClass('down');
			$(e.target).next().addClass('show')
		},
		get_info: function(e) {
			var pro_name=$(e.target).text();
			var pro_id=$(e.target).attr("data-id");
			var pro_data={
					name:pro_name,
					id:pro_id
			};
			this.$emit('change_product',pro_data);
			this.close_layer()
		}
	},
	watch:{
		productState:function(val){
			if(val){
				this.init1()
			}
		}
	}
}
</script>

<style lang="scss">
.product{
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
				color: #fff;
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
		    &>li>.title{
					margin: 10px 0;
					padding: 10px 15px;
				    position: relative;
				    -webkit-box-align: center;
				    -webkit-align-items: center;
				    align-items: center;
				    background-color: #fff;
				    &:after{
							content: " ";
					    display: inline-block;
					    height: 6px;
					    width: 6px;
					    border-width: 2px 2px 0 0;
					    border-color: #c8c8cd;
					    border-style: solid;
					    -webkit-transform: matrix(.71,.71,-.71,.71,0,0);
					     transform: matrix(.71,.71,-.71,.71,0,0);
					    position: relative;
					    top: -2px;
					    position: absolute;
					    top: 50%;
					    margin-top: -4px;
					    right: 15px;
						}
						&.down:after{
							border-width: 0 2px 2px 0;
						}
				}
				.insert_cells{
					display: none;
					background-color: #eee;
					&.show{
						display: block;
					}
					li{
						padding: 10px 15px;
					}
				}
			}
			}
		}	
}
</style>
