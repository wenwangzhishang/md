<template>
  <div id="place" class="place" v-show="placeState" v-cloak>
  	<div class="scroll">
  		<header class="fx hd">
			<a class="pt back" @click.prevent="close_layer"></a>
			<h1>请选择</h1>
		</header>
		<div class="weui-panel">
			<ul class="cells">
				<li v-for="(sub_type,index) of data" v-text="sub_type.area_name" :data-id="sub_type.area_id" :data-level="sub_type.level" @click="change_lists" v-cloak></li>
			</ul>
		</div>
  	</div>
	</div>
</template>

<script>
import $ from 'jquery'

export default {
  name: 'place',
  props:['placeState'],
  data () {
    return {
    	data:[],
    	pro_data:{
    		name:'',
    		id:''
    	},
    	api:{
					service:'http://139.196.26.165/ShiTengApi/',//测试
//				service:'http://weixin.56365.com/ShiTengApi/',
	    	place:'/service/getAreaList.do'
	    }
    }
  },
  mounted: function() {
	},
	methods: {
		close_layer:function(){
			this.$emit('close_place')
		},
		init1:function(){//获取地区
				this.$http.get(this.api.service+this.api.place,{
					params:{
						parent_id:''
					}
				}).then(function(res){
					if(res.data.rtn_no=="100"){
							this.data=res.data.result;
							this.pro_data.name='';//qingkong
					}else{
						alert(res.data.rtn_msg)
					}
				},function(res){
					console.log(res)
				})
			},
		change_lists:function(e){
			var level=$(e.target).attr("data-level");//层级
			var pro_name=$(e.target).text();//文字
			this.pro_data.name+=pro_name;//文字积累
			this.pro_data.id=$(e.target).attr("data-id");
			if(level<4){
				this.get_place_lists();
			}else{
				this.get_info();
			}
		},
		get_place_lists:function(){//获取地
			this.$http.get(this.api.service+this.api.place,{
				params:{
					parent_id:this.pro_data.id
				}
			}).then(function(res){
				if(res.data.rtn_no=="100"){
						this.data=res.data.result;
				}else{
					alert(res.data.rtn_msg)
				}
			},function(res){
				console.log(res)
			})
		},
		get_info:function(){	
			this.$emit('change_place', this.pro_data);
			this.close_layer()
		}
	},
//	computed:{
	watch:{
		placeState:function(val){
			if(val){
				this.init1()
			}
		}
	}
}
</script>

<style lang="scss">
.place{
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
		    &>li{
		    	margin: 10px 0;
					padding: 10px 15px;
			    position: relative;
			    -webkit-box-align: center;
			    -webkit-align-items: center;
			    align-items: center;
			    background-color: #fff;
				}
			}
		}
	}
}
</style>
