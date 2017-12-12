<template>
    <div class="container:fluid">
        <div class="row">
            <div class="lg:5 xl:4 profile-widgets">
                <div class="widget">
                    <div class="widget__body">
                        <moso-profile image="/images/profile.jpg" name="Morten Sørensen" position="Interface Consultant at Netcompany">
                            <profile-item v-for="profileitem in profileitems" :key="profileitem.id" :link="profileitem.link" :link-class="profileitem.linkclass" :svg="profileitem.svg" :title="profileitem.title"></profile-item>
                        </moso-profile>
                    </div>
                </div>

                <div class="widget">
                    <div class="widget__header">
                        <h3 class="title"><img src="/images/plus-one.svg" alt=""> Skills</h3>
                    </div>
                    <div class="widget__body">
                        <moso-progressbar v-for="progressbar in progressbars" :key="progressbar.id" :name="progressbar.name" :percentage="progressbar.percentage"></moso-progressbar>

                        <a href="/files/morten-sorensen-cv-2017.pdf" class="button button-primary button--raised" title="Download CV (da)" rel="noopener">
                            <svg viewBox="0 0 24 24">
                                <path fill="#ffffff" d="M13,9H18.5L13,3.5V9M6,2H14L20,8V20A2,2 0 0,1 18,22H6C4.89,22 4,21.1 4,20V4C4,2.89 4.89,2 6,2M15,18V16H6V18H15M18,14V12H6V14H18Z" />
                            </svg>
                            Download CV (da)
                            <nano-ripple></nano-ripple>
                        </a>
                    </div>
                </div>
            </div>
            <div class="lg:7 xl:8 info-widgets">
                <div class="widget">
                    <div class="widget__header">
                        <h3 class="title"><img src="/images/profile.svg" alt=""> Profile</h3>
                    </div>
                    <div class="widget__body widget__bio">
                        <div class="bio" v-for="item in bioitems" :key="item.id" v-html="item.content"></div>
                    </div>
                </div>
                <div class="row">
                    <div class="lg:6">
                        <div class="widget">
                            <div class="widget__header">
                                <h3 class="title"><img src="/images/info.svg" alt=""> Information</h3>
                            </div>
                            <div class="widget__body widget__information">
                                <div class="personal-information" v-for="item in informationitems" :key="item.id">
                                    <h4 class="sub-title">Personal information</h4>
                                    <div class="column">
                                        <div class="column-item column-item--left">Name:</div>
                                        <div class="column-item column-item--right">{{item.name}}</div>
                                    </div>
                                    <div class="column">
                                        <div class="column-item column-item--left">Age:</div>
                                        <div class="column-item column-item--right">{{item.age}}</div>
                                    </div>
                                    <div class="column">
                                        <div class="column-item column-item--left">Position:</div>
                                        <div class="column-item column-item--right">{{item.position}}</div>
                                    </div>
                                    <div class="column">
                                        <div class="column-item column-item--left">Nationality:</div>
                                        <div class="column-item column-item--right">{{item.nationality}}</div>
                                    </div>
                                    <div class="column">
                                        <div class="column-item column-item--left">Location:</div>
                                        <div class="column-item column-item--right">{{item.location}}</div>
                                    </div>
                                    <div class="column">
                                        <div class="column-item column-item--left">Web:</div>
                                        <div class="column-item column-item--right"><a :href="item.url" :title="item.url">{{item.url}}</a></div>
                                    </div>
                                </div>

                                <div class="contact-information" v-for="item in contactitems" :key="item.id">
                                    <h4 class="sub-title">Contact information</h4>
                                    <div class="column">
                                        <div class="column-item column-item--left">E-mail:</div>
                                        <div class="column-item column-item--right"><a :href="'mailto' + item.email" :title="item.email">{{item.email}}</a></div>
                                    </div>
                                    <div class="column">
                                        <div class="column-item column-item--left">Phone:</div>
                                        <div class="column-item column-item--right">--- Removed ---</div>
                                    </div>
                                    <div class="column">
                                        <div class="column-item column-item--left">Social:</div>
                                        <div class="column-item column-item--right">
                                            <ul class="list list--inline list--social" v-for="icon in socialicons" :key="icon.id">
                                                <li>
                                                    <a :href="icon.url" class="button icon-button icon-button--small" :title="icon.title" rel="noopener">
                                                        <img :src="icon.img" alt="">
                                                        <nano-ripple></nano-ripple>
                                                    </a>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="lg:6">
                        <div class="widget">
                            <div class="widget__header">
                                <h3 class="title"><img src="/images/wrench.svg" alt=""> Toolbox</h3>
                            </div>
                            <div class="widget__body widget__toolbox">
                                <p>Besides playing around with HTML, CSS, and jQuery, I more of less master a lot of frameworks and building tools to create great webapps. Here I have listed some of them:</p>

                                <ul class="toolbox-list">
                                    <li v-for="tool in toolitems">{{tool.item}}</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
    export default {
        data: function() {
            return {
                profileitems: '',
                progressbars: '',
                bioitems: '',
                informationitems: '',
                contactitems: '',
                socialicons: '',
                toolitems: ''
            }
        },

        mounted() {
            this.fetchData();
        },

        methods: {
            fetchData() {
                axios.get('https://api.moso.io/api/v1/profiledata')
                .then(response => {
                    this.profileitems = response.data.profileitems;
                    this.progressbars = response.data.progressbars;
                    this.bioitems = response.data.bioitems;
                    this.informationitems = response.data.informationitems;
                    this.contactitems = response.data.contactitems;
                    this.socialicons = response.data.socialicons;
                    this.toolitems = response.data.toolitems;
                });
            }
        }
    }
</script>
