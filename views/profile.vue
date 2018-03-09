<template>
    <div class="container:fluid">
        <div class="row">
            <div class="lg:5 xl:4 profile-widgets">
                <div class="widget">
                    <div class="widget__body">
                        <moso-profile image="/images/profile.jpg" name="Morten Sørensen" position="Interface Consultant at Netcompany">
                            <profile-item
                                link="https://github.com/moso"
                                link-class="github"
                                svg="/images/github.svg"
                                title="GitHub">
                            </profile-item>
                            <profile-item
                                link="https://codepen.io/moso"
                                link-class="codepen"
                                svg="/images/codepen.svg"
                                title="CodePen">
                            </profile-item>
                            <profile-item
                                link="https://twitter.com/mosolicious"
                                link-class="twitter"
                                svg="/images/twitter.svg"
                                title="Twitter">
                            </profile-item>
                            <profile-item
                                link="https://facebook.com/moso.profil"
                                link-class="facebook"
                                svg="/images/facebook.svg"
                                title="Facebook">
                            </profile-item>
                            <profile-item
                                link="https://dk.linkedin.com/in/mosoio"
                                link-class="linkedin"
                                svg="/images/linkedin.svg"
                                title="LinkedIn">
                            </profile-item>
                        </moso-profile>
                    </div>
                </div>

                <div class="widget">
                    <div class="widget__header">
                        <h3 class="title">
                            <svg viewBox="0 0 16 16" id="skills-svg">
                                <path d="M 10.042969 2.050781 L 5.039063 13.550781 L 5.960938 13.949219 L 10.957031 2.449219 Z M 3.226563 5.070313 L 0.996094 8 L 3.226563 10.925781 L 4.023438 10.324219 L 2.253906 8 L 4.023438 5.679688 Z M 12.773438 5.070313 L 11.976563 5.679688 L 13.746094 8 L 11.976563 10.324219 L 12.773438 10.925781 L 15.003906 8 Z " />
                            </svg>
                            Skills
                        </h3>
                    </div>
                    <div class="widget__body">
                        <moso-progressbar name="HTML5/CSS3/Sass" percentage="100"></moso-progressbar>
                        <moso-progressbar name="JS (Vue/React)" percentage="85"></moso-progressbar>
                        <moso-progressbar name="PHP" percentage="70"></moso-progressbar>
                        <moso-progressbar name="CMS (Ghost, Pagekit, WordPress)" percentage="80"></moso-progressbar>
                        <moso-progressbar name="Graphics (Photoshop/Illustrator)" percentage="90"></moso-progressbar>

                        <a href="/files/morten-sorensen-cv-2017.pdf" class="button button-dark button--raised" title="Download CV (da)" rel="noopener">
                            <svg viewBox="0 0 16 16">
                                <path fill="#ffffff" d="M 4.5 2 C 3.675781 2 3 2.675781 3 3.5 L 3 12.5 C 3 13.324219 3.675781 14 4.5 14 L 11.5 14 C 12.324219 14 13 13.324219 13 12.5 L 13 3.5 C 13 2.675781 12.324219 2 11.5 2 Z M 4.5 3 L 11.5 3 C 11.78125 3 12 3.21875 12 3.5 L 12 12.5 C 12 12.78125 11.78125 13 11.5 13 L 4.5 13 C 4.21875 13 4 12.78125 4 12.5 L 4 3.5 C 4 3.21875 4.21875 3 4.5 3 Z M 7 4 C 6.449219 4 6 4.449219 6 5 C 6 5.550781 6.449219 6 7 6 C 7.550781 6 8 5.550781 8 5 C 8 4.449219 7.550781 4 7 4 Z M 7 6 C 5.898438 6 5 6.898438 5 8 L 9 8 C 9 6.898438 8.101563 6 7 6 Z M 10 5 L 10 6 L 11 6 L 11 5 Z M 10 7 L 10 8 L 11 8 L 11 7 Z M 5 9 L 5 10 L 11 10 L 11 9 Z M 5 11 L 5 12 L 11 12 L 11 11 Z " />
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
                        <h3 class="title">
                            <svg viewBox="0 0 16 16" id="profile-svg">
                                <path d="M 7.5 1 C 3.917969 1 1 3.917969 1 7.5 C 1 11.082031 3.917969 14 7.5 14 C 11.082031 14 14 11.082031 14 7.5 C 14 3.917969 11.082031 1 7.5 1 Z M 7.5 2 C 10.542969 2 13 4.457031 13 7.5 C 13 8.839844 12.523438 10.0625 11.734375 11.015625 C 11.304688 9.796875 10.375 8.816406 9.1875 8.332031 C 9.683594 7.875 10 7.222656 10 6.5 C 10 5.125 8.875 4 7.5 4 C 6.125 4 5 5.125 5 6.5 C 5 7.222656 5.316406 7.875 5.8125 8.332031 C 4.625 8.816406 3.699219 9.796875 3.269531 11.015625 C 2.476563 10.0625 2 8.839844 2 7.5 C 2 4.457031 4.457031 2 7.5 2 Z M 7.5 5 C 8.335938 5 9 5.664063 9 6.5 C 9 7.335938 8.335938 8 7.5 8 C 6.664063 8 6 7.335938 6 6.5 C 6 5.664063 6.664063 5 7.5 5 Z M 7.5 9 C 9.199219 9 10.59375 10.207031 10.917969 11.808594 C 9.976563 12.554688 8.792969 13 7.5 13 C 6.207031 13 5.023438 12.554688 4.085938 11.808594 C 4.40625 10.207031 5.800781 9 7.5 9 Z " />
                            </svg>
                            Profile
                        </h3>
                    </div>
                    <div class="widget__body widget__bio">
                        <div class="bio">
                            <p>With 15+ years of experience with making websites, I see myself as a veteran. I often tell people around me that I'm from the generation that designed websites for IE6 in XHTML Strict, which, for the unfamiliar, was utterly horrible. It's something we can all laugh about now but back then, it was the challenge that drove us.</p>
                            <p>That same challenge is still driving me today but in a different way. That's why this website is built on tech by <a href="https://vuejs.org" title="Vue.js" target="_blank" rel="noopener">Vue.js</a> and <a href="https://nuxtjs.org" title="Nuxt" target="_blank" rel="noopener">Nuxt</a>, not to make it harder but to use the technology I have in front of me. I love using new technologies and (still) try my best to keep up with the latest trends.</p>
                            <p>When not coding at work, <a href="https://krve.io" title="@krve" target="_blank" rel="noopener">@krve</a> and I have a project called <a href="https://getnano.io" title="Nano" rel="noopener">Nano</a>. While there's nothing on that page but a logo, we're working creating a full-blown UI web-framework based on <a href="https://vuejs.org" title="Vue.js" target="_blank" rel="noopener">Vue.js</a>-components and <a href="https://sass-lang.org" title="Sass" target="_blank" rel="noopener">Sass</a>. We're not quite finished yet but if you're interested, we have a dev-branch on <a href="https://github.com/getnano/nano-framework/tree/dev" title="GitHub" target="_blank" rel="noopener">GitHub</a> that you can check out and follow.</p>
                            <p>When I'm not building webexperiences, I love spending time with my family. I also have a hobby where I activate small computers, such as the two Raspberry Pi 3's I have, where one acts as the family's media center, and is collecting data from my weatherstation, the other acts as a server for various projects and services, an ODROID-C2 that acts as Tor relay, and a ROCK64 that acts as <a href="https://nextcloud.com/box" title="Nextcloud Box" target="_blank" rel="noopener">Nextcloud Box</a> and main webproxy.</p>
                        </div>
                    </div>
                </div>
                <div class="row">
                    <div class="xl:6">
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
                                        <div class="column-item column-item--right">Morten S&oslash;rensen</div>
                                    </div>
                                    <div class="column">
                                        <div class="column-item column-item--left">Age:</div>
                                        <div class="column-item column-item--right">33</div>
                                    </div>
                                    <div class="column">
                                        <div class="column-item column-item--left">Position:</div>
                                        <div class="column-item column-item--right">Interface Consultant</div>
                                    </div>
                                    <div class="column">
                                        <div class="column-item column-item--left">Nationality:</div>
                                        <div class="column-item column-item--right">Danish</div>
                                    </div>
                                    <div class="column">
                                        <div class="column-item column-item--left">Location:</div>
                                        <div class="column-item column-item--right">Vammen, Denmark</div>
                                    </div>
                                    <div class="column">
                                        <div class="column-item column-item--left">E-mail:</div>
                                        <div class="column-item column-item--right">
                                            <div class="code-highlight">
                                                <div><span class="red">let</span> $x <span class="red">= </span> <span class="blue">'morten'</span>;</div>
                                                <div><span class="red">let</span> $y <span class="red">= </span> <span class="blue">'moso'</span>;</div>
                                                <div>&nbsp;</div>
                                                <div><span class="purple">console</span>.<span class="blue">log</span>($x <span class="red">+ </span> <span class="blue">'&#64;' </span> <span class="red">+ </span> $y <span class="red">+ </span> <span class="blue">'.io'</span>);</div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="xl:6">
                        <div class="widget">
                            <div class="widget__header">
                                <h3 class="title">
                                    <svg viewBox="0 0 16 16" id="tool-svg">
                                        <path d="M 6.5 1 C 5.675781 1 5 1.675781 5 2.5 L 5 3 L 2.5 3 C 1.648438 3 1 3.753906 1 4.609375 L 1 12.386719 C 1 13.246094 1.648438 14 2.503906 14 L 13.496094 14 C 14.351563 14 15 13.242188 15 12.386719 L 15 4.613281 C 15 3.753906 14.351563 3 13.5 3 L 11 3 L 11 2.5 C 11 1.675781 10.324219 1 9.5 1 Z M 6.5 2 L 9.5 2 C 9.78125 2 10 2.21875 10 2.5 L 10 3 L 6 3 L 6 2.5 C 6 2.21875 6.21875 2 6.5 2 Z M 2.5 4 L 13.5 4 C 13.75 4 14 4.242188 14 4.613281 L 14 7 L 2 7 L 2 4.609375 C 2 4.242188 2.25 4 2.5 4 Z M 2 8 L 4 8 L 4 9 L 6 9 L 6 8 L 10 8 L 10 9 L 12 9 L 12 8 L 14 8 L 14 12.386719 C 14 12.757813 13.75 13 13.496094 13 L 2.503906 13 C 2.25 13 2 12.757813 2 12.386719 Z " />
                                    </svg>
                                    Toolbox
                                </h3>
                            </div>
                            <div class="widget__body widget__toolbox">
                                <p>Besides playing around with HTML, CSS, and next-gen JS libraries, I juggle with a lot of frameworks and building tools to create great webapps. Here I have listed some of them:</p>
                                <ul class="toolbox-list">
                                    <li>Git</li>
                                    <li>JavaScript ES6 + ES7</li>
                                    <li>Node.js</li>
                                    <li>Webpack</li>
                                    <li>Server-Side Rendering</li>
                                    <li>XHR/ajax</li>
                                    <li>Bootstrap</li>
                                    <li>Sass/SCSS/Less</li>
                                    <li>SMACSS/BEM</li>
                                    <li>Laravel/Lumen</li>
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
import MosoProfile from '~/components/moso-profile/moso-profile.vue'
import ProfileItem from '~/components/moso-profile/moso-profile-item.vue'
import MosoProgressbar from '~/components/moso-progressbar/moso-progressbar.vue'
import NanoRipple from '~/components/nano-ripple/nano-ripple.vue'

export default {
    layout: 'default',
    components: {
        'moso-profile': MosoProfile,
        'profile-item': ProfileItem,
        'moso-progressbar': MosoProgressbar,
        'nano-ripple': NanoRipple
    },
    mounted() {
        //
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
    padding: 1rem;
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

#profile-svg,
#info-svg,
#tool-svg {
    top: -1px;
}
</style>
