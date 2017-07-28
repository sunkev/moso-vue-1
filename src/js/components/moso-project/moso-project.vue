<template>
    <div class="project">
        <div class="project-icon">
            <img v-lazy-load="image" alt="">
        </div>
        <div class="project-content">
            <h3 class="project-title">{{ name }}</h3>
            <a :href="link" :title="link">{{ link }}</a>
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
