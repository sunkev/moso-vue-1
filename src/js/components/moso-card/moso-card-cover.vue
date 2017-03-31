<template>
    <div class="card">
        <div class="card-img-cover">
            <div class="card-img">
                <img :src="image">
            </div>
        </div>
        <div class="card-img-cover-content">
            <div class="card-header">
                <div class="card-title">{{ cardTitle }}</div>
                <a class="card-subtitle" :href="link">{{ link }}</a>
            </div>
        </div>
    </div>
</template>
<script>
    export default {
        props: {
            image: {
                type: String
            },

            cardTitle: {
                type: String
            },

            link: {
                type: String
            }
        },

        mounted() {
            //
        }
    }
</script>
