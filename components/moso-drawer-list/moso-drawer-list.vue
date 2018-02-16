<template>
    <div class="drawer-list">
        <ul id="drawerMenu">
            <slot></slot>
        </ul>
    </div>
</template>
<script>
export default {
    mounted() {
        //
    },
}
</script>
<style lang="scss">
@import './assets/sass/variables';

.drawer-list {
    margin-top: 20px;

    ul {
        margin: 0;
        padding: 0;
        list-style-type: none;

        & >>> li {
            display: flex;
            height: 40px;

            a {
                display: block;
                width: 100%;
                padding: 0 2rem;
                font-weight: 400;
                color: $sidenav-link-color;
                line-height: 40px;
                user-select: none;
                text-decoration: none;
                transition: color .2s ease-in-out;
                -webkit-tap-highlight-color: rgba(255,255,255,0);

                span {
                    display: flex;
                    align-items: center;
                    height: 40px;
                }

                svg {
                    position: relative;
                    top: -1px;
                    width: 1.125rem;
                    height: 1.125rem;
                    margin-right: 10px;
                    fill: $sidenav-link-color;
                    transition: fill .2s ease-in-out;
                }

                &:hover,
                &:focus,
                &:active,
                &:hover:active {
                    background-color: transparent !important;
                    color: lighten($sidenav-link-color, 10%);
                    outline: none;
                    user-select: none;
                    text-decoration: none;

                    svg {
                        fill: lighten($sidenav-link-color, 10%);
                    }
                }

                &.router-link-active,
                &.active {
                    color: $sidenav-active-link-color;
                    font-weight: 500;

                    svg {
                        fill: $sidenav-active-link-color;
                    }

                    &:hover,
                    &:focus,
                    &:active,
                    &:hover:active {
                        color: $sidenav-active-link-color;
                        outline: none;
                        user-select: none;
                        text-decoration: none;

                        svg {
                            fill: $sidenav-active-link-color;
                        }
                    }
                }
            }
        }
    }
}
</style>
