<template>
    <div class="project">
        <div class="project-header">
            <div class="project-icon">
                <img :src="icon" alt="">
            </div>
            <div class="project-title">
                <h4>{{ projectTitle }}</h4>
                <span class="sub-title">{{ subTitle }}</span>
            </div>
            <div class="project-link">
                <a class="sub-link" :href="link">{{ link }}</a>
            </div>
        </div>
        <div class="project-body">
            <slot></slot>
            <img :src="image" alt="">
        </div>
    </div>
</template>
<script>
    export default {
        props: {
            icon: {
                type: String
            },

            projectTitle: {
                type: String
            },

            subTitle: {
                type: String
            },

            link: {
                type: String
            },

            image: {
                type: String
            }
        },

        mounted() {
            //
        }
    }
</script>
