// VUE & VUE-ROUTER
import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);

import profile from './views/profile.vue';
import resume from './views/resume.vue';
import portfolio from './views/portfolio.vue';

const routes = [
    { path: '/', component: profile },
    { path: '/profile', component: profile },
    { path: '/resume', component: resume },
    { path: '/portfolio', component: portfolio }
]

const router = new VueRouter({
    routes
})

const app = new Vue({
    router
}).$mount('#app')
