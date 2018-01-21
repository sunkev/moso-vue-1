<template>
    <div class="profile">
        <div class="profile-image">
            <img v-lazy-load="image" :alt="name">
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
<style lang="scss">
@import '~/assets/sass/variables';

.profile {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 1rem;
    text-align: center;

    @media (min-width: 992px) {
        padding: 2rem;
    }

    .profile-image {
        width: 125px;

        img {
            width: 100%;
            height: auto;
            border-radius: 50%;
            border: 2px solid #ddd;
        }
    }

    h4 {
        margin: .625rem 0 0;
        font-size: 1.125rem;
        font-weight: 500;
        color: $rgba-black;
    }

    h6 {
        margin: 0;
        font-size: .8125rem;
        font-weight: 400;
        color: rgba(0,0,0,.54);
    }

    .icon-group {
        margin: 1rem 0 0;
        width: 100%;
        font-size: 1.5rem;

        ul {
            display: flex;
            align-items: center;
            max-width: 200px;
            margin: 0 auto;
            padding: 0;
            list-style-type: none;
        }
    }
}
</style>
