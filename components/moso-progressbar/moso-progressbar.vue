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
<style lang="scss" scoped>
@import './assets/sass/variables';

.progressbar-container {
    .progressbar-values {
        display: flex;
        justify-content: flex-start;
        padding-bottom: .25rem;

        span:last-of-type {
            margin-left: auto;
        }
    }
}

.progressbar {
    position: relative;
    width: 100%;
    height: 13px;
    background-color: rgba(158,158,158,.3);
    border-radius: 8px;

    .progress {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 13px;
        background-color: rgba(38,50,56,.9);
        border-radius: 8px;

        .thumb {
            position: absolute;
            top: -3px;
            right: -2px;
            width: 20px;
            height: 20px;
            background-color: #607D8B;
            border-radius: 50%;
            box-shadow: 0 2px 5px 0 rgba(0,0,0,.26);
        }
    }
}
</style>
