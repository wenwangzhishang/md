import Vue from 'vue'
import VueResource from 'vue-resource'
import App from './components/App'

import 'assets/css/lib/weui.min.css'
import 'assets/css/common/reset.css'

Vue.use(VueResource)
Vue.config.debug = true;//开启错误提示

new Vue({
  el: '#app',
  template: '<App/>',
  components: { App }
})
