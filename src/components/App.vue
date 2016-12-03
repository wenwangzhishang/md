<template>
  <div id="app">
    <div class="weui-tab">
			<!-- nav -->
	    <div class="weui-navbar">
	        <div class="weui-navbar__item" :class="{'weui-bar__item_on':state.repair}" @click="check(0)">
	            报修
	        </div>
	        <div class="weui-navbar__item" :class="{'weui-bar__item_on':state.pretend}" @click="check(1)">
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
		                    <input type="text" name="" class="weui-input" readonly="true" v-model="formsdata.product.name">
		                </div>
		                <div class="weui-cell__ft"></div>
		            </a>
		            <a class="weui-cell weui-cell_access" @click.prevent="open_fault" v-show="state.repair" v-cloak>
		                <div class="weui-cell__hd">
		                    <p>故障类型*</p>
		                </div>
		                <div class="weui-cell__bd">
		                    <input type="text" name="" class="weui-input" readonly="true" v-model="formsdata.fault.name">
		                </div>
		                <div class="weui-cell__ft"></div>
		            </a>
		            <div class="weui-cell" v-show="state.repair" v-cloak>
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
		                    <textarea class="weui-textarea" placeholder="..." readonly="readonly" v-model="formsdata.user_place.name"></textarea>
		                </div>
		                <div class="weui-cell__ft"></div>
		            </a>
		            <div class="weui-cell">
		                <div class="weui-cell__hd"><label class="weui-label">详细地址*</label></div>
		                <div class="weui-cell__bd">
		                    <input class="weui-input" type="text" placeholder="请输入详细地址" v-model="formsdata.user_address">
		                </div>
		            </div>
		            <div class="weui-cell" v-show="state.pretend" v-cloak>
		                <div class="weui-cell__hd"><label class="weui-label">物流状态*</label></div>
		                <div class="weui-cell__bd">
		                    <input class="weui-input" type="tel" pattern="[0-9]*" placeholder="请输入详细地址">
		                </div>
		            </div>
		            <label class="weui-cell weui-check__label" for="x11" v-show="state.pretend" v-cloak>
		                <div class="weui-cell__bd">
		                    <p>需要安装</p>
		                </div>
		                <div class="weui-cell__ft">
		                    <input type="radio" class="weui-check" name="radio1" id="x11">
		                    <span class="weui-icon-checked"></span>
		                </div>
		            </label>
		            <label class="weui-cell weui-check__label" for="x12" v-show="state.pretend" v-cloak>
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
	            	<a class="weui-cell weui-cell_access" @click.prevent="open_date">
	            		<div class="weui-cell__hd">
		                    <p>预约时间*</p>
		                </div>
		                <div class="weui-cell__bd">
		                    <input type="" name="" class="weui-input" placeholder="请选择预约服务时间" readonly="true" v-model="this.formsdata.order_date">
		                </div>
		                <div class="weui-cell__ft"></div>
		            </a>
	        	</div>
       </div>
    </div>
		<div class="fx ft">
			<a href="#" class="weui-btn weui-btn_primary" @click="submit">注册并提交</a>
		</div>
		<product :product-state="sub.product.state" :product-data="sub.product.data" v-on:close_product="sub.product.state=false" v-on:change_product="change_product"></product>
		<fault :fault-state="sub.fault.state" :fault-data="sub.fault.data" v-on:close_fault="sub.fault.state=false" v-on:change_fault="change_fault"></fault>
    <place :place-state="sub.place.state" :place-data.async="sub.place.data" v-on:close_place="sub.place.state=false" v-on:change_place="change_place"></place>
    <date :date-state="sub.date.state" v-on:close_date="sub.date.state=false" v-on:change_date="change_date"></date>
  </div>
</template>

<script>
import $ from 'zepto'
import Product from './Product'
import Fault from './Fault'
import Place from './Place'
import Date from './Date'

export default {
  name: 'app',
  components: {
    Product,
    Fault,
    Date,
    Place
  },
  data () {
    return {
    	state:{
    		repair: true,
    		pretend: false
    	},
    	fault_des:'',//故障描述
      vcode_state:'发送验证码',
      sub:{//子组建状态和数据
      	product:{
      		state:false,
      		data:[]
      	},
      	fault:{
      		state:false,
      		data:[]
      	},
      	place:{
      		state:false,	
      		data:[]
      	},
      	date:{
      		state:false,
      		data:[]
      	}
      },
			formsdata:{
				type:'0',
				product:{//产品类型
					name:'',
					id:''
				},
				fault:{//产品类型
					name:'',
					id:''
				},
				mobile:'',//手机号
				vcode:'',//验证码
				user_name:'',//联系人姓名
				user_mobile:'',//联系人电话
				user_place:{
					name:'',
					id:''
				},//所在地区
				user_address:'',//详细地址
				order_date:''//预约时间
			},
			api:{
//				service:'http://192.168.0.71:8080/ShiTengApi',
				service:'http://weixin.56365.com/ShiTengApi/',
	    	submit:'/service/repaiInstall.do',
	    	product:'/service/product.do',
	    	fault:'/service/trouble.do',
	    	place:'/service/getAreaList.do',
	    	vcode:'/user/getVerifyCode.do'
	    }
    }
  },
	methods: {
			init: function(){
//					document.documentElement.style.overflow='hidden';
			},
			open_product:function(){
				this.get_product_lists();
			},
			open_fault:function(){
				if(this.formsdata.product.name&&this.formsdata.product.id){
					this.get_fault_lists();
				}else{
					alert("请先填写产品")
				}
			},
			open_place:function(){
				this.get_place_lists();
			},
			open_date:function(){
//				this.get_place_lists();
				this.sub.date.state=true
			},
			change_product:function(data){
				this.formsdata.product.name=data.name;
				this.formsdata.product.id=data.id;
			},
			change_fault:function(data){
				this.formsdata.fault.name=data.name;
				this.formsdata.fault.id=data.id;
			},
			change_place:function(data){
				this.formsdata.user_place.name=data.name;
				this.formsdata.user_place.id=data.id;
			},
			change_date:function(data){
//				this.formsdata.user_place.name=data.name;
//				this.formsdata.user_place.id=data.id;
			},
			get_product_lists:function(){//获取产品类型
				this.$http.get(this.api.service+this.api.product).then(function(res){
					if(res.data.rtn_no==100){
							this.sub.product.data=res.data.result;
							this.sub.product.state=true;
							this.formsdata.fault.name='';
					}else{
						alert(res.data.rtn_msg)
					}
				},function(res){
					console.log(res)
				})
			},
			get_fault_lists:function(){//获取故障类型
				console.log(this.formsdata.fault.id);
				this.$http.get(this.api.service+this.api.fault,{
					params:{
						pro_id:this.formsdata.product.id
					}
				}).then(function(res){
					if(res.data.rtn_no==100){
							this.sub.fault.data=res.data.result;
							console.log(this.sub.fault.data);
							this.sub.fault.state=true
					}else{
						alert(res.data.rtn_msg)
					}
				},function(res){
					console.log(res)
				})
			},
			get_place_lists:function(){//获取地区
				this.$http.get(this.api.service+this.api.place,{
					params:{
						parent_id:''
					}
				}).then(function(res){
					if(res.data.rtn_no=="100"){
							this.sub.place.data=res.data.result;
							this.sub.place.state=true
					}else{
						alert(res.data.rtn_msg)
					}
				},function(res){
					console.log(res)
				})
			},
			check: function(index) {
				this.formsdata.type=index.toString();
				if(index == 1) {
					this.state.repair = false;
					this.state.pretend = true
				} else {
					this.state.repair = true;
					this.state.pretend = false
				}
			},
			send_vcode:function(){
				if(this.formsdata.mobile.length==11){
					if(this.vcode_state=="发送验证码"){
						this.$http.get(this.api.service+this.api.vcode,{
							params:{
								mobile:this.formsdata.mobile
							}
						},
						).then(function(res){
							if(res.data.rtn_no="100"){
								this.vcode_track()
							}else{
								alert(res.data.rtn_msg)
							}
					},function(res){
						console.log(res)
					})
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
				this.$http.post(this.api.service+this.api.submit,{
					mobile:this.formsdata.mobile,	//是	string	手机号
					Verifi_Code:this.formsdata.vcode,//是	string	验证码
					pro_id:this.formsdata.product.id,	//是	string	产品类型
					trouble_id:this.formsdata.fault.id,	//是	string	故障类型
					trouble_detail:this.fault_des,	//是	string	故障描述
					username:this.formsdata.user_name,	//是	string	联系人姓名
					phonenumber:this.formsdata.user_mobile,	//是	string	联系人手机号
					area_id:this.formsdata.user_place.id,	//是	string	区ID
					detailaddress:this.formsdata.user_address,	//是	string	详细地址
					status:'0',	//是	string	物流状态 0：需要安装1：货未到预约安装（默认为””）
					style:this.formsdata.type,//是	string	0：报修1：报装
//					appointtime:this.formsdata.order_date
					appointtime:"2016-12-12 12:00-16:00"
				}).then(function(res){
					if(res.data.rtn_no==100){
							alert("提交成功")
						}else{
							alert(res.data.rtn_msg)
						}
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
