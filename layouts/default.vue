<template>
    <div id="app">
        <div class="container:fluid">
            <div class="row">
                <moso-sidenav ref="sidenav">
                    <div class="logo">
                        <a href="/" @click="closeSidenav" title="Home">
                            <img src="/images/logo.svg" alt="Logo">
                        </a>
                    </div>
                    <div class="profile-picture">
                        <div class="media">
                            <div class="image">
                                <img src="/images/profile.jpg" alt="Morten Sørensen">
                            </div>
                            <p>Morten S&oslash;rensen</p>
                            <p>Front-End Engineer, Website Magician</p>
                        </div>
                    </div>
                    <moso-drawer-list ref="drawerList">
                        <li>
                            <nuxt-link to="/profile" :class="{'router-link-active': $route.fullPath ==='/' || $route.fullPath === '/profile'}">
                                <span @click="closeSidenav">
                                    <svg viewBox="0 0 24 24">
                                        <path d="M12,4A4,4 0 0,1 16,8A4,4 0 0,1 12,12A4,4 0 0,1 8,8A4,4 0 0,1 12,4M12,14C16.42,14 20,15.79 20,18V20H4V18C4,15.79 7.58,14 12,14Z" />
                                    </svg>
                                    Profile
                                </span>
                            </nuxt-link>
                        </li>
                        <li>
                            <nuxt-link to="/resume">
                                <span @click="closeSidenav">
                                    <svg viewBox="0 0 24 24">
                                        <path d="M13,9H18.5L13,3.5V9M6,2H14L20,8V20A2,2 0 0,1 18,22H6C4.89,22 4,21.1 4,20V4C4,2.89 4.89,2 6,2M15,18V16H6V18H15M18,14V12H6V14H18Z" />
                                    </svg>
                                    Resume
                                </span>
                            </nuxt-link>
                        </li>
                        <li>
                            <nuxt-link to="/projects">
                                <span @click="closeSidenav">
                                    <svg viewBox="0 0 24 24">
                                        <path d="M3,3H9V7H3V3M15,10H21V14H15V10M15,17H21V21H15V17M13,13H7V18H13V20H7L5,20V9H7V11H13V13Z" />
                                    </svg>
                                    Projects
                                </span>
                            </nuxt-link>
                        </li>
                    </moso-drawer-list>
                    <div class="footer">
                        <span>Made with <img src="/images/heart.svg" alt="Love"> and <a href="https://vuejs.org" title="Vue.js" target="_blank" rel="noopener"><img src="/images/vue-logo.svg" alt="Vue.js"></a> &#43; <a href="https://nuxtjs.org" title="Nuxt.js" target="_blank" rel="noopener"><img src="/images/nuxt-logo.svg" alt="Nuxt.js"></a></span>
                    </div>
                </moso-sidenav>
                <div class="app-layout">
                    <div class="header">
                        <moso-toolbar fixed>
                            <button class="nav-toggle" @click="toggleSidenav" aria-label="Toggle navigation">
                                <svg viewBox="0 0 24 24">
                                    <path d="M3,6H21V8H3V6M3,11H21V13H3V11M3,16H21V18H3V16Z" />
                                </svg>
                            </button>
                            <div class="page-title"><h1>{{ this.$route.name }}</h1></div>
                            <version-badge version="v4.2-nuxt" />
                        </moso-toolbar>
                    </div>
                    <main>
                        <nuxt />
                    </main>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import MosoSidenav from '~/components/moso-sidenav/moso-sidenav.vue'
import MosoProfilePicture from '~/components/moso-profile-picture/moso-profile-picture.vue'
import MosoDrawerList from '~/components/moso-drawer-list/moso-drawer-list'
import MosoToolbar from '~/components/moso-toolbar/moso-toolbar.vue'
import VersionBadge from '~/components/version-badge/version-badge.vue'

export default {
    components: {
        'moso-sidenav': MosoSidenav,
        'moso-profile-picture': MosoProfilePicture,
        'moso-drawer-list': MosoDrawerList,
        'moso-toolbar': MosoToolbar,
        'version-badge': VersionBadge
    },
    methods: {
        toggleSidenav() {
            this.$refs.sidenav.toggle();
        },
        closeSidenav() {
            this.$refs.sidenav.close();
        }
    }
}
</script>
<style lang="scss">
@import './assets/sass/variables';

.logo {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 65px;
    box-shadow: 0 2px 5px rgba(0,0,0,.26);

    img {
        width: auto;
        height: 57px;
        padding: .3125rem 0;
    }
}

.profile-picture {
    padding: .9125rem;
    text-align: center;
    box-shadow: 0 2px 5px rgba(0,0,0,.26);

    .image {
        width: 100px;
        height: 100px;
        margin: 1px auto 8px auto;

        img {
            display: inline-block;
            width: 100%;
            height: 100%;
            border-radius: 50%;
            border: 2px solid #37474F;
        }
    }

    .media {
        & >>> p {
            margin: 0;
            text-align: center;
            color: $text-color-sidenav;

            &:first-of-type {
                font-size: 1.25rem;
                font-weight: 400;
                margin: 0 0 .3125rem;
            }

            &:last-of-type {
                font-size: .8125rem;
                font-weight: 300;
            }
        }
    }
}

.footer {
    position: absolute;
    bottom: 5px;
    left: 0;
    right: 0;
    color: #546e7a;
    text-align: center;

    span {
        img {
            width: auto;
            height: 12px;
            margin: 0 2px;
        }
    }
}
</style>
