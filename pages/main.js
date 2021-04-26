import Vue from 'vue'
import Transmision from './transmision.vue'

Vue.config.productionTip = false

Vue.prototype.ZoomMtg = window.ZoomMtg;

new Vue({
  render: h => h(Transmision),
}).$mount('#transmision')