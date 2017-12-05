<template>
    <div class="container:fluid">
        <div class="row portfolio">
            <div class="md:12 xl:10 xl:offset:1">
                <div class="row" v-masonry transition-duration="0.2s" item-selector=".xl\:6">
                    <div class="sm:12 xl:6 masonry-column" v-masonry-tile v-for="project in projects" :key="project.id">
                        <moso-project :image="project.image" :project-title="project.title" :sub-title="project.subtitle" :link="project.link" :icon="project.icon">
                            <span v-html="project.content"></span>
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
                    <div class="md:12 lg:6 masonry-column" v-masonry-tile v-for="project in smallprojects" :key="project.id">
                        <moso-project class="single" :image="project.image" :project-title="project.title" :sub-title="project.subtitle">
                            <span></span>
                        </moso-project>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
    export default {
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
