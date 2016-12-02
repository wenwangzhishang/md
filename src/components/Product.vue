<template>
  <div id="product" class="product" v-show="showProduct">
		<header class="fx hd">
			<a class="pt back" @click.prevent="close_layer">~</a>
			<h1>请选择</h1>
		</header>
		<div class="weui-panel">
			<ul class="cells">
				<li v-for="(big_type,index) of big_types" v-cloak>
					<p class="title" v-text="big_type" @click.self="pull_down"></p>
					<ul class="insert_cells">
        		<li v-for="(sm_type,index) of sm_types" v-text="sm_type" @click="get_info"></li>
        	</ul>
				</li>
			</ul>
		</div>
	</div>
</template>

<script>
import $ from 'zepto'
export default {
	name: "product",
	props: ['showProduct'],
	data() {
		return {
			formdata:{
				show:false,
				product:'',//产品类型
				fault:'',//故障类型
				fault_des:'',//故障描述
				mobile:'',//手机号
				vcode:'',//验证码
				user_name:'',//联系人姓名
				user_mobile:'',//联系人电话
				user_place:'',//所在地区
				user_location:'',//详细地址
				order_date:''//预约时间
			},
			big_types: [
				'空调',
				'风扇',
				'冰箱',
				'洗衣机',
				'热水器'
			],
			sm_types: [
				'璧扇',
				'吊扇',
				'换气扇',
				'金属扇',
				'塑料扇'
			]
		}
	},
	mounted: function() {
		
	},
	methods: {
		close_layer:function(){
			this.$emit('close_product')
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
			this.$emit('change_product',e.target.innerText);
			this.close_layer()
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
			color: #fff;
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
</style>
