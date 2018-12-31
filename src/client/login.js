import 'onsenui/css/onsenui.css';
import 'onsenui/css/dark-onsen-css-components.css';
import './style/global.less';


import Vue from 'vue';
import VueOnsen from 'vue-onsenui'; // This imports 'onsenui', so no need to import it separately
import Login from './views/login/index.vue';
Vue.config.productionTip = false;
Vue.use(VueOnsen);
new Vue({
    el: '#app',
    render(c){
        return c(Login);
    }
});