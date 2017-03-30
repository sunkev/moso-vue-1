<template>
    <div class="profile">
        <div class="profile-image">
            <img :src="image">
        </div>
        <h4>{{ name }}</h4>
        <h6>{{ position }}</h6>
        <div class="icon-group">
            <ul>
                <slot></slot>
            </ul>
        </div>
    </div>
</template>
<script>
    export default {
        props: {
            image: {
                type: String
            },

            name: {
                type: String
            },

            position: {
                type: String
            }
        },

        mounted() {
            //
        }
    }
</script>
