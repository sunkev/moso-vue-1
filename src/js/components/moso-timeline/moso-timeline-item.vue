<template>
    <li>
        <h3 class="title">{{ entry }}</h3>
        <span class="location" v-if="location">
            <i class="mdi mdi-map-marker"></i> {{ location }}
        </span>
        <span class="time">{{ time }}</span>
        <slot></slot>
    </li>
</template>
<script>
    export default {
        props: {
            entry: {
                type: String
            },

            location: {
                type: String
            },

            time: {
                type: String
            }
        },

        mounted() {
            //
        }
    }
</script>
