<template>
    <li>
        <a :href="link" tabindex="-1">
            <i class="mdi" :class="icon"></i>
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

            icon: {
                type: String
            }
        },

        mounted() {
            //
        }
    }
</script>
