<template>
    <div class="container:fluid">
        <div class="row portfolio">
            <div class="md:12 xl:10 xl:offset:1">
                <no-ssr>
                    <div class="row" v-masonry transition-duration="0.2s" item-selector=".xl\:6">
                        <div class="sm:12 xl:6 masonry-column" v-masonry-tile v-for="project in projects" :key="project.id">
                            <moso-project :image="project.image" :project-title="project.title" :sub-title="project.subtitle" :link="project.url" :icon="project.icon">
                                <span v-html="project.description"></span>
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
                        <h2 class="stuff-headline">I've also made stuff for</h2>
                    </div>
                </div>
                <no-ssr>
                    <div class="row" v-masonry transition-duration="0.2s" item-selector=".lg\:6">
                        <div class="md:12 lg:6 masonry-column" v-masonry-tile v-for="smallproject in smallprojects" :key="smallproject.id">
                            <moso-project class="single" :image="smallproject.image" :project-title="smallproject.title" :sub-title="smallproject.subtitle" />
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
import axios from 'axios'

export default {
    layout: 'default',
    components: {
        'moso-project': MosoProject,
        'no-ssr': NoSSR
    },
    data() {
        return {
            projects: [
                {
                    title: "qualtrics",
                    subtitle: "A ruby gem that wraps the Qualtrics REST API",
                    // image: "/images/github.svg",
                    url: "https://github.com/sunkev/qualtrics",
                    icon: "<svg xmlns=\"http://www.w3.org/2000/svg\" height=\"24\" width=\"24\" viewBox=\"0 0 24 24\"><path d=\"m12 2a10 10 0 0 0 -10 10c0 4.42 2.87 8.17 6.84 9.5 0.5 0.08 0.66-0.23 0.66-0.5v-1.69c-2.77 0.6-3.36-1.34-3.36-1.34-0.46-1.16-1.11-1.47-1.11-1.47-0.91-0.62 0.07-0.6 0.07-0.6 1 0.07 1.53 1.03 1.53 1.03 0.87 1.52 2.34 1.07 2.91 0.83 0.09-0.65 0.35-1.09 0.63-1.34-2.22-0.25-4.55-1.11-4.55-4.92 0-1.11 0.38-2 1.03-2.71-0.1-0.25-0.45-1.29 0.1-2.64 0 0 0.84-0.27 2.75 1.02 0.79-0.22 1.65-0.33 2.5-0.33s1.71 0.11 2.5 0.33c1.91-1.29 2.75-1.02 2.75-1.02 0.55 1.35 0.2 2.39 0.1 2.64 0.65 0.71 1.03 1.6 1.03 2.71 0 3.82-2.34 4.66-4.57 4.91 0.36 0.31 0.69 0.92 0.69 1.85v2.74c0 0.27 0.16 0.59 0.67 0.5 3.97-1.34 6.83-5.08 6.83-9.5a10 10 0 0 0 -10 -10z\"/></svg>",
                    description: "A convenient wrapper for the Qualtrics REST API V2. Allows a registered Qualtrics user to create panels, change recipients and send surveys."
                },
                {
                    title: "RecLetter",
                    subtitle: "A blockchain recommendation letter service",
                    // image: "/images/github.svg",
                    url: "https://github.com/vmishra22/cscie599bc/blob/master/Block%20Chain%20Use%20Case.pdf",
                    icon: "<svg xmlns=\"http://www.w3.org/2000/svg\" height=\"24\" width=\"24\" viewBox=\"0 0 24 24\"><path d=\"m12 2a10 10 0 0 0 -10 10c0 4.42 2.87 8.17 6.84 9.5 0.5 0.08 0.66-0.23 0.66-0.5v-1.69c-2.77 0.6-3.36-1.34-3.36-1.34-0.46-1.16-1.11-1.47-1.11-1.47-0.91-0.62 0.07-0.6 0.07-0.6 1 0.07 1.53 1.03 1.53 1.03 0.87 1.52 2.34 1.07 2.91 0.83 0.09-0.65 0.35-1.09 0.63-1.34-2.22-0.25-4.55-1.11-4.55-4.92 0-1.11 0.38-2 1.03-2.71-0.1-0.25-0.45-1.29 0.1-2.64 0 0 0.84-0.27 2.75 1.02 0.79-0.22 1.65-0.33 2.5-0.33s1.71 0.11 2.5 0.33c1.91-1.29 2.75-1.02 2.75-1.02 0.55 1.35 0.2 2.39 0.1 2.64 0.65 0.71 1.03 1.6 1.03 2.71 0 3.82-2.34 4.66-4.57 4.91 0.36 0.31 0.69 0.92 0.69 1.85v2.74c0 0.27 0.16 0.59 0.67 0.5 3.97-1.34 6.83-5.08 6.83-9.5a10 10 0 0 0 -10 -10z\"/></svg>",
                    description: "Master's degree capstone project. A recommendation letter webapp that leverages smart contracts on ethereum blockchain. Aim to add accountability to recommendation letters during the transfer between the school, student and recommender. Manuscript in progress."
                },
                {
                    title: "On the Trail",
                    subtitle: "An app that provides safer trails through better communication",
                    // image: "/images/github.svg",
                    url: "https://github.com/sunkev/on_the_trail",
                    icon: "<svg xmlns=\"http://www.w3.org/2000/svg\" height=\"24\" width=\"24\" viewBox=\"0 0 24 24\"><path d=\"m12 2a10 10 0 0 0 -10 10c0 4.42 2.87 8.17 6.84 9.5 0.5 0.08 0.66-0.23 0.66-0.5v-1.69c-2.77 0.6-3.36-1.34-3.36-1.34-0.46-1.16-1.11-1.47-1.11-1.47-0.91-0.62 0.07-0.6 0.07-0.6 1 0.07 1.53 1.03 1.53 1.03 0.87 1.52 2.34 1.07 2.91 0.83 0.09-0.65 0.35-1.09 0.63-1.34-2.22-0.25-4.55-1.11-4.55-4.92 0-1.11 0.38-2 1.03-2.71-0.1-0.25-0.45-1.29 0.1-2.64 0 0 0.84-0.27 2.75 1.02 0.79-0.22 1.65-0.33 2.5-0.33s1.71 0.11 2.5 0.33c1.91-1.29 2.75-1.02 2.75-1.02 0.55 1.35 0.2 2.39 0.1 2.64 0.65 0.71 1.03 1.6 1.03 2.71 0 3.82-2.34 4.66-4.57 4.91 0.36 0.31 0.69 0.92 0.69 1.85v2.74c0 0.27 0.16 0.59 0.67 0.5 3.97-1.34 6.83-5.08 6.83-9.5a10 10 0 0 0 -10 -10z\"/></svg>",
                    description: "A simple website that will allow users to create custom text and email notifications to keep friends and loved ones informed for their whereabouts during hikes. The result of 4 hours of extreme agile hacking."
                },
                {
                    title: "S3 JS Uploader",
                    subtitle: "Pure javascript multipart file uploader",
                    // image: "/images/github.svg",
                    url: "https://github.com/sunkev/s3-js-file-uploader",
                    icon: "<svg xmlns=\"http://www.w3.org/2000/svg\" height=\"24\" width=\"24\" viewBox=\"0 0 24 24\"><path d=\"m12 2a10 10 0 0 0 -10 10c0 4.42 2.87 8.17 6.84 9.5 0.5 0.08 0.66-0.23 0.66-0.5v-1.69c-2.77 0.6-3.36-1.34-3.36-1.34-0.46-1.16-1.11-1.47-1.11-1.47-0.91-0.62 0.07-0.6 0.07-0.6 1 0.07 1.53 1.03 1.53 1.03 0.87 1.52 2.34 1.07 2.91 0.83 0.09-0.65 0.35-1.09 0.63-1.34-2.22-0.25-4.55-1.11-4.55-4.92 0-1.11 0.38-2 1.03-2.71-0.1-0.25-0.45-1.29 0.1-2.64 0 0 0.84-0.27 2.75 1.02 0.79-0.22 1.65-0.33 2.5-0.33s1.71 0.11 2.5 0.33c1.91-1.29 2.75-1.02 2.75-1.02 0.55 1.35 0.2 2.39 0.1 2.64 0.65 0.71 1.03 1.6 1.03 2.71 0 3.82-2.34 4.66-4.57 4.91 0.36 0.31 0.69 0.92 0.69 1.85v2.74c0 0.27 0.16 0.59 0.67 0.5 3.97-1.34 6.83-5.08 6.83-9.5a10 10 0 0 0 -10 -10z\"/></svg>",
                    description: "Modular JavaScript file upload using Amazon's multipart upload and the JavaScript file API to upload files up to 2TB client side."
                }
            ],
            smallprojects: [{
                title: "BioProjects",
                subtitle: "New England Biolab's Internal Experiment Tracker",
                image: "/images/NEB.png"
            }]
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
