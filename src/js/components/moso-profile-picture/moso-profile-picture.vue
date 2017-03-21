<template>
    <div class="profile-picture">
        <div class="media">
            <div class="image">
                <img :src="image" alt="">
            </div>
            <slot name="name"></slot>
            <slot name="position"></slot>
        </div>
    </div>
</template>
<script>
    export default {
        props: {
            image: String
        },

        mounted() {

        }
    }
</script>
