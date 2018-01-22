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
        //
    }
}
</script>
<style lang="scss" scoped>
@import './assets/sass/variables';

.version-badge {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 20px;
    margin: 1.125rem 1.5rem;
    padding: .625rem;
    background-color: rgba(0,0,0,.26);
    border-radius: 2px;
    font-size: .6875rem;
    color: #fff;
    line-height: 1;

    @media (max-width: 767px) {
        margin: 1.125rem 0 1.125rem 1.5rem;
        padding: .3125rem
    }
}
</style>
