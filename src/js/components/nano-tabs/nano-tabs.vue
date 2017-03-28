<template>
    <div class="tabs" :class="tabClasses">
        <ul>
            <li v-for="tab in tabs" :id="tab.id" ref="tabHeader" :class="getTabClass(tab)" :disabled="tab.disabled">
                <a :href="tab.href" @click="selectTab(tab)" v-if="hashes" v-ripple>
                    <i class="hidden-xs hidden-sm mdi" :class="tab.icon" v-if="tab.icon"></i>
                    {{ tab.name }}
                </a>
                <a @click.prevent="selectTab(tab)" v-else v-ripple>
                    <i class="hidden-xs hidden-sm mdi" :class="tab.icon" v-if="tab.icon"></i>
                    {{ tab.name }}
                </a>
            </li>
            <span class="tabs-indicator" :class="indicatorClasses" ref="indicator"></span>
        </ul>
        <div class="tabs-content" ref="tabContent" :style="{ height: contentHeight }">
            <div class="tabs-wrapper" :style="{ transform: `translate3D(-${contentWidth}, 0, 0)` }">
                <slot></slot>
            </div>
        </div>
    </div>
</template>

<script>
    import throttle from '../../utils/throttle';

    export default {
        props: {
            hashes: {
                default: false
            },

            icon: {
                type: String
            },

            fixed: {
                default: false,
                type: Boolean
            },

            transparent: {
                default: false,
                type: Boolean
            }
        },

        data() {
            return {
                tabs: {},
                activeTab: null,
                activeTabNumber: null,
                contentHeight: '0px',
                contentWidth: '0px',
                transitionOff: false
            }
        },

        mounted() {
            this.$nextTick(() => {
                this.observeElementChanges();
                window.addEventListener('resize', this.calculateOnResize);

                if (Object.keys(this.tabs).length && !this.activeTab) {
                    let firstTab = Object.keys(this.tabs)[0];

                    this.selectTab(this.tabs[firstTab]);
                }

                this.calculatePosition();
            });
        },

        beforeDestroy() {
            if (this.parentObserver) {
                this.parentObserver.disconnect();
            }
            window.removeEventListener('resize', this.calculateOnResize);
        },

        computed: {
            tabClasses() {
                return {
                    'transition-off': this.transitionOff,
                    'transparent': this.transparent,
                    'fixed': this.fixed,
                };
            },

            indicatorClasses() {
                let toLeft = this.lastIndicatorNumber > this.activeTabNumber;

                this.lastIndicatorNumber = this.activeTabNumber;

                return {
                    'to-right': !toLeft,
                    'to-left': toLeft
                };
            }
        },

        methods: {
            observeElementChanges() {
                this.parentObserver = new MutationObserver(throttle(this.calculateOnWatch, 50));
                this.parentObserver.observe(this.$refs.tabContent, {
                    childList: true,
                    attributes: true,
                    subtree: true
                });
            },

            debounceTransition() {
                window.clearTimeout(this.transitionControl);
                this.transitionControl = window.setTimeout(() => {
                    this.calculatePosition();
                    this.transitionOff = false;
                }, 1);
            },

            calculateOnWatch() {
                this.calculatePosition();
                this.debounceTransition();
            },

            calculateOnResize() {
                this.transitionOff = true;
                this.calculateOnWatch();
            },

            getTabClass(tab) {
                return {
                    'active': (this.activeTab && this.activeTab.id) && this.activeTab.id  === tab.id,
                    'disabled': tab.disabled
                };
            },

            registerTab(tab) {
                this.tabs[tab.id] = tab;

                if (tab.selected) {
                    this.selectTab(tab);
                }
            },

            selectTab(selectedTab) {
                this.activeTab = selectedTab;
                this.activeTabNumber = this.getTabIndex(selectedTab.id);

                this.calculatePosition();
                this.$emit('change', this.activeTabNumber);
            },

            getTabIndex(id) {
                const idList = Object.keys(this.tabs);

                return idList.indexOf(id);
            },

            calculatePosition() {
                window.requestAnimationFrame(() => {
                    this.calculateIndicatorPosition();
                    this.calculateTabsWidthAndPosition();
                    this.calculateContentHeight();
                });
            },

            calculateIndicatorPosition() {
                if (this.$refs.tabHeader && this.$refs.tabHeader[this.activeTabNumber]) {
                    const tabsWidth = this.$el.offsetWidth;
                    const activeTab = this.$refs.tabHeader[this.getTabIndex(this.activeTab.id)];
                    const left = activeTab.offsetLeft;
                    const right = tabsWidth - left - activeTab.offsetWidth;

                    this.$refs.indicator.style.left = left + 'px';
                    this.$refs.indicator.style.right = right + 'px';
                }
            },

            calculateTabsWidthAndPosition() {
                const width = this.$el.offsetWidth;
                let index = 0;
                this.contentWidth = width * this.activeTabNumber + 'px';

                for (const tabId in this.tabs) {
                    const tab = this.tabs[tabId];
                    tab.$el.style.width = width + 'px';
                    tab.$el.style.left = width * index + 'px';
                    index++;
                }
            },

            calculateContentHeight() {
                this.$nextTick(() => {
                    if (Object.keys(this.tabs).length) {
                        let height = this.tabs[this.activeTab.id].$el.offsetHeight;

                        this.contentHeight = height + 'px';
                    }
                });
            }
        }
    }
</script>
