<template>
    <div class="project">
        <div class="project-icon">
            <img v-lazy-load="image" :alt="name">
        </div>
        <div class="project-content">
            <h3 class="project-title">{{ name }}</h3>
            <a :href="link" :title="name" rel="noopener">{{ link }}</a>
            <slot></slot>
        </div>
    </div>
</template>
<script>
    export default {
        props: {
            image: {
                type: String
            },

            name: {
                type: String
            },

            link: {
                type: String
            }
        },

        mounted() {
            //
        }
    }
</script>
