<template>
    <div class="container:fluid">
        <div class="row portfolio">
            <div class="md:12 xl:10 xl:offset:1">
                <div class="row" v-masonry transition-duration="0.2s" item-selector=".xl\:6">
                    <div class="sm:12 xl:6 masonry-column" v-masonry-tile v-for="project in projects" :key="project.id">
                        <moso-project image="/images/static/flexgrid-logo.png" project-title="Flexgrid" sub-title="Flexbox grid" link="https://flexgrid.co" icon="<path d='M17.9,17.39C17.64,16.59 16.89,16 16,16H15V13A1,1 0 0,0 14,12H8V10H10A1,1 0 0,0 11,9V7H13A2,2 0 0,0 15,5V4.59C17.93,5.77 20,8.64 20,12C20,14.08 19.2,15.97 17.9,17.39M11,19.93C7.05,19.44 4,16.08 4,12C4,11.38 4.08,10.78 4.21,10.21L9,15V16A2,2 0 0,0 11,18M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10,10 0 0,0 12,2Z'></path>">
                            <span>
                                <p>Flexgrid is a simple CSS grid entirely based on <a href="https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Flexible_Box_Layout" title="flexbox" target="_blank" rel="noopener">flexbox</a> layout. If not modified, Flexgrid use <a href="https://getbootstrap.com" title="Bootstrap" target="_blank" rel="noopener">Bootstrap</a>'s rigid ruleset.</p>
                                <p>As a small detail, and to distinguish itself from Bootstrap, Flexgrid base its width-triggers on <span class="code">rem</span> instead of pixel. This creates a much more fluid layout, as <span class="code">rem</span> is relative to the <span class="code">html</span> root font-size, which is set to <span class="code">16px</span>.</p>
                            </span>
                        </moso-project>
                        <moso-project image="/images/static/nano-logo.png" project-title="Nano" sub-title="CSS framework and Vue.js components" link="https://getnano.io" icon="<path d='M17.9,17.39C17.64,16.59 16.89,16 16,16H15V13A1,1 0 0,0 14,12H8V10H10A1,1 0 0,0 11,9V7H13A2,2 0 0,0 15,5V4.59C17.93,5.77 20,8.64 20,12C20,14.08 19.2,15.97 17.9,17.39M11,19.93C7.05,19.44 4,16.08 4,12C4,11.38 4.08,10.78 4.21,10.21L9,15V16A2,2 0 0,0 11,18M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10,10 0 0,0 12,2Z'></path>">
                            <span>
                                <p>Nano is going to be a full-blown mobile-first, responsive front-end framework made with custom-made <a href="https://vuejs.org" title="Vue.js" target="_blank" rel="noopener">Vue.js</a>-components and <a href="https://sass-lang" title="Sass" target="_blank" rel="noopener">Sass</a>. The components are inspired, both in design and functionality, by Google's <a href="https://material.io/guidelines" title="Material Design guidelines" target="_blank" rel="noopener">Material Design guidelines</a>, however, Nano shouldn't be categorized as Material Design.</p>
                                <p>While Nano is still under development, you can checkout what we're up to at our <em>dev</em>-branch on <a href="https://github.com/getnano/nano-framework/tree/dev" title="GitHub" target="_blank" rel="noopener">GitHub</a>, and you're more than welcome to contribute to the project by sending us a PR.</p>
                            </span>
                        </moso-project>
                        <moso-project image="/images/static/3up-logo.png" project-title="3up CDN" sub-title="Fast, global, cookieless CDN" link="https://cdn.3up.dk" icon="<path d='M17.9,17.39C17.64,16.59 16.89,16 16,16H15V13A1,1 0 0,0 14,12H8V10H10A1,1 0 0,0 11,9V7H13A2,2 0 0,0 15,5V4.59C17.93,5.77 20,8.64 20,12C20,14.08 19.2,15.97 17.9,17.39M11,19.93C7.05,19.44 4,16.08 4,12C4,11.38 4.08,10.78 4.21,10.21L9,15V16A2,2 0 0,0 11,18M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10,10 0 0,0 12,2Z'></path>">
                            <span>
                                <p>3up CDN is a <a href="http://www.symkat.com/cookieless-domains" title="cookieless" target="_blank" rel="noopener">cookieless</a> <a href="https://en.wikipedia.org/wiki/Content_delivery_network" title="content delivery network" rel="noopener">content delivery network</a> that handles static content. However, 3up only caches URL's from <a href="https://npmjs.org" title="npm" target="_blank" rel="noopener">npm</a>, and then instructs the browser to cache the content. It supports versions and tags, like <span class="code">3.0.0</span> or <span class="code">latest</span>, as well as json-ified lists.</p>
                                <p>3up is based on <a href="https://unpkg.com" title="unpkg" target="_blank" rel="noopener">unpkg</a>'s <a href="http://expressjs.com" title="expressjs" target="_blank" rel="noopener">expressjs</a>-server with modifications, and the front-end is built with <a href="http://getbootstrap.com" title="Bootstrap" target="_blank" rel="noopener">Bootstrap 4</a> and <a href="https://vuejs.org" title="Vue.js" target="_blank" rel="noopener">Vue.js</a>.</p>
                            </span>
                        </moso-project>
                        <moso-project image="/images/static/shade-theme.png" project-title="Shade Ghost theme" sub-title="Dark theme for Ghost" link="https://shade.moso.io" icon="<path d='M17.9,17.39C17.64,16.59 16.89,16 16,16H15V13A1,1 0 0,0 14,12H8V10H10A1,1 0 0,0 11,9V7H13A2,2 0 0,0 15,5V4.59C17.93,5.77 20,8.64 20,12C20,14.08 19.2,15.97 17.9,17.39M11,19.93C7.05,19.44 4,16.08 4,12C4,11.38 4.08,10.78 4.21,10.21L9,15V16A2,2 0 0,0 11,18M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10,10 0 0,0 12,2Z'></path>">
                            <span>
                                <p>Theme originally made for my first <a href="https://ghost.moso.io" title="Ghost" target="_blank" rel="noopener">Ghost</a> blog, but I decided to make it available for everyone. Built with <a href="https://flexgrid.co" title="Flexgrid" target="_blank" rel="noopener">Flexgrid</a> and flexbox, and is available at <a href="https://github.com/moso/shade-ghost-theme" title="GitHub" target="_blank" rel="noopener">GitHub</a> as open-source.</p>
                                <p>Shade is built to be hacked, and I encourage people to hack and expand it. Shade is a dark theme, however, easy on the eyes. The colors and contrasts are carefully selected so one's vision isn't disturbed while reading.</p>
                            </span>
                        </moso-project>
                        <moso-project image="/images/static/hyper-logo.png" project-title="hyper-arc-dark-controls" sub-title="Arc window controls for Hyper" link="https://github.com/moso/hyper-arc-dark-controls" icon="<path d='M12,2A10,10 0 0,0 2,12C2,16.42 4.87,20.17 8.84,21.5C9.34,21.58 9.5,21.27 9.5,21C9.5,20.77 9.5,20.14 9.5,19.31C6.73,19.91 6.14,17.97 6.14,17.97C5.68,16.81 5.03,16.5 5.03,16.5C4.12,15.88 5.1,15.9 5.1,15.9C6.1,15.97 6.63,16.93 6.63,16.93C7.5,18.45 8.97,18 9.54,17.76C9.63,17.11 9.89,16.67 10.17,16.42C7.95,16.17 5.62,15.31 5.62,11.5C5.62,10.39 6,9.5 6.65,8.79C6.55,8.54 6.2,7.5 6.75,6.15C6.75,6.15 7.59,5.88 9.5,7.17C10.29,6.95 11.15,6.84 12,6.84C12.85,6.84 13.71,6.95 14.5,7.17C16.41,5.88 17.25,6.15 17.25,6.15C17.8,7.5 17.45,8.54 17.35,8.79C18,9.5 18.38,10.39 18.38,11.5C18.38,15.32 16.04,16.16 13.81,16.41C14.17,16.72 14.5,17.33 14.5,18.26C14.5,19.6 14.5,20.68 14.5,21C14.5,21.27 14.66,21.59 15.17,21.5C19.14,20.16 22,16.42 22,12A10,10 0 0,0 12,2Z'></path>">
                            <span>
                                <p>When I'm developing stuff, I love using <a href="https://ubuntu.com" title="Ubuntu" target="_blank" rel="noopener">Ubuntu</a>. I also like my Ubuntu to look neat, so I've been using the <a href="https://github.com/horst3180/arc-theme" title="Arc theme" target="_blank" rel="noopener">Arc theme</a> for quite a while. However, I also love using the <a href="https://hyper.is" title="Hyper" target="_blank" rel="noopener">Hyper</a> terminal, and since it's built on <a href="https://electron.atom.io" title="Electron" target="_blank" rel="noopener">Electron</a>/<a href="http://chromium.org" title="Chromium" target="_blank" rel="noopener">Chromium</a>, it's very customisable.</p>
                                <p>When you first install Hyper, you get these bulky-looking Windows 10-ish window controls. So I thought I'd create some Arc-themed window controls for Hyper, so it would fit the GTK-theme. These are easily installable through <a href="https://www.npmjs.com/package/hyper-arc-dark-controls" title="npm" target="_blank" rel="noopener">npm</a>, or hyper's own <a href="https://www.npmjs.com/package/hpm-cli" title="hpm" target="_blank" rel="noopener">hpm</a>. And the sourcecode is, of course, available on GitHub.</p>
                            </span>
                        </moso-project>
                        <moso-project image="/images/static/hyper-logo.png" project-title="hyper-dark-scrollbar" sub-title="Pretty scrollbar for Hyper" link="https://github.com/moso/hyper-dark-scrollbar" icon="<path d='M12,2A10,10 0 0,0 2,12C2,16.42 4.87,20.17 8.84,21.5C9.34,21.58 9.5,21.27 9.5,21C9.5,20.77 9.5,20.14 9.5,19.31C6.73,19.91 6.14,17.97 6.14,17.97C5.68,16.81 5.03,16.5 5.03,16.5C4.12,15.88 5.1,15.9 5.1,15.9C6.1,15.97 6.63,16.93 6.63,16.93C7.5,18.45 8.97,18 9.54,17.76C9.63,17.11 9.89,16.67 10.17,16.42C7.95,16.17 5.62,15.31 5.62,11.5C5.62,10.39 6,9.5 6.65,8.79C6.55,8.54 6.2,7.5 6.75,6.15C6.75,6.15 7.59,5.88 9.5,7.17C10.29,6.95 11.15,6.84 12,6.84C12.85,6.84 13.71,6.95 14.5,7.17C16.41,5.88 17.25,6.15 17.25,6.15C17.8,7.5 17.45,8.54 17.35,8.79C18,9.5 18.38,10.39 18.38,11.5C18.38,15.32 16.04,16.16 13.81,16.41C14.17,16.72 14.5,17.33 14.5,18.26C14.5,19.6 14.5,20.68 14.5,21C14.5,21.27 14.66,21.59 15.17,21.5C19.14,20.16 22,16.42 22,12A10,10 0 0,0 12,2Z'></path>">
                            <span>
                                <p>The <a href="https://hyper.is" title="Hyper" target="_blank" rel="noopener">Hyper</a> terminal also ships with an ugly-looking, non-native scrollbar that, again, looks like something left over from Windows 10, so I've created a neat-looking, sleek scrollbar.</p>
                                <p>Although it was originally designed for the <a href="https://github.com/mdo/hyperterm-atom-dark" title="Atom Dark theme" target="_blank" rel="noopener">Atom Dark theme for Hyper</a>, I decided to create one that should look fine on almost any dark theme. It's customisable, so if you want to change the colors, the sourcecode is available on GitHub for you to fork and hack.</p>
                            </span>
                        </moso-project>
                    </div>
                </div>
            </div>
        </div>

        <div class="row resume">
            <div class="md:12 xl:10 xl:offset:1">
                <div class="row">
                    <div class="sm:12">
                        <h2 class="stuff-headline">I've also made stuff for</h2>
                    </div>
                </div>
                <div class="row" v-masonry transition-duration="0.2s" item-selector=".lg\:6">
                    <div class="md:12 lg:6 masonry-column" v-masonry-tile>
                        <moso-project class="single" image="/images/static/skm-logo.svg" project-title="Danish Ministry of Treasury" sub-title="Claimant portal">
                            <span></span>
                        </moso-project>
                        <moso-project class="single" image="/images/static/erst.png" project-title="Danish Business Authority" sub-title="Danish WebDesign Standards">
                            <span></span>
                        </moso-project>
                        <moso-project class="single" image="/images/static/nyidk.svg" project-title="New to Denmark" sub-title="Portal for The Danish Immigration Service">
                            <span></span>
                        </moso-project>
                        <moso-project class="single" image="/images/static/riverfisher.svg" project-title="Riverfisher" sub-title="Community for anglers">
                            <span></span>
                        </moso-project>
                        <moso-project class="single" image="/images/static/scratcher.svg" project-title="Scratcher" sub-title="Gamification platform">
                            <span></span>
                        </moso-project>
                        <moso-project class="single" image="/images/static/vestergaard.svg" project-title="Vestergaard Huse" sub-title="House construction">
                            <span></span>
                        </moso-project>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import MosoProject from '~/components/moso-project/moso-project.vue'

export default {
    name: 'Projects',
    layout: 'default',
    components: {
        MosoProject
    },
    data: function() {
        return {
            projects: '',
            smallprojects: ''
        }
    },
    mounted() {
        this.fetchData();
    },
    methods: {
        fetchData() {
            axios.get('https://api.moso.io/api/v1/projectsdata')
            .then(response => {
                this.projects = response.data.projects;
                this.smallprojects = response.data.smallprojects;
            });
        }
    }
}
</script>
