<template>
    <ul class="timeline">
        <li>
            <h3 class="title">{{ entry }}</h3>
            <span class="time">{{ time }}</span>
            <slot></slot>
        </li>
    </ul>
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
