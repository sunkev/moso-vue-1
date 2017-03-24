<template>
    <li>
        <router-link :to="link" exact>
            <i class="mdi" :class="icon" v-if="icon"></i>
            <slot></slot>
        </router-link>
    </li>
</template>
<script>
    export default {
        props: {
            link: String,
            icon: String,
        },

        mounted() {

        }
    }
</script>
