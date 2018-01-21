<template>
    <div class="profile-picture">
        <div class="media">
            <div class="image">
                <img v-lazy-load="image" alt="Morten Sørensen">
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
        //
    }
}
</script>
<style lang="scss">
@import './assets/sass/variables';

.profile-picture {
    padding: .9125rem;
    text-align: center;
    box-shadow: 0 2px 5px rgba(0,0,0,.26);

    .image {
        width: 100px;
        height: 100px;
        margin: 1px auto 8px auto;

        img {
            display: inline-block;
            width: 100%;
            height: 100%;
            border-radius: 50%;
            border: 2px solid #37474F;
        }
    }

    .media {
        & >>> p {
            margin: 0;
            text-align: center;
            color: $text-color-sidenav;

            &:first-of-type {
                font-size: 1.25rem;
                font-weight: 400;
                margin: 0 0 .3125rem;
            }

            &:last-of-type {
                font-size: .8125rem;
                font-weight: 300;
            }
        }
    }
}
</style>
