<template>
    <li>
        <h3 class="title">{{ entry }}</h3>
        <div class="information">
            <span class="location" v-if="location">
                <img src="~/assets/images/map-marker.svg" alt="Location"> {{ location }}
            </span>
            <span class="time">{{ time }}</span>
        </div>
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
