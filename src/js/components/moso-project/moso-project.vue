<template>
    <div class="project">
        <div class="project-header">
            <div class="project-image" v-if="image">
                <img :src="image" alt="">
            </div>
            <div class="project-title" v-if="projectTitle">
                <h4>{{ projectTitle }}</h4>
            </div>
            <div class="project-link" v-if="link || subTitle">
                <span class="sub-title" v-if="subTitle">{{ subTitle }}</span>
                <a class="sub-link" :href="link" :title="link" v-if="link">
                    <svg viewBox="0 0 24 24" v-html="icon"></svg>
                </a>
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
            image: {
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

            icon: {
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
