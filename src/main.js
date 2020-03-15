import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import Axios from 'axios';
import Components from './components';
import '@/assets/styles/main.less';

Vue.use(Components);

Vue.config.productionTip = false;
Vue.prototype.$axios = Axios;

new Vue({
    router,
    store,
    render: h => h(App)
}).$mount('#app');