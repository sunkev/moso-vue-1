<template>
    <div class="container:fluid">
        <div class="row">
            <div class="lg:5 xl:4 profile-widgets">
                <div class="widget">
                    <div class="widget__body" v-for="title in titles" :key="title.id">
                        <moso-profile image="/images/profile.jpg" name="Kevin Sun" :position="title.title">
                            <profile-item v-for="item in devicons" :key="item.id"
                                            :link="item.url"
                                            :link-class="item.name.toLowerCase().trim()"
                                            :svg="item.icon"
                                            :title="item.name" />
                        </moso-profile>
                    </div>
                </div>

                <div class="widget">
                    <div class="widget__header">
                        <h3 class="title">
                            <svg viewBox="0 0 16 16" id="info-svg">
                                <path d="M 7.5 1 C 3.917969 1 1 3.917969 1 7.5 C 1 11.082031 3.917969 14 7.5 14 C 11.082031 14 14 11.082031 14 7.5 C 14 3.917969 11.082031 1 7.5 1 Z M 7.5 2 C 10.542969 2 13 4.457031 13 7.5 C 13 10.542969 10.542969 13 7.5 13 C 4.457031 13 2 10.542969 2 7.5 C 2 4.457031 4.457031 2 7.5 2 Z M 7 4 L 7 5 L 8 5 L 8 4 Z M 7 6 L 7 11 L 8 11 L 8 6 Z " />
                            </svg>
                            Information
                        </h3>
                    </div>
                    <div class="widget__body widget__information">
                        <div class="personal-information">
                            <div class="column">
                                <div class="column-item column-item--left">Name:</div>
                                <div class="column-item column-item--right">Kevin Sun</div>
                            </div>
                            <div class="column">
                                <div class="column-item column-item--left">Age:</div>
                                <div class="column-item column-item--right">28</div>
                            </div>
                            <div class="column">
                                <div class="column-item column-item--left">Position:</div>
                                <div class="column-item column-item--right">Full Stack Developer</div>
                            </div>
                            <div class="column">
                                <div class="column-item column-item--left">Nationality:</div>
                                <div class="column-item column-item--right">Chinese American</div>
                            </div>
                            <div class="column">
                                <div class="column-item column-item--left">Location:</div>
                                <div class="column-item column-item--right">Chapel Hill, NC</div>
                            </div>
                            <div class="column">
                                <div class="column-item column-item--left">E-mail:</div>
                                <div class="column-item column-item--right">kevin_sun@kenan-flagler.unc.edu</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="lg:7 info-widgets">
                <div class="widget">
                    <div class="widget__header">
                        <h3 class="title">
                            <svg viewBox="0 0 16 16" id="profile-svg">
                                <path d="M 7.5 1 C 3.917969 1 1 3.917969 1 7.5 C 1 11.082031 3.917969 14 7.5 14 C 11.082031 14 14 11.082031 14 7.5 C 14 3.917969 11.082031 1 7.5 1 Z M 7.5 2 C 10.542969 2 13 4.457031 13 7.5 C 13 8.839844 12.523438 10.0625 11.734375 11.015625 C 11.304688 9.796875 10.375 8.816406 9.1875 8.332031 C 9.683594 7.875 10 7.222656 10 6.5 C 10 5.125 8.875 4 7.5 4 C 6.125 4 5 5.125 5 6.5 C 5 7.222656 5.316406 7.875 5.8125 8.332031 C 4.625 8.816406 3.699219 9.796875 3.269531 11.015625 C 2.476563 10.0625 2 8.839844 2 7.5 C 2 4.457031 4.457031 2 7.5 2 Z M 7.5 5 C 8.335938 5 9 5.664063 9 6.5 C 9 7.335938 8.335938 8 7.5 8 C 6.664063 8 6 7.335938 6 6.5 C 6 5.664063 6.664063 5 7.5 5 Z M 7.5 9 C 9.199219 9 10.59375 10.207031 10.917969 11.808594 C 9.976563 12.554688 8.792969 13 7.5 13 C 6.207031 13 5.023438 12.554688 4.085938 11.808594 C 4.40625 10.207031 5.800781 9 7.5 9 Z " />
                            </svg>
                            Profile
                        </h3>
                    </div>
                    <div class="widget__body widget__bio">
                        <p>I have 5+ years of experience of leading teams to build successful software start to finish. Here is my career in a nutshell. I started with a background in biology and worked at New England Biolabs as a research assistant, but found I had a knack for building web apps.</p>
                        <p>So I took a risk and pivoted my career by joining a development bootcamp. The rest is history! I joined a start-up and was the first developer for salesEQUITY, growing the company until it reached $5M evaluation. </p>
                        <p>Afterwards, I decided to branch out and work for a Fortune 500 company. I joined Cisco Systems and worked on their Smart Software Licensing platform. </p>
                        <p>I love challenging myself, and decided to pursued both a Master's in Software Engineering and an MBA.</p>
                        <p>Currently working as CTO of a Techstars 2019 start-up company Bundl Technologies, building a mobile platform in the resale industry.</p>
                        <p>Always open to me opportunities, just <a href = "mailto: kevin_sun@kenan-flagler.unc.edu">email</a> me!</p>
                    </div>
                </div>
                <div class="row">
                    <div class="xl:6">
                        <div class="widget">
                            <div class="widget__header">
                                <h3 class="title">
                                    <svg viewBox="0 0 16 16" id="skills-svg">
                                        <path d="M 10.042969 2.050781 L 5.039063 13.550781 L 5.960938 13.949219 L 10.957031 2.449219 Z M 3.226563 5.070313 L 0.996094 8 L 3.226563 10.925781 L 4.023438 10.324219 L 2.253906 8 L 4.023438 5.679688 Z M 12.773438 5.070313 L 11.976563 5.679688 L 13.746094 8 L 11.976563 10.324219 L 12.773438 10.925781 L 15.003906 8 Z " />
                                    </svg>
                                    Web Skills
                                </h3>
                            </div>
                            <div class="widget__body">
                                <moso-progressbar v-for="skill in web_skills" :key="skill.id"
                                                  :name="skill.type"
                                                  :percentage="skill.percent" />

                                <!--<a href="/files/kevin_sun_2018.pdf" class="button button-dark button&#45;&#45;raised" title="Download CV (da)" rel="noopener,nofollow">-->
                                <!--<svg viewBox="0 0 16 16">-->
                                <!--<path fill="#ffffff" d="M 4.5 2 C 3.675781 2 3 2.675781 3 3.5 L 3 12.5 C 3 13.324219 3.675781 14 4.5 14 L 11.5 14 C 12.324219 14 13 13.324219 13 12.5 L 13 3.5 C 13 2.675781 12.324219 2 11.5 2 Z M 4.5 3 L 11.5 3 C 11.78125 3 12 3.21875 12 3.5 L 12 12.5 C 12 12.78125 11.78125 13 11.5 13 L 4.5 13 C 4.21875 13 4 12.78125 4 12.5 L 4 3.5 C 4 3.21875 4.21875 3 4.5 3 Z M 7 4 C 6.449219 4 6 4.449219 6 5 C 6 5.550781 6.449219 6 7 6 C 7.550781 6 8 5.550781 8 5 C 8 4.449219 7.550781 4 7 4 Z M 7 6 C 5.898438 6 5 6.898438 5 8 L 9 8 C 9 6.898438 8.101563 6 7 6 Z M 10 5 L 10 6 L 11 6 L 11 5 Z M 10 7 L 10 8 L 11 8 L 11 7 Z M 5 9 L 5 10 L 11 10 L 11 9 Z M 5 11 L 5 12 L 11 12 L 11 11 Z " />-->
                                <!--</svg>-->
                                <!--Download CV-->
                                <!--<nano-ripple />-->
                                <!--</a>-->
                            </div>
                        </div>
                    </div>
                    <div class="xl:6">
                        <div class="widget">
                            <div class="widget__header">
                                <h3 class="title">
                                    <svg viewBox="0 0 16 16" id="skills-svg">
                                        <path d="M 10.042969 2.050781 L 5.039063 13.550781 L 5.960938 13.949219 L 10.957031 2.449219 Z M 3.226563 5.070313 L 0.996094 8 L 3.226563 10.925781 L 4.023438 10.324219 L 2.253906 8 L 4.023438 5.679688 Z M 12.773438 5.070313 L 11.976563 5.679688 L 13.746094 8 L 11.976563 10.324219 L 12.773438 10.925781 L 15.003906 8 Z " />
                                    </svg>
                                    Mobile Skills
                                </h3>
                            </div>
                            <div class="widget__body">
                                <moso-progressbar v-for="skill in mobile_skills" :key="skill.id"
                                                  :name="skill.type"
                                                  :percentage="skill.percent" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import MosoProfile from '~/components/moso-profile/moso-profile.vue'
import ProfileItem from '~/components/moso-profile/moso-profile-item.vue'
import MosoProgressbar from '~/components/moso-progressbar/moso-progressbar.vue'
import NanoRipple from '~/components/nano-ripple/nano-ripple.vue'

import axios from 'axios'

export default {
    layout: 'default',
    components: {
        'moso-profile': MosoProfile,
        'profile-item': ProfileItem,
        'moso-progressbar': MosoProgressbar,
        'nano-ripple': NanoRipple
    },
    data() {
        return {
            titles: [{ title: "Full Stack Software Engineer" }],
            devicons: [
                {
                    icon: "/images/github.svg",
                    url: "https://github.com/sunkev",
                    name: "Github"
                },
                {
                    icon: "/images/linkedin.svg",
                    url: "https://www.linkedin.com/in/sunkev/",
                    name: "LinkedIn"
                },
                {
                    icon: "/images/facebook.svg",
                    url: "https://www.facebook.com/sunkev",
                    name: "Facebook"
                },
                {
                    icon: "/images/codewars.png",
                    url: "https://www.codewars.com/users/sunkev",
                    name: "Codewars"
                },
                {
                    icon: "/images/gmail.png",
                    url: "mailto:kevin_sun@kenan-flagler.unc.edu",
                    name: "Gmail"
                }
            ],
            web_skills: [
                {
                    type: "Ruby on Rails",
                    percent: 100
                },
                {
                    type: "JavaScript (Frameworks)",
                    percent: 90
                },
                {
                    type: "Front End (HTML/CSS)",
                    percent: 80
                },
                {
                    type: "SQL",
                    percent: 80
                },
                {
                    type: "UNIX Shell Script",
                    percent: 65
                },
                {
                    type: "Tableau",
                    percent: 75
                }
            ],
            mobile_skills:[
                {
                    type: "React Native",
                    percent: 90
                },
                {
                    type: "TypeScript/JavaScript",
                    percent: 90
                },
                {
                    type: "iOS development",
                    percent: 80
                },
                {
                    type: "Java",
                    percent: 70
                },
                {
                    type: "Xamarin",
                    percent: 50
                },
                {
                    type: "Flutter",
                    percent: 60
                }
            ]
        }
    }
}
</script>
<style lang="scss">
@import './assets/sass/variables';

.toolbox-list {
    margin: 0;
    padding-left: 1rem;

    li {
        padding: .21rem 0;

        &:first-of-type {
            padding: 0 0 .21rem;
        }

        &:last-of-type {
            padding: .21rem 0 0;
        }
    }
}

.code-highlight {
    width: 100%;
    padding: .75rem;
    background-color: #f6f8fa;
    border-radius: $border-radius;
    font-family: "Liberation Mono","SFMono-Regular",Consolas,Menlo,Courier,monospace;
    font-size: 80%;
    color: #000;
    line-height: 1.45;

    .red {
        color: #a61130;
    }

    .blue {
        color: #032f62;
    }

    .purple {
        color: #6f42c1;
    }
}

.widget__body >>> .progressbar-container:last-of-type {
    margin-bottom: 1.55rem;
}

#profile-svg,
#info-svg,
#tool-svg {
    top: -1px;
}
</style>
