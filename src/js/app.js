// VUE IMPORTS
import Vue from 'vue';
import LazyImg from 'v-lazy-img';
import VueMasonryPlugin from 'vue-masonry';
import VueRouter from 'vue-router';


// DIRECTIVES
Vue.directive('ripple', require('./directives/Ripple.js'));


// VUE COMPONENTS
Vue.component('moso-sidenav', require('./components/moso-sidenav/moso-sidenav.vue'));
Vue.component('moso-profile-picture', require('./components/moso-profile-picture/moso-profile-picture.vue'));
Vue.component('moso-drawer-list', require('./components/moso-drawer-list/moso-drawer-list.vue'));
Vue.component('moso-toolbar', require('./components/moso-toolbar/moso-toolbar.vue'));
Vue.component('moso-project', require('./components/moso-project/moso-project.vue'));
Vue.component('moso-timeline', require('./components/moso-timeline/moso-timeline.vue'));
Vue.component('timeline-item', require('./components/moso-timeline/moso-timeline-item.vue'));
Vue.component('moso-profile', require('./components/moso-profile/moso-profile.vue'));
Vue.component('profile-item', require('./components/moso-profile/moso-profile-item.vue'));
Vue.component('moso-progressbar', require('./components/moso-progressbar/moso-progressbar.vue'));
//Vue.component('moso-card-cover', require('./components/moso-card/moso-card-cover.vue'));
//Vue.component('moso-card-reveal', require('./components/moso-card/moso-card-reveal.vue'));

Vue.component('nano-ripple', require('./components/nano-ripple/nano-ripple.vue'));
//Vue.component('nano-tabs', require('./components/nano-tabs/nano-tabs.vue'));
//Vue.component('nano-tab', require('./components/nano-tabs/nano-tab.vue'));

Vue.component('version-badge', require('./components/version-badge/version-badge.vue'));


// V-LAZY-IMG
Vue.use(LazyImg);

// VUE-MASONRY
Vue.use(VueMasonryPlugin);

// VUE-ROUTER
Vue.use(VueRouter);


// IMPORT FOR FIRST/MOST IMPORTANT COMPONENT, CONST FOR ASYNC LOADING
import profile from './views/profile.vue';
const resume = require('./views/resume.vue');
const projects = require('./views/projects.vue');
const notfound = require('./views/notfound.vue');


// ROUTES
const routes = [
    { path: '/', component: profile, name: 'Profile ' },
    { path: '/profile', component: profile, name: 'Profile' },
    { path: '/resume', component: resume, name: 'Resume' },
    { path: '/projects', component: projects, name: 'Projects' },
    { path: '/404', component: notfound, name: '404 - not found' },
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
        },

        closeSidenav() {
            this.$refs.sidenav.close();
        }
    }
}).$mount('#app')
