// VUE IMPORTS
import Vue from 'vue';
import VueRouter from 'vue-router';


// VUE COMPONENTS
Vue.component('moso-sidenav', require('./components/moso-sidenav/moso-sidenav.vue'));
Vue.component('moso-profile-picture', require('./components/moso-profile-picture/moso-profile-picture.vue'));
Vue.component('moso-drawer-list', require('./components/moso-drawer-list/moso-drawer-list.vue'));
Vue.component('nav-item', require('./components/moso-drawer-list/nav-item.vue'));
Vue.component('moso-toolbar', require('./components/moso-toolbar/moso-toolbar.vue'));


// VUE-ROUTER
Vue.use(VueRouter);

import profile from './views/profile.vue';
import resume from './views/resume.vue';
import portfolio from './views/portfolio.vue';
import notfound from './views/notfound.vue';

const routes = [
    { path: '/', component: profile },
    { path: '/profile', component: profile },
    { path: '/resume', component: resume },
    { path: '/portfolio', component: portfolio },
    { path: '/404', component: notfound },
    { path: '*', redirect: '404' }
]

const router = new VueRouter({
    routes
})

const app = new Vue({
    router,

    methods: {
        toggleSidenav() {
            this.$refs.sidenav.toggle();
        }
    }
}).$mount('#app')


// CUSTOM ACTIVE CLASS ON COMPONENT LOADED BY ROOT
if(window.location.hash === '#/') {
    var menu = document.querySelector('#drawerMenu');
    var el = menu.firstElementChild.firstChild;
    el.className += 'router-link-active';

    var removeRouterClass = function () {
        el.classList.remove('router-link-active');
        menu.removeEventListener('click', removeRouterClass);
    }

    menu.addEventListener('click', removeRouterClass);
}
