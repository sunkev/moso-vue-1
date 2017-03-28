<template>
  <div class="toolbar" :class="classes">
    <slot></slot>
  </div>
</template>
<script>
    export default {
        props: {
            fixed: {
                default: false,
                type: Boolean
            }
        },

        mounted() {
            //
        },

        computed: {
            classes() {
                return {
                    'fixed': this.fixed
                }
            }
        }
    }
</script>
