<template>
    <div class="project">
        <div class="project-header">
            <div class="project-image" v-if="image">
                <img :src="image" alt="">
            </div>
            <div class="project-title" v-if="projectTitle">
                <h4>{{ projectTitle }}</h4>
            </div>
            <div class="project-link" v-if="link || subTitle">
                <span class="sub-title" v-if="subTitle">{{ subTitle }}</span>
                <a class="sub-link" :href="link" :title="link" v-if="link">
                    <svg viewBox="0 0 24 24" v-html="icon"></svg>
                </a>
            </div>
        </div>
        <div class="project-body">
            <slot></slot>
        </div>
    </div>
</template>
<script>
export default {
    props: {
        image: {
            type: String
        },
        projectTitle: {
            type: String
        },
        subTitle: {
            type: String
        },
        link: {
            type: String
        },
        icon: {
            type: String
        }
    },
    filters: {
        stripHTTP: function(value) {
            value = value.toString();
            if (value.match(/https?:\/\//)) {
                return value.replace(/https?:\/\//, '');
            }
        }
    },
    mounted() {
        //
    }
}
</script>
<style lang="scss">
@import './assets/sass/variables';

.project {
    display: flex;
    flex-direction: column;
    position: relative;
    background-color: #fff;
    padding: 1rem;
    border-radius: 2px;
    font-size: 1rem;
    font-weight: 400;
    color: $rgba-black;
    box-shadow: $box-shadow;
    overflow: hidden;
    z-index: 1;
    -webkit-tap-highlight-color: transparent;
    -webkit-tap-highlight-color: rgba(255,255,255,0);

    .project-header {
        position: relative;
        margin-bottom: 1rem;

        @media (min-width: 992px) {
            height: 50px;
        }

        .project-image {
            position: absolute;
            top: 0;
            left: 0;

            img {
                width: 50px;
                height: 50px;
                margin-right: .625rem;
                border: 2px solid #ddd;
                border-radius: 50%;
            }
        }

        .project-title {
            margin-left: 3.75rem;

            h4 {
                margin: 0;
                font-size: 1.25rem;
                font-weight: 500;
                color: rgba(0,0,0,.87);
                overflow: hidden;
                text-overflow: ellipsis;
                white-space: nowrap;

                @media (min-width: 992px) {
                    font-size: 1.875rem;
                }
            }
        }

        .project-link {
            margin-left: 3.75rem;

            @media (min-width: 992px) {
                display: flex;
                flex-direction: row;
            }

            .sub-title {
                display: block;
                font-size: .8125rem;
                color: rgba(0,0,0,.54);
                margin-bottom: .1rem;

                @media (min-width: 992px) {
                    display: initial;
                    margin-bottom: 0;
                }
            }

            .sub-link {
                position: absolute;
                top: -0.5rem;
                right: -0.5rem;

                @media (min-width: 992px) {
                    top: 0;
                    right: 0;
                    margin-left: auto;
                }

                svg {
                    width: 1.25rem;
                    height: 1.25rem;
                    fill: #000;
                    opacity: 0.54;
                    transition: opacity .2s ease-in-out;

                    &:hover,
                    &:focus,
                    &:active,
                    &:hover:active {
                        fill: #000;
                        opacity: 0.87;
                    }
                }
            }
        }
    }

    .project-body {
        padding-top: 1rem;
        border-top: 1px solid #ddd;

        & >>> p {
            margin: 0 0 1rem;
            font-size: .9375rem;
            color: rgba(0,0,0,.65);

            &:last-of-type {
                margin: 0;
            }
        }
    }

    &.single {
        .project-header {
            height: 50px;
            margin: 0;

            .project-title {
                h4 {
                    font-size: 1.5rem;
                }
            }

            .project-link {
                position: absolute;
                bottom: 0;
                margin-left: 3.75rem;
            }
        }

        .project-body {
            padding: 0;
            border: 0;
        }
    }
}
</style>
