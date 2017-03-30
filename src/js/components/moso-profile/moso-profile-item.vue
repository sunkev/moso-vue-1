<template>
    <li>
        <a :href="link" class="button icon-button" :class="linkClass" tabindex="-1">
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

            linkClass: {
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
