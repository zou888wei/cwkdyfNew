import Vue from 'vue'
import App from './App.vue'
import router from "./router"
import store from "./store"

import ElementUI from "./plugins/element-ui"
// import DataV from "./plugins/dataV"
// import Http from "./plugins/http"

// import "./assets/style/index.scss"

Vue.use(ElementUI)
// Vue.use(Http)
Vue.config.productionTip = false

new Vue({
  store,
  router,
  render: h => h(App),
}).$mount('#app')
