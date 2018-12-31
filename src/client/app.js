import 'onsenui/css/onsenui.css';
import 'onsenui/css/dark-onsen-css-components.css';
import './style/global.less';

// JS import
import Vue from 'vue';
import VueOnsen from 'vue-onsenui'; // This imports 'onsenui', so no need to import it separately
import VueRouter from 'vue-router';

// import useApollo from './apollo-client';
import routes from './routes';
// import gql from "graphql-tag";
Vue.config.productionTip = false;

// const apolloProvider = useApollo(Vue);
Vue.use(VueRouter);
Vue.use(VueOnsen);

const router = new VueRouter({
    mode: 'history',
    routes,
});
new Vue({
    el: '#app',
    router,
    beforeCreate() {
        if (this.$ons.platform.isIPhoneX()) { // Utility function
            // Add empty attribute to the <html> element
            document.documentElement.setAttribute('onsflag-iphonex-landscape', '');
            document.documentElement.setAttribute('onsflag-iphonex-portrait', '');
        }
    }
});