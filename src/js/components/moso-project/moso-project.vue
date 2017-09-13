<template>
    <div class="project">
        <div class="project-header">
            <div class="project-icon">
                <img :src="icon" alt="">
            </div>
            <div class="project-title">
                <h4>{{ projectTitle }}</h4>
            </div>
            <div class="project-link">
                <span class="sub-title">{{ subTitle }}</span>
                <a class="sub-link" :href="link">{{ link | stripHTTP }}</a>
            </div>
        </div>
        <div class="project-body">
            <slot></slot>
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

        filters: {
            stripHTTP: function(value) {

                value = value.toString();

                if (value.match(/https?:\/\//)) {
                    return value.replace(/https?:\/\//, '');
                }
            }
        },

        mounted() {
            //
        }
    }
</script>
