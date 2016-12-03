<template>
  <div id="date" class="date" v-show="dateState">
		<div class="weui-panel">
    	<!--<input type="date" />-->
    	<div class="weui-cells">
    		<div class="weui-cells__title">
    			<h3>服务时间段</h3>
    		</div>
    		<div class="weui-cell">
    			<div class="weui-cell__hd">
    				<a href="#" class="weui-btn weui-btn_mini weui-btn_primary">08:00-12:00</a>
    			</div>
    			<div class="weui-cell__bd">
    				<a href="#" class="weui-btn weui-btn_mini weui-btn_primary">12:00-16:00</a>
    			</div>
    			<div class="weui-cell__ft">
    				<a href="#" class="weui-btn weui-btn_mini weui-btn_primary">16:00-20:00</a>
    			</div>
    		</div>
			</div>
			<p class="small">温馨提示：服务商接单后将与您最终确认预约时间，敬请留意。</p>
			<a href="#" class="weui-btn weui-btn_primary" @click.prevent="close_layer">确定</a>
		</div>
  </div>
</template>

<script>

export default {
  name: 'date',
  props:['dateState','dateData'],
  data () {
    return {
      
    }
  },
  mounted:{
  	//初始化
  },
  methods:{
  	close_layer:function(){
			this.$emit('close_date')
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
	background-color: #fff;
	.weui-panel {
	    padding-top: 45px;
	    padding-bottom: 0;
	    margin: 0;
	    background-color: #eee;
	    .weui-cells{
	    	.weui-cell{
	    		text-align: center;
	    	}
	    }
			.small{
				padding: 50px 0;
				font-size: .8em;
			}
	}
}
</style>
