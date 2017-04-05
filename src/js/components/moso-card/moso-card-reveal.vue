<template>
    <div class="card card-reveal">
        <div class="card-image" @click="toggle();">
            <img :src="image" alt="">
            <nano-ripple></nano-ripple>
        </div>
        <div class="card-content">
            <h2 class="card-title" @click="toggle();">{{ cardTitle }}</h2>
            <p class="card-url"><a :href="link">{{ link }}</a></p>
            <div class="card-button">
                <button class="button button--raised button-primary" @click="toggle();">
                    Read more
                    <nano-ripple></nano-ripple>
                </button>
            </div>
        </div>
        <div class="card-reveal" :class="classes">
            <p class="card-title">{{ cardTitle }}</p>
            <span class="close" @click="close();">
                <i class="mdi mdi-close"></i>
            </span>
            <div class="card-description">
                <slot></slot>
            </div>
        </div>
    </div>
</template>
<script>
    export default {
        data() {
            return {
                cardReveal: false
            }
        },

        props: {
            image: {
                type: String
            },

            cardTitle: {
                type: String
            },

            link: {
                type: String
            }
        },

        computed: {
            classes() {
                return this.cardReveal && 'revealed';
            }
        },

        methods: {
            reveal() {
                this.open();
            },

            open() {
                this.$el.classList.add('revealed');
                this.cardReveal = true;
                //this.$el.focus();
                this.$emit('open');
            },

            close() {
                this.$el.classList.remove('revealed');
                this.cardReveal = false;
                //this.$el.blur();
                this.$emit('close');
            },

            toggle() {
                if (this.cardReveal) {
                    this.close();
                } else {
                    this.open();
                }
            }
        },

        // toggleCard: function() {
        //     var target = this.$.reveal;
        //     target.style.display = 'block';
        //     target.style.top = target.offsetHeight + 'px';

        //     setTimeout(function() {
        //         target.style.top = '0';
        //     }, 10);

        //     target.querySelector('.close').addEventListener('click', function() {
        //         target.style.top = target.offsetHeight + 'px';
        //         setTimeout(function() {
        //             target.style.display = 'none';
        //         }, 200);
        //     });
        // },

      // _htmlChanged: function() {
      //     this.$$('.card-description').innerHTML = this.cardDescription;
      // }

        mounted() {
            //
        }
    }
</script>
