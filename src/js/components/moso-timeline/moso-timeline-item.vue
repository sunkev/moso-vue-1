<template>
    <li>
        <h3 class="title">{{ entry }}</h3>
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

            time: {
                type: String
            }
        },

        mounted() {
            //
        }
    }
</script>
