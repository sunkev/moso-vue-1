<template>
    <div class="tab">
        <slot></slot>
    </div>
</template>

<script>
    import getClosestVueParent from '../../utils/getClosestVueParent';

    export default {
        props: {
            name: { required: true },
            selected: { default: false },
            icon: {
                type: String
            }
        },

        data() {
            return {}
        },

        computed: {
            href() {
                return '#' + this.id;
            },

            id() {
                return this.name.toLowerCase().replace(/ /g, '-');
            }
        },

        mounted() {
            this.parentTabs = getClosestVueParent(this.$parent, 'tabs');

            if (!this.parentTabs) {
                throw new Error('You must wrap the nano-tab in a nano-tabs');
            }

            this.parentTabs.registerTab(this);
        }
    }
</script>
