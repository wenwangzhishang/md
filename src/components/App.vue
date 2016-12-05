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
		                    <textarea class="weui-textarea" placeholder="" readonly="readonly" v-model="formsdata.user_place.name"></textarea>
		                </div>
		                <div class="weui-cell__ft"></div>
		            </a>
		            <div class="weui-cell">
		                <div class="weui-cell__hd"><label class="weui-label">详细地址*</label></div>
		                <div class="weui-cell__bd">
		                    <input class="weui-input" type="text" placeholder="请输入详细地址" v-model="formsdata.user_address">
		                </div>
		            </div>
		            <div class="weui-cell weui-cell_select weui-cell_select-after" v-show="state.pretend" v-cloak>
		                <div class="weui-cell__hd">
		                    <label for="" class="weui-label">物流状态*</label>
		                </div>
		                <div class="weui-cell__bd">
		                    <select class="weui-select" name="select2" v-model="formsdata.status.name">
		                        <option>需要安装</option>
		                        <option>货到付款预约安装</option>
		                    </select>
		                </div>
		            </div>
	        	</div>
				<!-- item -->
				<div class="weui-cells">
	            	<a class="weui-cell weui-cell_access" @click.prevent="open_date">
	            		<div class="weui-cell__hd">
		                    <p>预约时间*</p>
		                </div>
		                <div class="weui-cell__bd">
		                    <input type="" name="" class="weui-input" placeholder="请选择预约服务时间" readonly="true" v-model="formsdata.order_date">
		                </div>
		                <div class="weui-cell__ft"></div>
		            </a>
	        	</div>
       </div>
    </div>
		<div class="fx ft">
			<a href="#" class="weui-btn weui-btn_primary" @click="submit">注册并提交</a>
		</div>
		<product :product-state="sub.product.state" v-on:close_product="sub.product.state=false" v-on:change_product="change_product"></product>
		<fault :fault-state="sub.fault.state" :product-id="formsdata.product.id" v-on:close_fault="sub.fault.state=false" v-on:change_fault="change_fault"></fault>
    <place :place-state="sub.place.state" v-on:close_place="sub.place.state=false" v-on:change_place="change_place"></place>
    <date :date-state="sub.date.state" v-on:close_date="sub.date.state=false" v-on:change_date="change_date"></date>
  </div>
</template>

<script>
import $ from 'jquery'
//import attachFastClick from 'fastclick'
//attachFastClick(document.body)
import Product from './Product'
import Fault from './Fault'
import Place from './Place'
import Date from './Date'
export default {
  name: 'app',
  components: {
    Product,
    Fault,
  	Place,
    Date
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
				user_place:{//所在地区
					name:'',
					id:''
				},
				user_address:'',//详细地址
				order_date:'',//预约时间
				status:{
					name:'需要安装',
					val:'0'
				},//是否需要安装
			},
			api:{
				service:'http://139.196.26.165/ShiTengApi/',//测试
//				service:'http://weixin.56365.com/ShiTengApi/',
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
					this.sub.product.state=true;
					document.documentElement.style.overflow='hidden';
			},
			open_fault:function(){
				if(this.formsdata.product.name&&this.formsdata.product.id){
					this.sub.fault.state=true;			
					document.documentElement.style.overflow='hidden';
				}else{
					alert("请先填写产品")
				}
			},
			open_place:function(){
					this.sub.place.state=true;
				document.documentElement.style.overflow='hidden';
			},
			open_date:function(){
				this.sub.date.state=true;
				document.documentElement.style.overflow='hidden';
			},
			change_product:function(data){
				document.documentElement.style.overflow='auto';
				this.formsdata.product.name=data.name;
				this.formsdata.product.id=data.id;
			},
			change_fault:function(data){
				document.documentElement.style.overflow='auto';
				this.formsdata.fault.name=data.name;
				this.formsdata.fault.id=data.id;
			},
			change_place:function(data){
				document.documentElement.style.overflow='auto';
				this.formsdata.user_place.name=data.name;
				this.formsdata.user_place.id=data.id;
			},
			change_date:function(data){
				document.documentElement.style.overflow='auto';
				this.formsdata.order_date=data.date+" "+data.time;
			},
			check: function(index) {
				this.formsdata.type=index.toString();
				if(index == 1) {
					this.state.repair = false;
					this.state.pretend = true;
					this.formsdata.type="1";
				} else {
					this.state.repair = true;
					this.state.pretend = false;
					this.formsdata.type="0";
				}
			},
			send_vcode:function(){//发送验证码
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
						self.vcode_state="发送验证码";
						clearInterval(timer)
					}
				},1000)
			},
			submit:function(){
				if(this.formsdata.status.name=='需要安装'){
					this.formsdata.status.val='0'
				}else{
					this.formsdata.status.val='1'
				}
				if(this.formsdata.mobile!=''){
					if(this.formsdata.vcode!=''){
						if(this.formsdata.product.id!=''){
							if(this.formsdata.user_name!=''){
								if(this.formsdata.user_mobile!=''){
									if(this.formsdata.user_place.id!=''){
										if(this.formsdata.user_address!=''){
											if(this.formsdata.order_date!=''){
												this.post()
						}else{
							alert("请选择预定时间")
						}
						}else{
							alert("请填写详细地址")
						}
						}else{
							alert("请选择所在地区")
						}
						}else{
							alert("请填写联系人电话")
						}
						}else{
							alert("请填写联系人姓名")
						}
						}else{
							alert("请选择产品类型")
						}
					}else{
						alert("请输入验证码")
					}
				}else{
					alert("请填写手机号")
				};
				
			},
			post:function(){
				var post_data={
					mobile:this.formsdata.mobile,	//是	string	手机号
					verify_code:this.formsdata.vcode,//是	string	验证码
					pro_id:this.formsdata.product.id,	//是	string	产品类型
					trouble_id:this.formsdata.fault.id,	//是	string	故障类型
					trouble_detail:this.fault_des,	//是	string	故障描述
					username:this.formsdata.user_name,	//是	string	联系人姓名
					phonenumber:this.formsdata.user_mobile,	//是	string	联系人手机号
					area_id:this.formsdata.user_place.id,	//是	string	区ID
					detailaddress:this.formsdata.user_address,	//是	string	详细地址
					status:this.formsdata.status.val,	//是	string	物流状态 0：需要安装1：货未到预约安装（默认为””）
					style:this.formsdata.type,//是	string	0：报修1：报装
					appointtime:this.formsdata.order_date//预定时间
				};
				this.$http.post(this.api.service+this.api.submit,post_data).then(function(res){
					if(res.data.rtn_no==100){
							alert("提交成功")
						}else{
							alert(res.data.rtn_msg)
						}
				},function(res){
					alert("系统错误，请刷新")
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
		position: fixed;
		z-index: 99;
		top: 0;
		left: 0;
		width: 100%;
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
				min-height: 30px;
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
