<template>
  <div id="date" class="date" v-show="dateState" v-cloak>
  	<div class="scroll">
  		<header class="fx hd">
			<a class="pt back" @click.prevent="close_layer"></a>
			<h1>请选择</h1>
			</header>
    	<div class="demo-wrapper demo-wrapper-calendarBasic">
    		<input id="calendarBasic-demo"/>
			</div>
    	<div class="weui-cells__title">
    			<h3>服务时间段</h3>
    		</div>
    	<div class="weui-cells">
    		<div class="weui-cell">
    			<div class="weui-cell__hd">
    				<a href="#" class="weui-btn weui-btn_mini weui-btn_default weui-btn_primary" @click.prevent='sel_time'>08:00-12:00</a>
    			</div>
    			<div class="weui-cell__bd">
    				<a href="#" class="weui-btn weui-btn_mini weui-btn_default" @click.prevent='sel_time'>12:00-16:00</a>
    			</div>
    			<div class="weui-cell__ft">
    				<a href="#" class="weui-btn weui-btn_mini weui-btn_default" @click.prevent='sel_time'>16:00-20:00</a>
    			</div>
    		</div>
			</div>
			<p class="small">温馨提示：服务商接单后将与您最终确认预约时间，敬请留意。</p>
			<a href="#" class="submit weui-btn weui-btn_primary" @click.prevent="submit_date">确定</a>
  	</div>
  </div>
</template>

<script>
import $ from 'jquery'
//import mobiscroll from 'mobiscrollCalendar'

export default {
  name: 'date',
  props:['dateState'],
  data () {
    return {
    	btn_state:{
    		dis:false,
    		sel:false,
    		unsel:true
    	},
      date_data:{
      	date:'',
      	time:''
      }
    }
  },
  mounted:function(){
  	//初始化
  	this.init1();
		var that=this;
			$('#calendarBasic-demo').on('change',function(){
	  		var sel_date=$('#calendarBasic-demo').val().substring(8,10);////判断当天时间节点
	  		var now = new Date();
				if(sel_date==now.getDate()+1){
					var now_hour=now.getHours();
					if(now_hour>=8&&now_hour<12){
						$('.weui-cell .weui-btn').eq(0).attr('class','weui-btn weui-btn_mini weui-btn_default weui-btn_primary');
						$('.weui-cell .weui-btn').eq(1).attr('class','weui-btn weui-btn_mini weui-btn_default');
						$('.weui-cell .weui-btn').eq(2).attr('class','weui-btn weui-btn_mini weui-btn_default');
					}else if(now_hour>=12&&now_hour<16){
						$('.weui-cell .weui-btn').eq(0).attr('class','weui-btn weui-btn_mini weui-btn_default weui-btn_disabled');
						$('.weui-cell .weui-btn').eq(1).attr('class','weui-btn weui-btn_mini weui-btn_default weui-btn_primary');
						$('.weui-cell .weui-btn').eq(2).attr('class','weui-btn weui-btn_mini weui-btn_default');
					}else if(now_hour>=16&&now_hour<20){
						$('.weui-cell .weui-btn').eq(0).attr('class','weui-btn weui-btn_mini weui-btn_default weui-btn_disabled');
						$('.weui-cell .weui-btn').eq(1).attr('class','weui-btn weui-btn_mini weui-btn_default weui-btn_disabled');
						$('.weui-cell .weui-btn').eq(2).attr('class','weui-btn weui-btn_mini weui-btn_default weui-btn_primary');
					}
				}else{
					$('.weui-cell .weui-btn').eq(0).attr('class','weui-btn weui-btn_mini weui-btn_default weui-btn_primary');
					$('.weui-cell .weui-btn').eq(1).attr('class','weui-btn weui-btn_mini weui-btn_default');
					$('.weui-cell .weui-btn').eq(2).attr('class','weui-btn weui-btn_mini weui-btn_default');
				}
				that.date_data.date=$('#calendarBasic-demo').val();
				that.date_data.time=$('.weui-cell .weui-btn_primary').text();
//				console.log(that.date_data.time)
			})
  },
  methods:{
  	init1:function(){
  		var now = new Date(),
         min = new Date(now.setDate(now.getDate() + 1)),
         max = new Date(now.getFullYear(), (now.getMonth()+1), now.getDate()-2);
	    $('#calendarBasic-demo').mobiscroll().calendar({
	        theme: 'mobiscroll',      // Specify theme like: theme: 'ios' or omit setting to use default
	        lang: 'zh',    // Specify language like: lang: 'pl' or omit setting to use default
	        display: 'inline',  // Specify display mode like: display: 'bottom' or omit setting to use default
	        mode: 'scroller',         // More info about mode: http://docs.mobiscroll.com/2-17-1/calendar#!opt-mode
          maxDate: max,
        	minDate: min
	    });
	    $('.dw-cal-today').find('.dw-cal-day-fg').text('今天');//初始化
			var now_hour=now.getHours();
				if(now_hour>=8&&now_hour<12){
					$('.weui-cell .weui-btn').eq(0).attr('class','weui-btn weui-btn_mini weui-btn_default weui-btn_primary');
					$('.weui-cell .weui-btn').eq(1).attr('class','weui-btn weui-btn_mini weui-btn_default');
					$('.weui-cell .weui-btn').eq(2).attr('class','weui-btn weui-btn_mini weui-btn_default');
				}else if(now_hour>=12&&now_hour<16){
					$('.weui-cell .weui-btn').eq(0).attr('class','weui-btn weui-btn_mini weui-btn_default weui-btn_disabled');
					$('.weui-cell .weui-btn').eq(1).attr('class','weui-btn weui-btn_mini weui-btn_default weui-btn_primary');
					$('.weui-cell .weui-btn').eq(2).attr('class','weui-btn weui-btn_mini weui-btn_default');
				}else if(now_hour>=16&&now_hour<20){
					$('.weui-cell .weui-btn').eq(0).attr('class','weui-btn weui-btn_mini weui-btn_default weui-btn_disabled');
					$('.weui-cell .weui-btn').eq(1).attr('class','weui-btn weui-btn_mini weui-btn_default weui-btn_disabled');
					$('.weui-cell .weui-btn').eq(2).attr('class','weui-btn weui-btn_mini weui-btn_default weui-btn_primary');
				}
				this.date_data.date=now.getFullYear()+"/"+(now.getMonth()+1)+"/"+now.getDate();
				this.date_data.time=$('.weui-cell .weui-btn_primary').text();
//	    	console.log(this.date_data.date+" "+this.date_data.time)
  	},
  	select_date:function(){
					
  	},
  	close_layer:function(){
			this.$emit('close_date')
		},
		sel_time:function(e){
			if(!$(e.target).hasClass("weui-btn_disabled")){
				this.date_data.time=$(e.target).text();
				if(!$(e.target).hasClass("weui-btn_primary")){
				var btn_lists=$(".weui-cell .weui-btn");
				for(var i=0,len=btn_lists.length;i<len;i++){
					if(btn_lists.eq(i).hasClass('weui-btn_primary')){
						btn_lists.eq(i).removeClass("weui-btn_primary")
					}
				}
				$(e.target).addClass("weui-btn_primary");
			}
			}
		},
		submit_date:function(){
//			console.log(this.date_data)
			this.$emit('change_date',this.date_data);
			this.close_layer()
		}
  }
}
</script>

<style lang="scss">
.date {
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
				background: url(../assets/images/back.png) no-repeat center;
				background-size: 70%;
				color: #2871e4;	
			}
		}
		.demo-wrapper{
			margin-top: 45px;
		#calendarBasic-demo{
			display: none;
		}
		.mbsc-mobiscroll{
			width: 100%;
			.dw{
				max-width: 100%;
				width: 100%;
				.dwwr{
					.dw-cal-btn-txt{
						color: #2871e4;
					}
					.dw-cal-days th{
						color: #2871e4;
						border-bottom: 1px solid #2871e4;
					}
					.dw-cal-today{
							color: #2871e4;
						}
					.dw-sel{
						.dw-i{
							background-color: #2871e4;
							border-radius: 50%;
						}
					}
				}
			}
		}
		}
    .weui-cells{
    	.weui-cell{
    		text-align: center;
    		.weui-btn_primary{
    			color: #fff;
    		}
    	}
    }
		.small{
			margin: 15px;
			font-size: .8em;
		}
		.submit{
			margin: 30px 15px;
			text-align: center;
		}
	}
	
}
</style>
