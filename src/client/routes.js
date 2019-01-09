
import Vue from 'vue';
import Router from 'vue-router';
import Index from './views/main/index.vue';
import records from './views/main/records/index.vue';
import step1 from './views/main/newRecord/step1.vue';
import step2 from './views/main/newRecord/step2.vue';
import step3 from './views/main/newRecord/step3.vue';
Vue.use(Router);

import VueRouter from 'vue-router';
export default new VueRouter({
    mode: 'history',
    routes: [
        { path: '/', name:'Index', component: Index , alias: '/records',
            children: [
                { path: 'records', name:"Records", component: records },
                { path: 'step1', name:"step1", component: step1 },
                { path: 'step2', name:"step2", component: step2 },
                { path: 'step3', name:"step3", component: step3 },
            ]},
        { path: '*',component: Index },
    ]
});
