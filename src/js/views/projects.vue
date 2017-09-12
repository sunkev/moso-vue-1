<template>
    <div class="container-fluid">
        <div class="row portfolio">
            <div class="md-8 md-offset-2">
                <div class="row" v-masonry transition-duration="0.2s" item-selector=".xl-6">

                    <div class="sm-12 xl-6 masonry-column" v-masonry-tile>
                        <moso-project icon="/images/assets/flexgrid-logo.png" project-title="Flexgrid" sub-title="Lorem ipsum" link="https://flexgrid.co" image="/images/assets/flexgrid-logo.png">
                            <p>A simple grid based on <a href="https://developer.mozilla.org/en-US/docs/Web/CSS/flex" title="flexbox" rel="noopener">flexbox</a> layout. Flexgrid is an integral part of the <a href="https://getnano.io" title="Nano" rel="noopener">Nano</a> framework, and, if not modified, uses <a href="https://getbootstrap.com" title="Bootstrap" rel="noopener">Bootstrap</a>'s rigid ruleset.</p>
                        </moso-project>
                    </div>
                    <div class="sm-12 xl-6 masonry-column" v-masonry-tile>
                        <moso-project icon="/images/assets/3up-logo.png" project-title="3up CDN" sub-title="Lorem ipsum" link="https://cdn.3up.dk" image="/images/assets/3up-logo.png">
                            <p>A fast, global <a href="https://en.wikipedia.org/wiki/Content_delivery_network" title="content delivery network" rel="noopener">content delivery network</a> for stuff that is published to npm. 3up CDN is built upon FOSS technologies from <a href="https://unpkg.com" title="unpkg" rel="noopener">unpkg</a> and works by caching the npm packages on their permanent URLs.</p>
                        </moso-project>
                    </div>
                    <div class="sm-12 xl-6 masonry-column" v-masonry-tile>
                        <moso-project icon="/images/assets/flexgrid-logo.png" project-title="Flexgrid" sub-title="Lorem ipsum" link="https://flexgrid.co" image="/images/assets/flexgrid-logo.png">
                            <p>A simple grid based on <a href="https://developer.mozilla.org/en-US/docs/Web/CSS/flex" title="flexbox" rel="noopener">flexbox</a> layout. Flexgrid is an integral part of the <a href="https://getnano.io" title="Nano" rel="noopener">Nano</a> framework, and, if not modified, uses <a href="https://getbootstrap.com" title="Bootstrap" rel="noopener">Bootstrap</a>'s rigid ruleset.</p>
                        </moso-project>
                    </div>
                    <div class="sm-12 xl-6 masonry-column" v-masonry-tile>
                        <moso-project icon="/images/assets/3up-logo.png" project-title="3up CDN" sub-title="Lorem ipsum" link="https://cdn.3up.dk" image="/images/assets/3up-logo.png">
                            <p>A fast, global <a href="https://en.wikipedia.org/wiki/Content_delivery_network" title="content delivery network" rel="noopener">content delivery network</a> for stuff that is published to npm. 3up CDN is built upon FOSS technologies from <a href="https://unpkg.com" title="unpkg" rel="noopener">unpkg</a> and works by caching the npm packages on their permanent URLs.</p>
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
