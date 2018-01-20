<template>
    <div class="version-badge">
        <slot>{{ version }}</slot>
    </div>
</template>
<script>
    export default {
        props: {
            version: String
        },

        mounted() {

        }
    }
</script>
