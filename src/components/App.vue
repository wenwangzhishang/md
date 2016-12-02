<template>
  <div id="app">
    <div class="weui-tab">
			<!-- nav -->
	    <div class="weui-navbar">
	        <div class="weui-navbar__item" :class="{'weui-bar__item_on':show_repair}" @click="check(0)">
	            报修
	        </div>
	        <div class="weui-navbar__item" :class="{'weui-bar__item_on':show_pretend}" @click="check(1)">
	            报装
	        </div>
	    </div>
            <!-- content -->
    	<div class="weui-tab__panel">
            	<!-- item -->
				<div class="weui-cells">
	            	<a class="weui-cell weui-cell_access" @click.prevent="open_product">
	            		<div class="weui-cell__hd">
		                    <p>产品类型*</p>
		                </div>
		                <div class="weui-cell__bd">
		                    <input type="text" name="" class="weui-input" readonly="true" v-model="formsdata.product">
		                </div>
		                <div class="weui-cell__ft"></div>
		            </a>
		            <a class="weui-cell weui-cell_access" @click.prevent="open_fault" v-show="show_repair" v-cloak>
		                <div class="weui-cell__hd">
		                    <p>故障类型*</p>
		                </div>
		                <div class="weui-cell__bd">
		                    <input type="text" name="" class="weui-input" readonly="true" v-model="formsdata.fault">
		                </div>
		                <div class="weui-cell__ft"></div>
		            </a>
		            <div class="weui-cell" v-show="show_repair" v-cloak>
		                <div class="weui-cell__bd">
		                    <textarea class="weui-textarea" placeholder="请输入故障描述" rows="3" v-model="fault_des" maxlength="200"></textarea>
		                    <div class="weui-textarea-counter"><span>0</span>/200</div>
		                </div>
		            </div>
	        	</div>
				<!-- item -->
				<div class="weui-cells">
		           <div class="weui-cell weui-cell_vcode">
		                <div class="weui-cell__hd">
		                    <label class="weui-label">手机号</label>
		                </div>
		                <div class="weui-cell__bd">
		                    <input class="weui-input" type="tel" placeholder="请输入您的手机号" v-model="formsdata.mobile">
		                </div>
		                <div class="weui-cell__ft">
		                    <button class="weui-vcode-btn" v-text="vcode_state" @click="send_vcode"></button>
		                </div>
		            </div>
		            <div class="weui-cell">
		                <div class="weui-cell__hd"><label class="weui-label">验证码</label></div>
		                <div class="weui-cell__bd">
		                    <input class="weui-input" type="tel" placeholder="请输入短信中的验证码" v-model="formsdata.vcode">
		                </div>
		                <div class="weui-cell__ft"></div>
		            </div>
		            <div class="weui-cell">
		                <div class="weui-cell__hd"><label class="weui-label">联系人姓名*</label></div>
		                <div class="weui-cell__bd">
		                    <input class="weui-input" type="text" placeholder="请输入联系人姓名" v-model="formsdata.user_name">
		                </div>
		            </div>
		            <div class="weui-cell">
		                <div class="weui-cell__hd"><label class="weui-label">联系人电话</label></div>
		                <div class="weui-cell__bd">
		                    <input class="weui-input" type="tel" pattern="[0-9]*" placeholder="请输入联系人电话" v-model="formsdata.user_mobile">
		                </div>
		            </div>
		            <a class="weui-cell weui-cell_access" @click.prevent="open_place">
	            		<div class="weui-cell__hd">
		                    <p>所在地区*</p>
		                </div>
		                <div class="weui-cell__bd">
		                    <textarea class="weui-textarea" placeholder="..." v-model="formsdata.user_place"></textarea>
		                </div>
		                <div class="weui-cell__ft"></div>
		            </a>
		            <div class="weui-cell">
		                <div class="weui-cell__hd"><label class="weui-label">详细地址*</label></div>
		                <div class="weui-cell__bd">
		                    <input class="weui-input" type="tel" pattern="[0-9]*" placeholder="请输入详细地址" v-model="formsdata.user_location">
		                </div>
		            </div>
		            <div class="weui-cell" v-show="show_pretend" v-cloak>
		                <div class="weui-cell__hd"><label class="weui-label">物流状态*</label></div>
		                <div class="weui-cell__bd">
		                    <input class="weui-input" type="tel" pattern="[0-9]*" placeholder="请输入详细地址">
		                </div>
		            </div>
		            <label class="weui-cell weui-check__label" for="x11" v-show="show_pretend" v-cloak>
		                <div class="weui-cell__bd">
		                    <p>需要安装</p>
		                </div>
		                <div class="weui-cell__ft">
		                    <input type="radio" class="weui-check" name="radio1" id="x11">
		                    <span class="weui-icon-checked"></span>
		                </div>
		            </label>
		            <label class="weui-cell weui-check__label" for="x12" v-show="show_pretend" v-cloak>
		                <div class="weui-cell__bd">
		                    <p>货到付款预约安装</p>
		                </div>
		                <div class="weui-cell__ft">
		                    <input type="radio" class="weui-check" name="radio1" id="x12">
		                    <span class="weui-icon-checked"></span>
		                </div>
		            </label>
	        	</div>
				<!-- item -->
				<div class="weui-cells">
	            	<a class="weui-cell weui-cell_access" @click.prevent="show_date=true">
	            		<div class="weui-cell__hd">
		                    <p>预约时间*</p>
		                </div>
		                <div class="weui-cell__bd">
		                    <input type="" name="" class="weui-input" placeholder="请选择预约服务时间" readonly="true">
		                </div>
		                <div class="weui-cell__ft"></div>
		            </a>
	        	</div>
       </div>
    </div>
		<div class="fx ft">
			<a href="#" class="weui-btn weui-btn_primary">注册并提交</a>
		</div>
		<!--<hello></hello>-->
		<product :show-product="show_product" v-on:close_product="show_product=false" v-on:change_product="change_product"></product>
		<fault :show-fault="show_fault" v-on:close_fault="show_fault=false" v-on:change_fault="change_fault"></fault>
    <place :show-place="show_place" v-on:close_place="show_place=false" v-on:change_place="change_place"></place>
    <!--<date></date>-->
  </div>
</template>

<script>
import $ from 'zepto'
import Product from './Product'
import Fault from './Fault'
import Place from './Place'
//import Date from 'Date'

export default {
  name: 'app',
  components: {
    Product,
    Fault,
    Place
  },
  data () {
    return {
	  	show_repair: true,
			show_pretend: false,
	  	show_product:false,
	  	show_fault:false,
	  	show_place:false,
//    	show_date:false,
      fault_des:'',//故障描述
      vcode_state:'发送验证码',
			formsdata:{
				product:'',//产品类型
				fault:'',//故障类型
				mobile:'',//手机号
				vcode:'',//验证码
				user_name:'',//联系人姓名
				user_mobile:'',//联系人电话
				user_place:'',//所在地区
				user_location:'',//详细地址
				order_date:''//预约时间
			},
			api:{
	    	submit:'',
	    	vcode:''
	    }
    }
  },
	methods: {
			init: function() {},
			open_product:function(){
				this.show_product=true
			},
			open_fault:function(){
				if(this.formsdata.product){
					document.documentElement.style.overflow='hidden';
					this.show_fault=true;
				}else{
					alert("请先填写产品")
				}
			},
			open_place:function(){
				this.show_place=true
			},
			change_product:function(val){
				var self=this;
				this.formsdata.product=val
			},
			change_fault:function(val){
				var self=this;
				this.formsdata.fault=val
			},
			change_place:function(val){
				var self=this;
				this.formsdata.user_place=val
			},
			check: function(index) {
				if(index == 1) {
					this.show_repair = false;
					this.show_pretend = true
				} else {
					this.show_repair = true;
					this.show_pretend = false
				}
			},
			send_vcode:function(){
				if(this.formsdata.mobile.length==11){
					if(this.vcode_state=="发送验证码"){
							//				this.$http.post(this.api.submit,{}).then(function(res){
					this.vcode_track()
//				},function(res){
//					alert("err")
//				})
				}
				}else{
					alert('手机格式有误')
				}
			},
			vcode_track:function(){
				var self=this;
				var t=60;
				var timer=setInterval(function(){
					if(t>0){
						t--;
						self.vcode_state="重新发送("+t+')';
					}else{
						self.vcode_state="请发送验证码";
						clearInterval(timer)
					}
				},1000)
			},
			submit:function(){
				this.$http.post(this.api.submit).then(function(res){
					
				},function(res){
					alert("err")
				})
			}
		},
		watch: {
			fault_des:function(val){
				$(".weui-textarea-counter>span").text(val.length)
			}
		}
}
</script>

<style lang="scss">
.weui-tab{
	padding-bottom: 100px;
	background-color: #eee;
	.weui-navbar{
		&~.weui-tab__panel {
	    padding-top: 50px;
	    padding-bottom: 0;
	    background-color: #eee;
	    .weui-input{
				text-align: center;
				color: #333
			}
			.weui-textarea{
				padding: 10px 15px;
				height: 100px;
			}
		}
	}
}
.ft{
	width: 100%;
	background-color: #fff;
	.weui-btn{
		width: 90%;
		margin: 10px auto
	}
}
</style>
