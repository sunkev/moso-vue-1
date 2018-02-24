<template>
    <div class="container:fluid">
        <div class="row portfolio">
            <div class="md:12 xl:10 xl:offset:1">
                <no-ssr>
                    <div class="row" v-masonry transition-duration="0.2s" item-selector=".xl\:6">
                        <div class="sm:12 xl:6 masonry-column" v-masonry-tile v-for="project in projects" :key="project.id">
                            <moso-project :image="project.image" :project-title="project.title" :sub-title="project.subtitle" :link="project.link" :icon="project.icon">
                                <span v-html="project.content"></span>
                            </moso-project>
                        </div>
                    </div>
                </no-ssr>
            </div>
        </div>

        <div class="row resume">
            <div class="md:12 xl:10 xl:offset:1">
                <div class="row">
                    <div class="sm:12">
                        <h2 class="stuff-headline">I've also recently made stuff for</h2>
                    </div>
                </div>
                <no-ssr>
                    <div class="row" v-masonry transition-duration="0.2s" item-selector=".lg\:6">
                        <div class="md:12 lg:6 masonry-column" v-masonry-tile v-for="smallproject in smallprojects" :key="smallproject.id">
                            <moso-project class="single" :image="smallproject.image" :project-title="smallproject.title" :sub-title="smallproject.subtitle">
                                <span></span>
                            </moso-project>
                        </div>
                    </div>
                </no-ssr>
            </div>
        </div>
    </div>
</template>
<script>
import MosoProject from '~/components/moso-project/moso-project.vue'

import NoSSR from 'vue-no-ssr'

export default {
    layout: 'default',
    components: {
        'moso-project': MosoProject,
        'no-ssr': NoSSR
    },
    asyncData(context) {
        return {
            name: 'Projects'
        }
    },
    data() {
        return {
            title: 'Projects',
            projects: [
                {
                    id: 1,
                    image: '/images/static/flexgrid-logo.png',
                    title: 'Flexgrid',
                    subtitle: 'Flexbox grid',
                    link: 'https://flexgrid.co',
                    icon: '<path d="M 7.5 1 C 5.205 1 3.18725 2.199 2.03125 4 L 2 4 L 2 4.0527344 C 1.37 5.0537344 1 6.233 1 7.5 C 1 8.767 1.37 9.9462656 2 10.947266 L 2 11 L 2.03125 11 C 3.18825 12.801 5.205 14 7.5 14 L 8 14 L 8 8 L 14 8 L 14 7.5 C 14 6.233 13.63 5.0537344 13 4.0527344 L 13 4 L 12.96875 4 C 11.81275 2.199 9.795 1 7.5 1 z M 7 2.1289062 L 7 4 L 5.6035156 4 C 5.9765156 3.053 6.481 2.3929062 7 2.1289062 z M 8 2.1289062 C 8.519 2.3929062 9.0234844 3.053 9.3964844 4 L 8 4 L 8 2.1289062 z M 9.7617188 2.5058594 C 10.523719 2.8528594 11.18975 3.364 11.71875 4 L 10.460938 4 C 10.269937 3.436 10.034719 2.9318594 9.7617188 2.5058594 z M 5.2382812 2.5078125 C 4.9642812 2.9328125 4.7290625 3.436 4.5390625 4 L 3.28125 4 C 3.81025 3.364 4.4762812 2.8538125 5.2382812 2.5078125 z M 2.6054688 5 L 4.2597656 5 C 4.1237656 5.621 4.0406719 6.294 4.0136719 7 L 2.0214844 7 C 2.0864844 6.285 2.2924687 5.61 2.6054688 5 z M 5.296875 5 L 7 5 L 7 7 L 5.0214844 7 C 5.0524844 6.271 5.148875 5.599 5.296875 5 z M 8 5 L 9.703125 5 C 9.851125 5.599 9.9465156 6.271 9.9785156 7 L 8 7 L 8 5 z M 10.740234 5 L 12.394531 5 C 12.707531 5.61 12.914516 6.285 12.978516 7 L 10.986328 7 C 10.958328 6.294 10.875234 5.621 10.740234 5 z M 2.0214844 8 L 4.0136719 8 C 4.0416719 8.706 4.1247656 9.379 4.2597656 10 L 2.6054688 10 C 2.2924688 9.39 2.0864844 8.715 2.0214844 8 z M 5.0214844 8 L 7 8 L 7 10 L 5.296875 10 C 5.148875 9.401 5.0524844 8.729 5.0214844 8 z M 9 9 L 11 14 L 11.939453 12.65625 L 13.5 14 L 14.5 12.878906 L 12.853516 11.511719 L 14 10.5 L 9 9 z M 3.28125 11 L 4.5390625 11 C 4.7300625 11.564 4.9652813 12.067188 5.2382812 12.492188 C 4.4762813 12.146187 3.81025 11.636 3.28125 11 z M 5.6035156 11 L 7 11 L 7 12.871094 C 6.481 12.607094 5.9765156 11.947 5.6035156 11 z" />',
                    content: '<p>Flexgrid is a simple CSS grid entirely based on <a href="https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Flexible_Box_Layout" title="flexbox" target="_blank" rel="noopener">flexbox</a> layout. If not modified, Flexgrid use <a href="https://getbootstrap.com" title="Bootstrap" target="_blank" rel="noopener">Bootstrap</a>\'s rigid ruleset.</p><p>As a small detail, and to distinguish itself from Bootstrap, Flexgrid base its width-triggers on <span class="code">rem</span> instead of pixel. This creates a much more fluid layout, as <span class="code">rem</span> is relative to the <span class="code">html</span> root font-size, which is set to <span class="code">16px</span>.</p>'
                },
                {
                    id: 2,
                    image: '/images/static/nano-logo.png',
                    title: 'Nano',
                    subtitle: 'Vue.js-components Framework',
                    link: 'https://getnano.io',
                    icon: '<path d="M 7.5 1 C 5.205 1 3.18725 2.199 2.03125 4 L 2 4 L 2 4.0527344 C 1.37 5.0537344 1 6.233 1 7.5 C 1 8.767 1.37 9.9462656 2 10.947266 L 2 11 L 2.03125 11 C 3.18825 12.801 5.205 14 7.5 14 L 8 14 L 8 8 L 14 8 L 14 7.5 C 14 6.233 13.63 5.0537344 13 4.0527344 L 13 4 L 12.96875 4 C 11.81275 2.199 9.795 1 7.5 1 z M 7 2.1289062 L 7 4 L 5.6035156 4 C 5.9765156 3.053 6.481 2.3929062 7 2.1289062 z M 8 2.1289062 C 8.519 2.3929062 9.0234844 3.053 9.3964844 4 L 8 4 L 8 2.1289062 z M 9.7617188 2.5058594 C 10.523719 2.8528594 11.18975 3.364 11.71875 4 L 10.460938 4 C 10.269937 3.436 10.034719 2.9318594 9.7617188 2.5058594 z M 5.2382812 2.5078125 C 4.9642812 2.9328125 4.7290625 3.436 4.5390625 4 L 3.28125 4 C 3.81025 3.364 4.4762812 2.8538125 5.2382812 2.5078125 z M 2.6054688 5 L 4.2597656 5 C 4.1237656 5.621 4.0406719 6.294 4.0136719 7 L 2.0214844 7 C 2.0864844 6.285 2.2924687 5.61 2.6054688 5 z M 5.296875 5 L 7 5 L 7 7 L 5.0214844 7 C 5.0524844 6.271 5.148875 5.599 5.296875 5 z M 8 5 L 9.703125 5 C 9.851125 5.599 9.9465156 6.271 9.9785156 7 L 8 7 L 8 5 z M 10.740234 5 L 12.394531 5 C 12.707531 5.61 12.914516 6.285 12.978516 7 L 10.986328 7 C 10.958328 6.294 10.875234 5.621 10.740234 5 z M 2.0214844 8 L 4.0136719 8 C 4.0416719 8.706 4.1247656 9.379 4.2597656 10 L 2.6054688 10 C 2.2924688 9.39 2.0864844 8.715 2.0214844 8 z M 5.0214844 8 L 7 8 L 7 10 L 5.296875 10 C 5.148875 9.401 5.0524844 8.729 5.0214844 8 z M 9 9 L 11 14 L 11.939453 12.65625 L 13.5 14 L 14.5 12.878906 L 12.853516 11.511719 L 14 10.5 L 9 9 z M 3.28125 11 L 4.5390625 11 C 4.7300625 11.564 4.9652813 12.067188 5.2382812 12.492188 C 4.4762813 12.146187 3.81025 11.636 3.28125 11 z M 5.6035156 11 L 7 11 L 7 12.871094 C 6.481 12.607094 5.9765156 11.947 5.6035156 11 z" />',
                    content: '<p>Nano is going to be a full-blown mobile-first, responsive front-end framework made with custom-made <a href="https://vuejs.org" title="Vue.js" target="_blank" rel="noopener">Vue.js</a>-components and <a href="https://sass-lang" title="Sass" target="_blank" rel="noopener">Sass</a>. The components are inspired, both in design and functionality, by Google\'s <a href="https://material.io/guidelines" title="Material Design guidelines" target="_blank" rel="noopener">Material Design guidelines</a>, however, Nano shouldn\'t be categorized as Material Design.</p><p>While Nano is still under development, you can checkout what we\'re up to at our <em>dev</em>-branch on <a href="https://github.com/getnano/nano-framework/tree/dev" title="GitHub" target="_blank" rel="noopener">GitHub</a>, and you\'re more than welcome to contribute to the project by sending us a PR.</p>'
                },
                {
                    id: 3,
                    image: '/images/static/3up-logo.png',
                    title: '3up CDN',
                    subtitle: 'Fast, global, cookieless CDN',
                    link: 'https://cdn.3up.dk',
                    icon: '<path d="M 7.5 1 C 5.205 1 3.18725 2.199 2.03125 4 L 2 4 L 2 4.0527344 C 1.37 5.0537344 1 6.233 1 7.5 C 1 8.767 1.37 9.9462656 2 10.947266 L 2 11 L 2.03125 11 C 3.18825 12.801 5.205 14 7.5 14 L 8 14 L 8 8 L 14 8 L 14 7.5 C 14 6.233 13.63 5.0537344 13 4.0527344 L 13 4 L 12.96875 4 C 11.81275 2.199 9.795 1 7.5 1 z M 7 2.1289062 L 7 4 L 5.6035156 4 C 5.9765156 3.053 6.481 2.3929062 7 2.1289062 z M 8 2.1289062 C 8.519 2.3929062 9.0234844 3.053 9.3964844 4 L 8 4 L 8 2.1289062 z M 9.7617188 2.5058594 C 10.523719 2.8528594 11.18975 3.364 11.71875 4 L 10.460938 4 C 10.269937 3.436 10.034719 2.9318594 9.7617188 2.5058594 z M 5.2382812 2.5078125 C 4.9642812 2.9328125 4.7290625 3.436 4.5390625 4 L 3.28125 4 C 3.81025 3.364 4.4762812 2.8538125 5.2382812 2.5078125 z M 2.6054688 5 L 4.2597656 5 C 4.1237656 5.621 4.0406719 6.294 4.0136719 7 L 2.0214844 7 C 2.0864844 6.285 2.2924687 5.61 2.6054688 5 z M 5.296875 5 L 7 5 L 7 7 L 5.0214844 7 C 5.0524844 6.271 5.148875 5.599 5.296875 5 z M 8 5 L 9.703125 5 C 9.851125 5.599 9.9465156 6.271 9.9785156 7 L 8 7 L 8 5 z M 10.740234 5 L 12.394531 5 C 12.707531 5.61 12.914516 6.285 12.978516 7 L 10.986328 7 C 10.958328 6.294 10.875234 5.621 10.740234 5 z M 2.0214844 8 L 4.0136719 8 C 4.0416719 8.706 4.1247656 9.379 4.2597656 10 L 2.6054688 10 C 2.2924688 9.39 2.0864844 8.715 2.0214844 8 z M 5.0214844 8 L 7 8 L 7 10 L 5.296875 10 C 5.148875 9.401 5.0524844 8.729 5.0214844 8 z M 9 9 L 11 14 L 11.939453 12.65625 L 13.5 14 L 14.5 12.878906 L 12.853516 11.511719 L 14 10.5 L 9 9 z M 3.28125 11 L 4.5390625 11 C 4.7300625 11.564 4.9652813 12.067188 5.2382812 12.492188 C 4.4762813 12.146187 3.81025 11.636 3.28125 11 z M 5.6035156 11 L 7 11 L 7 12.871094 C 6.481 12.607094 5.9765156 11.947 5.6035156 11 z" />',
                    content: '<p>3up CDN is a <a href="http://www.symkat.com/cookieless-domains" title="cookieless" target="_blank" rel="noopener">cookieless</a> <a href="https://en.wikipedia.org/wiki/Content_delivery_network" title="content delivery network" rel="noopener">content delivery network</a> that handles static content. However, 3up only caches URLs from <a href="https://npmjs.org" title="npm" target="_blank" rel="noopener">npm</a>, and then instructs the browser to cache the content. It supports versions and tags, like <span class="code">3.0.0</span> or <span class="code">latest</span>, as well as json-ified lists.</p><p>3up is based on <a href="https://unpkg.com" title="unpkg" target="_blank" rel="noopener">unpkg</a>\'s <a href="http://expressjs.com" title="expressjs" target="_blank" rel="noopener">expressjs</a>-server with modifications, and the front-end is built with <a href="http://getbootstrap.com" title="Bootstrap" target="_blank" rel="noopener">Bootstrap 4</a> and <a href="https://vuejs.org" title="Vue.js" target="_blank" rel="noopener">Vue.js</a>.</p>'
                },
                {
                    id: 4,
                    image: '/images/static/shade.jpg',
                    title: 'Shade Ghost theme',
                    subtitle: 'Dark theme for Ghost',
                    link: 'https://shade.moso.io',
                    icon: '<path d="M 7.5 1 C 5.205 1 3.18725 2.199 2.03125 4 L 2 4 L 2 4.0527344 C 1.37 5.0537344 1 6.233 1 7.5 C 1 8.767 1.37 9.9462656 2 10.947266 L 2 11 L 2.03125 11 C 3.18825 12.801 5.205 14 7.5 14 L 8 14 L 8 8 L 14 8 L 14 7.5 C 14 6.233 13.63 5.0537344 13 4.0527344 L 13 4 L 12.96875 4 C 11.81275 2.199 9.795 1 7.5 1 z M 7 2.1289062 L 7 4 L 5.6035156 4 C 5.9765156 3.053 6.481 2.3929062 7 2.1289062 z M 8 2.1289062 C 8.519 2.3929062 9.0234844 3.053 9.3964844 4 L 8 4 L 8 2.1289062 z M 9.7617188 2.5058594 C 10.523719 2.8528594 11.18975 3.364 11.71875 4 L 10.460938 4 C 10.269937 3.436 10.034719 2.9318594 9.7617188 2.5058594 z M 5.2382812 2.5078125 C 4.9642812 2.9328125 4.7290625 3.436 4.5390625 4 L 3.28125 4 C 3.81025 3.364 4.4762812 2.8538125 5.2382812 2.5078125 z M 2.6054688 5 L 4.2597656 5 C 4.1237656 5.621 4.0406719 6.294 4.0136719 7 L 2.0214844 7 C 2.0864844 6.285 2.2924687 5.61 2.6054688 5 z M 5.296875 5 L 7 5 L 7 7 L 5.0214844 7 C 5.0524844 6.271 5.148875 5.599 5.296875 5 z M 8 5 L 9.703125 5 C 9.851125 5.599 9.9465156 6.271 9.9785156 7 L 8 7 L 8 5 z M 10.740234 5 L 12.394531 5 C 12.707531 5.61 12.914516 6.285 12.978516 7 L 10.986328 7 C 10.958328 6.294 10.875234 5.621 10.740234 5 z M 2.0214844 8 L 4.0136719 8 C 4.0416719 8.706 4.1247656 9.379 4.2597656 10 L 2.6054688 10 C 2.2924688 9.39 2.0864844 8.715 2.0214844 8 z M 5.0214844 8 L 7 8 L 7 10 L 5.296875 10 C 5.148875 9.401 5.0524844 8.729 5.0214844 8 z M 9 9 L 11 14 L 11.939453 12.65625 L 13.5 14 L 14.5 12.878906 L 12.853516 11.511719 L 14 10.5 L 9 9 z M 3.28125 11 L 4.5390625 11 C 4.7300625 11.564 4.9652813 12.067188 5.2382812 12.492188 C 4.4762813 12.146187 3.81025 11.636 3.28125 11 z M 5.6035156 11 L 7 11 L 7 12.871094 C 6.481 12.607094 5.9765156 11.947 5.6035156 11 z" />',
                    content: '<p>Theme originally made for my first <a href="https://ghost.moso.io" title="Ghost" target="_blank" rel="noopener">Ghost</a> blog, but I decided to make it available for everyone. Built with <a href="https://flexgrid.co" title="Flexgrid" target="_blank" rel="noopener">Flexgrid</a> and flexbox, and is available at <a href="https://github.com/moso/shade-ghost-theme" title="GitHub" target="_blank" rel="noopener">GitHub</a> as open-source.</p><p>Shade is built to be hacked, and I encourage people to hack and expand it. Shade is a dark theme, however, easy on the eyes. The colors and contrasts are carefully selected so one\'s vision isn\'t disturbed while reading.</p>'
                },
                {
                    id: 5,
                    image: '/images/static/hyper-logo.png',
                    title: 'hyper-arc-dark-controls',
                    subtitle: 'Arc window controls for Hyper',
                    link: 'https://github.com/moso/hyper-arc-dark-controls',
                    icon: '<path d="M 7.5 1 C 3.910156 1 1 3.90625 1 7.488281 C 1 10.355469 2.863281 12.789063 5.445313 13.648438 C 5.769531 13.707031 6 13.375 6 13.125 C 6 12.972656 6.003906 12.789063 6 12.25 C 4.191406 12.640625 3.625 11.375 3.625 11.375 C 3.328125 10.625 2.96875 10.410156 2.96875 10.410156 C 2.378906 10.007813 3.011719 10.019531 3.011719 10.019531 C 3.664063 10.0625 4 10.625 4 10.625 C 4.5 11.5 5.628906 11.414063 6 11.25 C 6 10.851563 6.042969 10.5625 6.152344 10.378906 C 4.109375 10.019531 2.996094 8.839844 3 7.207031 C 3.003906 6.242188 3.335938 5.492188 3.875 4.9375 C 3.640625 4.640625 3.480469 3.625 3.960938 3 C 5.167969 3 5.886719 3.871094 5.886719 3.871094 C 5.886719 3.871094 6.453125 3.625 7.496094 3.625 C 8.542969 3.625 9.105469 3.859375 9.105469 3.859375 C 9.105469 3.859375 9.828125 3 11.035156 3 C 11.515625 3.625 11.355469 4.640625 11.167969 4.917969 C 11.683594 5.460938 12 6.210938 12 7.207031 C 12 8.839844 10.890625 10.019531 8.851563 10.375 C 8.980469 10.570313 9 10.84375 9 11.25 C 9 12.117188 9 12.910156 9 13.125 C 9 13.375 9.226563 13.710938 9.558594 13.648438 C 12.140625 12.785156 14 10.355469 14 7.488281 C 14 3.90625 11.089844 1 7.5 1 Z " />',
                    content: '<p>When I\'m developing stuff, I love using <a href="https://ubuntu.com" title="Ubuntu" target="_blank" rel="noopener">Ubuntu</a>. I also like my Ubuntu to look neat, so I\'ve been using the <a href="https://github.com/horst3180/arc-theme" title="Arc theme" target="_blank" rel="noopener">Arc theme</a> for quite a while. However, I also love using the <a href="https://hyper.is" title="Hyper" target="_blank" rel="noopener">Hyper</a> terminal, and since it\'s built on <a href="https://electron.atom.io" title="Electron" target="_blank" rel="noopener">Electron</a>/<a href="http://chromium.org" title="Chromium" target="_blank" rel="noopener">Chromium</a>, it\'s very customisable.</p><p>When you first install Hyper, you get these bulky-looking Windows 10-ish window controls. So I thought I\'d create some Arc-themed window controls for Hyper, so it would fit the GTK-theme. These are easily installable through <a href="https://www.npmjs.com/package/hyper-arc-dark-controls" title="npm" target="_blank" rel="noopener">npm</a>, or hyper\'s own <a href="https://www.npmjs.com/package/hpm-cli" title="hpm" target="_blank" rel="noopener">hpm</a>. And the sourcecode is, of course, available on GitHub.</p>'
                },
                {
                    id: 6,
                    image: '/images/static/hyper-logo.png',
                    title: 'hyper-dark-scrollbar',
                    subtitle: 'Pretty scrollbar for Hyper',
                    link: 'https://github.com/moso/hyper-dark-scrollbar',
                    icon: '<path d="M 7.5 1 C 3.910156 1 1 3.90625 1 7.488281 C 1 10.355469 2.863281 12.789063 5.445313 13.648438 C 5.769531 13.707031 6 13.375 6 13.125 C 6 12.972656 6.003906 12.789063 6 12.25 C 4.191406 12.640625 3.625 11.375 3.625 11.375 C 3.328125 10.625 2.96875 10.410156 2.96875 10.410156 C 2.378906 10.007813 3.011719 10.019531 3.011719 10.019531 C 3.664063 10.0625 4 10.625 4 10.625 C 4.5 11.5 5.628906 11.414063 6 11.25 C 6 10.851563 6.042969 10.5625 6.152344 10.378906 C 4.109375 10.019531 2.996094 8.839844 3 7.207031 C 3.003906 6.242188 3.335938 5.492188 3.875 4.9375 C 3.640625 4.640625 3.480469 3.625 3.960938 3 C 5.167969 3 5.886719 3.871094 5.886719 3.871094 C 5.886719 3.871094 6.453125 3.625 7.496094 3.625 C 8.542969 3.625 9.105469 3.859375 9.105469 3.859375 C 9.105469 3.859375 9.828125 3 11.035156 3 C 11.515625 3.625 11.355469 4.640625 11.167969 4.917969 C 11.683594 5.460938 12 6.210938 12 7.207031 C 12 8.839844 10.890625 10.019531 8.851563 10.375 C 8.980469 10.570313 9 10.84375 9 11.25 C 9 12.117188 9 12.910156 9 13.125 C 9 13.375 9.226563 13.710938 9.558594 13.648438 C 12.140625 12.785156 14 10.355469 14 7.488281 C 14 3.90625 11.089844 1 7.5 1 Z " />',
                    content: '<p>The <a href="https://hyper.is" title="Hyper" target="_blank" rel="noopener">Hyper</a> terminal also ships with an ugly-looking, non-native scrollbar that, again, looks like something left over from Windows 10, so I\'ve created a neat-looking, sleek scrollbar.</p><p>Although it was originally designed for the <a href="https://github.com/mdo/hyperterm-atom-dark" title="Atom Dark theme" target="_blank" rel="noopener">Atom Dark theme for Hyper</a>, I decided to create one that should look fine on almost any dark theme. It\'s customisable, so if you want to change the colors, the sourcecode is available on GitHub for you to fork and hack.</p>'
                }
            ],
            smallprojects: [
                {
                    id: 1,
                    image: '/images/static/skat.svg',
                    title: 'The Danish Customs and Tax Administration',
                    subtitle: 'Claimant portal'
                },
                {
                    id: 2,
                    image: '/images/static/dgst.svg',
                    title: 'The Danish Agency for Digitisation',
                    subtitle: 'Danish WebDesign Standards'
                },
                {
                    id: 3,
                    image: '/images/static/uim-us.svg',
                    title: 'The Danish Immigration Service',
                    subtitle: '\'New to Denmark\'-portal '
                },
                {
                    id: 4,
                    image: '/images/static/riverfisher.svg',
                    title: 'Riverfisher',
                    subtitle: 'Community for anglers'
                },
                {
                    id: 5,
                    image: '/images/static/scratcher.svg',
                    title: 'Scratcher',
                    subtitle: 'Gamification platform'
                },
            ]
        }
    },
    mounted() {
        if (typeof this.$redrawVueMasonry === 'function') {
            this.$redrawVueMasonry()
        }
    }
}
</script>
<style lang="scss" scoped>
.masonry-column {
    & >>> div {
        margin-bottom: 1rem;

        @media (min-width: 992px) {
            margin-bottom: 2rem;
        }
    }

    &:last-of-type {
        & >>> div {
            margin-bottom: 0;
        }
    }

    & >>> .project-body {
        span {
            p {
                margin: 0 0 1rem;

                &:last-of-type {
                    margin: 0;
                }
            }
        }
    }
}
</style>
