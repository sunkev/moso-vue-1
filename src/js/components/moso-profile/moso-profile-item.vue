<template>
    <li>
        <a :href="link" class="button icon-button" :class="linkClass" tabindex="-1" :title="title" rel="noopener">
            <img :src="svg" alt="" v-if="svg">
            <i class="mdi" :class="icon" v-if="icon"></i>
            <nano-ripple></nano-ripple>
        </a>
    </li>
</template>
<script>
    export default {
        props: {
            link: {
                type: String
            },

            linkClass: {
                type: String
            },

            icon: {
                type: String
            },

            svg: {
                type: String
            },

            title: {
                type: String
            }
        },

        mounted() {
            //
        }
    }
</script>
