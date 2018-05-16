import Vue from 'vue'
import '@progress/kendo-ui'
import '@progress/kendo-theme-default/dist/all.css'

import { Button,
  ButtonsInstaller } from '@progress/kendo-buttons-vue-wrapper'

Vue.use(ButtonsInstaller)
import App from './App.vue'

Vue.config.productionTip = false
Vue.use (ButtonsInstaller)

new Vue({
  components: {
    Button
  },
  render: h => h(App)
}).$mount('#app')
