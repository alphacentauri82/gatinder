import Vue from 'vue'
import App from './App.vue'

import '@progress/kendo-ui'
import '@progress/kendo-theme-default/dist/all.css'

import { ButtonsInstaller } from '@progress/kendo-buttons-vue-wrapper'


Vue.config.productionTip = false
Vue.use (ButtonsInstaller)

new Vue({

   render: h => h(App)
}).$mount('#app')
