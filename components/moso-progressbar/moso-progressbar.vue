<template>
    <div class="progressbar-container">
        <div class="progressbar-values">
            <span>{{ name }}</span>
            <span>{{ percentage }}%</span>
        </div>
        <div class="progressbar">
            <span class="progress" :style="'width: ' + percentage + '%'">
                <span class="thumb"></span>
            </span>
        </div>
    </div>
</template>
<script>
    export default {
        props: {
            name: {
                type: String
            },

            percentage: {
                type: String
            }

        },

        mounted() {
            //
        }
    }
</script>
