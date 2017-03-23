<template>
    <div>
        <div class="sidenav" :class="classes" @keyup.esc="close">
            <div class="sidenav-content">
                <slot></slot>
            </div>
        </div>
        <transition name="sidenav-backdrop">
            <div class="sidenav-backdrop" v-if="sidenavShow" @click="close();"></div>
        </transition>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                sidenavShow: false
            };
        },

        props: {
            sidenavSwipe: Boolean,
            sidenavSwipeThreshold: {
                type: Number,
                default: 15
            },
            sidenavSwipeDistance: {
                type: Number,
                default: 100
            }
        },

        computed: {
            classes() {
                return this.sidenavShow && 'sidenav-open';
            }
        },

        methods: {
            show() {
                this.open();
            },
            open() {
                this.sidenavShow = true;
                this.$el.focus();
                this.$emit('open');
            },
            close() {
                this.sidenavShow = false;
                this.$el.blur();
                this.$emit('close');
            },
            toggle() {
                if (this.sidenavShow) {
                    this.close();
                } else {
                    this.open();
                }
            },

            isHorizontallyInside(positionX) {
                return positionX > 0 && positionX < this.mountedRect.left + this.mountedRect.width;
            },
            isVerticallyInside(positionY) {
                return positionY > 0 && positionY < this.mountedRect.top + this.mountedRect.height;
            },
            isFromStartWhenClosed(positionX) {
                if (this.sidenavShow) {
                    return true;
                }
                return positionX < this.sidenavSwipeThreshold;
            }

        },

        mounted() {
            if (!this.sidenavSwipe) {
                return;
            }
        },

        beforeDestroy() {
            if (!this.sidenavSwipe) {
                return;
            }
        }
    };
</script>
