<template>
    <div class="container-fluid">
        <div class="row portfolio">
            <div class="md-12 xl-10 xl-offset-1">
                <div class="row" v-masonry transition-duration="0.2s" item-selector=".xl-6">

                    <div class="sm-12 xl-6 masonry-column" v-masonry-tile>
                        <moso-project icon="/images/assets/flexgrid-logo.png" project-title="Flexgrid" sub-title="Flexbox grid" link="https://flexgrid.co">
                            <p>Flexgrid is a simple CSS grid entirely based on  flexbox</a> layout. If not modified, Flexgrid use <a href="https://getbootstrap.com" title="Bootstrap" rel="noopener">Bootstrap</a>'s rigid ruleset.</p>

                            <p>As a small detail, and to distinguish itself from Bootstrap, Flexgrid base its width-triggers on <span class="code">rem</span> instead of pixel. This creates a much more fluid layout, as <span class="code">rem</span> is relative to the <span class="code">html</span> root font-size, which is set to <span class="code">16px</span>.</p>
                        </moso-project>
                    </div>
                    <div class="sm-12 xl-6 masonry-column" v-masonry-tile>
                        <moso-project icon="/images/assets/nano-logo.png" project-title="Nano" sub-title="CSS framework &amp; Vue.js components" link="https://getnano.io">
                            <p>Nano is going to be a full-blown mobile-first, responsive front-end framework made with custom-made <a href="https://vuejs.org" title="Vue.js" rel="noopener">Vue.js</a>-components and <a href="https://sass-lang" title="Sass" rel="noopener">Sass</a>. The components are inspired, both in design and functionality, by Google's <a href="https://material.io/guidelines" title="Material Design guidelines" rel="noopener">Material Design guidelines</a>, however, Nano shouldn't be categorized as Material Design.</p>

                            <p>While Nano is still under development, you can checkout what we're up to at our <em>dev</em>-branch on <a href="https://github.com/getnano/nano-framework/tree/dev" title="GitHub" rel="noopener">GitHub</a>, and you're more than welcome to contribute to the project by sending us a PR.</p>
                        </moso-project>
                    </div>
                    <div class="sm-12 xl-6 masonry-column" v-masonry-tile>
                        <moso-project icon="/images/assets/3up-logo.png" project-title="3up CDN" sub-title="Fast, global CDN" link="https://cdn.3up.dk">
                            <p>3up CDN is a <a href="http://www.symkat.com/cookieless-domains" title="cookieless" rel="noopener">cookieless</a> <a href="https://en.wikipedia.org/wiki/Content_delivery_network" title="content delivery network" rel="noopener">content delivery network</a> that handles static content. However, 3up only caches URL's from <a href="https://npmjs.org" title="npm" rel="noopener">npm</a>, and then instructs the browser to cache the content. It supports versions and tags, like <span class="code">3.0.0</span> or <span class="code">latest</span>, as well as json-ified lists.</p>

                            <p>3up is based on <a href="https://unpkg.com" title="unpkg" rel="noopener">unpkg</a>'s <a href="http://expressjs.com" title="expressjs" rel="noopener">expressjs</a>-server with modifications, and the front-end is built with <a href="http://getbootstrap.com" title="Bootstrap" rel="noopener">Bootstrap 4</a> and <a href="https://vuejs.org" title="Vue.js" rel="noopener">Vue.js</a>.</p>
                        </moso-project>
                    </div>
                    <div class="sm-12 xl-6 masonry-column" v-masonry-tile>
                        <moso-project icon="/images/assets/shade-theme.png" project-title="Shade Ghost theme" sub-title="Dark theme for Ghost" link="https://github.com/moso/shade-ghost-theme">
                            <p>Theme originally made for my <a href="https://ghost.moso.io" title="Ghost">Ghost</a> blog, but I decided to make it available for everyone. Built with <a href="http://getbootstrap.com" title="Bootstrap" rel="noopener">Bootstrap 4</a> and <a href="https://developer.mozilla.org/en-US/docs/Web/CSS/flex" title="flexbox" rel="noopener">flex</a>, and available at the <a href="http://marketplace.ghost.org/themes/free" title="Ghost market place" rel="noopener">Ghost market place</a> and <a href="https://github.com/moso/shade-ghost-theme" title="GitHub" rel="noopener">GitHub</a>.</p>

                            <p>Shade is in the process of being upgraded to the latest version of Bootstrap 4, and to work with Ghost 1.0 as there are some breaking changes within the API. The update will also feature changes to the code structure, as well as upgraded components.</p>
                        </moso-project>
                    </div>
                    <div class="sm-12 xl-6 masonry-column" v-masonry-tile>
                        <moso-project icon="/images/assets/hyper-logo.png" project-title="hyper-arc-dark-controls" sub-title="Arc window controls for Hyper" link="https://github.com/moso/hyper-arc-dark-controls">
                            <p>When I'm developing stuff, I love using <a href="https://ubuntu.com" title="Ubuntu" rel="noopener">Ubuntu</a>. I also like my Ubuntu to look neat, so I've been using the <a href="https://github.com/horst3180/arc-theme" title="Arc theme" rel="noopener">Arc theme</a> for quite a while. However, I also love using the <a href="https://hyper.is" title="Hyper" rel="noopener">Hyper</a> terminal, and since it's built on <a href="https://electron.atom.io" title="Electron" rel="noopener">Electron</a>/<a href="http://chromium.org" title="Chromium" rel="noopener">Chromium</a>, it's very customisable.</p>

                            <p>When you first install Hyper, you get these bulky-looking Windows 10-ish window controls. So I thought I'd create some Arc-themed window controls for Hyper, so it would fit the GTK-theme. These are easily installable through <a href="https://www.npmjs.com/package/hyper-arc-dark-controls" title="npm" rel="noopener">npm</a>, or hyper's own <a href="https://www.npmjs.com/package/hpm-cli" title="hpm" rel="noopener">hpm</a>. And the sourcecode is available on GitHub.</p>
                        </moso-project>
                    </div>
                    <div class="sm-12 xl-6 masonry-column" v-masonry-tile>
                        <moso-project icon="/images/assets/hyper-logo.png" project-title="hyper-dark-scrollbar" sub-title="Pretty scrollbar for Hyper" link="https://github.com/moso/hyper-dark-scrollbar">
                            <p>The <a href="https://hyper.is" title="Hyper" rel="noopener">Hyper</a> terminal also ships with an ugly-looking, non-native scrollbar that, again, looks like something left over from Windows 10, so I've created a neat-looking, sleek scrollbar.</p>

                            <p>Although it was originally designed for the <a href="https://github.com/mdo/hyperterm-atom-dark" title="Atom Dark theme" rel="noopener">Atom Dark theme for Hyper</a>, I decided to create one that should look fine on almost any dark theme. It's customisable, so if you want to change the colors, the sourcecode is available on GitHub for you to fork and hack.</p>
                        </moso-project>
                    </div>

                </div>
            </div>
        </div>
    </div>
</template>
<script>
    export default {
        mounted() {

        }
    }
</script>
