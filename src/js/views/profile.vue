<template>
    <div class="container-fluid">
        <div class="row">
            <div class="lg-5 xl-4 profile-widgets">
                <div class="widget">
                    <div class="widget__body">
                        <moso-profile image="/images/profile.jpg" name="Morten Sørensen" position="Interface Consultant at Netcompany">
                            <profile-item link="https://github.com/moso" link-class="github" svg="/images/github.svg" title="GitHub"></profile-item>
                            <profile-item link="https://codepen.io/moso" link-class="codepen" svg="/images/codepen.svg" title="CodePen"></profile-item>
                            <profile-item link="https://facebook.com/moso.profil" link-class="facebook" svg="/images/facebook.svg" title="Facebook"></profile-item>
                            <profile-item link="https://twitter.com/mosodotio" link-class="twitter" svg="/images/twitter.svg" title="Twitter"></profile-item>
                            <profile-item link="https://dk.linkedin.com/in/mosoio" link-class="linkedin" svg="/images/linkedin.svg" title="LinkedIn"></profile-item>
                        </moso-profile>
                    </div>
                </div>

                <div class="widget">
                    <div class="widget__header">
                        <h3 class="title"><img src="/images/plus-one.svg" alt=""> Skills</h3>
                    </div>
                    <div class="widget__body">
                        <moso-progressbar name="HTML5/CSS3/Sass" percentage="100"></moso-progressbar>
                        <moso-progressbar name="JS (jQuery/Vue)" percentage="75"></moso-progressbar>
                        <moso-progressbar name="PHP" percentage="70"></moso-progressbar>
                        <moso-progressbar name="CMS (WordPress)" percentage="80"></moso-progressbar>
                        <moso-progressbar name="Graphics (Photoshop/Illustrator)" percentage="90"></moso-progressbar>

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
            <div class="lg-7 xl-8">
                <div class="widget tabs-widget">
                    <nano-tabs transparent fixed>
                        <nano-tab svg="<path d='M12,19.2C9.5,19.2 7.29,17.92 6,16C6.03,14 10,12.9 12,12.9C14,12.9 17.97,14 18,16C16.71,17.92 14.5,19.2 12,19.2M12,5A3,3 0 0,1 15,8A3,3 0 0,1 12,11A3,3 0 0,1 9,8A3,3 0 0,1 12,5M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12C22,6.47 17.5,2 12,2Z' />" name="About">
                            <div class="tab-content bio">
                                <h4>Bio</h4>
                                <p>With 15+ years of experience with making websites, I see myself as a veteran. I often tell people around me that I'm from the generation that designed websites for IE6 in XHTML Strict, which, for the unfamiliar, was utterly horrible. It's something we can all laugh about now but back then, it was the challenge that drove us.</p>

                                <p>That same challenge is still driving me today but in a different way. I could have built this website in any ordinary way, but I've decided to use <a href="https://vuejs.org" title="Vue.js" rel="noopener">Vue.js</a>-components, not to make it harder but to use the technology I have in front of me. I love using new technologies and (still) try my best to keep up with the latest trends. That's why this site is made with Google's <a href="https://material.google.com" title="Material Design" rel="noopener">Material Design</a>.</p>

                                <p>When not coding at work, <a href="https://krve.io" title="@krve" rel="noopener">@krve</a> and I have a project called <a href="https://getnano.io" title="Nano" rel="noopener">Nano</a>. While there's nothing on that page but a logo, we're working creating a full-blown UI web-framework based on <a href="https://vuejs.org" title="Vue.js" rel="noopener">Vue.js</a>-components and <a href="https://sass-lang.org" title="Sass" rel="noopener">Sass</a>. We're not quite finished yet but if you're interested, we have a dev-branch on <a href="https://github.com/getnano/nano-framework/tree/dev" title="GitHub" rel="noopener">GitHub</a> that you can check out and follow.

                                <p>When I'm not building webexperiences, I love spending time with my family. I also have a hobby where I activate small computers, such as the two Raspberry Pi 3's I have, where one the family's media center, and is collecting data from my weatherstation, the other acts as my personal cloudstorage, an ODROID C2 that acts as my main server for various projects and services, and a C.H.I.P. that runs a tor relay.</p>
                            </div>
                            <div class="tab-content tab-content--no-padding personal-information">
                                <h4>Personal information</h4>
                                <div class="column">
                                    <div class="column-item column-item--left">Name:</div>
                                    <div class="column-item column-item--right">Morten Sørensen</div>
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
                                    <div class="column-item column-item--left">Web:</div>
                                    <div class="column-item column-item--right"><a href="https://moso.io" title="https://moso.io">https://moso.io</a></div>
                                </div>
                            </div>
                            <div class="tab-content tab-content--no-padding contact-information">
                                <h4>Contact information</h4>
                                <div class="column">
                                    <div class="column-item column-item--left">E-mail:</div>
                                    <div class="column-item column-item--right"><a href="mailto:morten@moso.io" title="morten@moso.io">morten&#64;moso.io</a></div>
                                </div>
                                <div class="column">
                                    <div class="column-item column-item--left">Phone:</div>
                                    <div class="column-item column-item--right">&nbsp;</div>
                                </div>
                                <div class="column">
                                    <div class="column-item column-item--left">Social:</div>
                                    <div class="column-item column-item--right">
                                        <ul class="list list--inline list--social">
                                            <li>
                                                <a href="https://github.com/moso" class="button icon-button icon-button--small" title="GitHub" rel="noopener">
                                                    <img src="/images/github.svg" alt="">
                                                    <nano-ripple></nano-ripple>
                                                </a>
                                            </li>
                                            <li>
                                                <a href="https://codepen.io/moso" class="button icon-button icon-button--small" title="CodePen" rel="noopener">
                                                    <img src="/images/codepen.svg" alt="">
                                                    <nano-ripple></nano-ripple>
                                                </a>
                                            </li>
                                            <li>
                                                <a href="https://facebook.com/moso.profil" class="button icon-button icon-button--small facebook" title="Facebook" rel="noopener">
                                                    <img src="/images/facebook.svg" alt="">
                                                    <nano-ripple></nano-ripple>
                                                </a>
                                            </li>
                                            <li>
                                                <a href="https://twitter.com/mosodotio" class="button icon-button icon-button--small twitter" title="Twitter" rel="noopener">
                                                    <img src="/images/twitter.svg" alt="">
                                                    <nano-ripple></nano-ripple>
                                                </a>
                                            </li>
                                            <li>
                                                <a href="https://dk.linkedin.com/in/mosoio" class="button icon-button icon-button--small linkedin" title="LinkedIn" rel="noopener">
                                                    <img src="/images/linkedin.svg" alt="">
                                                    <nano-ripple></nano-ripple>
                                                </a>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </nano-tab>
                        <nano-tab svg="<path d='M3,3H9V7H3V3M15,10H21V14H15V10M15,17H21V21H15V17M13,13H7V18H13V20H7L5,20V9H7V11H13V13Z' />" name="Projects">
                            <div class="tab-content projects">
                                <div class="container-fluid">
                                    <div class="row">
                                        <div class="md-6">
                                            <moso-project image="/images/assets/nano-logo.png" name="Nano" link="https://getnano.io">
                                                <p><strong>Flex</strong>ible, mobile-first and responsive, front-end framework made with custom-made <a href="https://vuejs.org" title="Vue.js" rel="noopener">Vue.js</a>-components and <a href="https://sass-lang" title="Sass" rel="noopener">Sass</a>.</p>
                                            </moso-project>
                                        </div>
                                        <div class="md-6">
                                            <moso-project image="/images/assets/3up-logo.png" name="3up CDN" link="https://cdn.3up.dk">
                                                <p>A fast, global <a href="https://en.wikipedia.org/wiki/Content_delivery_network" title="content delivery network" rel="noopener">content delivery network</a> for stuff that is published to npm. 3up is built upon FOSS technologies from <a href="https://unpkg.com" title="unpkg" rel="noopener">unpkg</a> and works by caching the npm packages on their permanent URLs.</p>
                                            </moso-project>
                                        </div>
                                        <div class="md-6">
                                            <moso-project image="/images/assets/flexgrid-logo.png" name="Flexgrid" link="https://flexgrid.co">
                                                <p>A simple grid based on <a href="https://developer.mozilla.org/en-US/docs/Web/CSS/flex" title="flexbox" rel="noopener">flexbox</a> layout. Flexgrid is an integral part of the <a href="https://getnano.io" title="Nano" rel="noopener">Nano</a> framework, and, if not modified, uses <a href="https://getbootstrap.com" title="Bootstrap" rel="noopener">Bootstrap</a>'s rigid ruleset.</p>
                                            </moso-project>
                                        </div>
                                        <div class="md-6">
                                            <moso-project image="/images/assets/shade-theme.png" name="Shade Ghost theme" link="https://github.com/moso/shade-ghost-theme">
                                                <p>Theme made for my <a href="https://ghost.moso.io" title="Ghost">Ghost</a> blog. Built with Bootstrap 4 and flex, and available at the <a href="http://marketplace.ghost.org/themes/free" title="Ghost market place" rel="noopener">Ghost market place</a> and <a href="https://github.com/moso/shade-ghost-theme" title="GitHub" rel="noopener">GitHub</a>.</p>
                                            </moso-project>
                                        </div>
                                        <div class="md-6">
                                            <moso-project image="/images/assets/hyper-logo.png" name="hyper-arc-dark-controls" link="https://github.com/moso/hyper-arc-dark-controls">
                                                <p>Pretty window controls from the Arc Dark theme for the <a href="https://hyper.is" title="Hyper" rel="noopener">Hyper</a> terminal.</p>
                                            </moso-project>
                                        </div>
                                        <div class="md-6">
                                            <moso-project image="/images/assets/hyper-logo.png" name="hyper-dark-scrollbar" link="https://github.com/moso/hyper-dark-scrollbar">
                                                <p>Sleek scrollbar-replacement for the <a href="https://hyper.is" title="Hyper" rel="noopener">Hyper</a> terminal, replacing the clonky standard scrollbar with a pretty, modern one.</p>
                                            </moso-project>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </nano-tab>
                        <nano-tab svg="<path d='M19.45,13.29L17.5,12L19.45,10.71M12.77,18.78V15.17L16.13,12.93L18.83,14.74M12,13.83L9.26,12L12,10.17L14.74,12M11.23,18.78L5.17,14.74L7.87,12.93L11.23,15.17M4.55,10.71L6.5,12L4.55,13.29M11.23,5.22V8.83L7.87,11.07L5.17,9.26M12.77,5.22L18.83,9.26L16.13,11.07L12.77,8.83M21,9.16C21,9.15 21,9.13 21,9.12C21,9.1 21,9.08 20.97,9.06C20.97,9.05 20.97,9.03 20.96,9C20.96,9 20.95,9 20.94,8.96C20.94,8.95 20.93,8.94 20.92,8.93C20.92,8.91 20.91,8.89 20.9,8.88C20.89,8.86 20.88,8.85 20.88,8.84C20.87,8.82 20.85,8.81 20.84,8.79C20.83,8.78 20.83,8.77 20.82,8.76A0.04,0.04 0 0,0 20.78,8.72C20.77,8.71 20.76,8.7 20.75,8.69C20.73,8.67 20.72,8.66 20.7,8.65C20.69,8.64 20.68,8.63 20.67,8.62C20.66,8.62 20.66,8.62 20.66,8.61L12.43,3.13C12.17,2.96 11.83,2.96 11.57,3.13L3.34,8.61C3.34,8.62 3.34,8.62 3.33,8.62C3.32,8.63 3.31,8.64 3.3,8.65C3.28,8.66 3.27,8.67 3.25,8.69C3.24,8.7 3.23,8.71 3.22,8.72C3.21,8.73 3.2,8.74 3.18,8.76C3.17,8.77 3.17,8.78 3.16,8.79C3.15,8.81 3.13,8.82 3.12,8.84C3.12,8.85 3.11,8.86 3.1,8.88C3.09,8.89 3.08,8.91 3.08,8.93C3.07,8.94 3.06,8.95 3.06,8.96C3.05,9 3.05,9 3.04,9C3.03,9.03 3.03,9.05 3.03,9.06C3,9.08 3,9.1 3,9.12C3,9.13 3,9.15 3,9.16C3,9.19 3,9.22 3,9.26V14.74C3,14.78 3,14.81 3,14.84C3,14.85 3,14.87 3,14.88C3,14.9 3,14.92 3.03,14.94C3.03,14.95 3.03,14.97 3.04,15C3.05,15 3.05,15 3.06,15.04C3.06,15.05 3.07,15.06 3.08,15.07C3.08,15.09 3.09,15.11 3.1,15.12C3.11,15.14 3.12,15.15 3.12,15.16C3.13,15.18 3.15,15.19 3.16,15.21C3.17,15.22 3.17,15.23 3.18,15.24C3.2,15.25 3.21,15.27 3.22,15.28C3.23,15.29 3.24,15.3 3.25,15.31C3.27,15.33 3.28,15.34 3.3,15.35C3.31,15.36 3.32,15.37 3.33,15.38C3.34,15.38 3.34,15.38 3.34,15.39L11.57,20.87C11.7,20.96 11.85,21 12,21C12.15,21 12.3,20.96 12.43,20.87L20.66,15.39C20.66,15.38 20.66,15.38 20.67,15.38C20.68,15.37 20.69,15.36 20.7,15.35C20.72,15.34 20.73,15.33 20.75,15.31C20.76,15.3 20.77,15.29 20.78,15.28C20.79,15.27 20.8,15.25 20.82,15.24C20.83,15.23 20.83,15.22 20.84,15.21C20.85,15.19 20.87,15.18 20.88,15.16C20.88,15.15 20.89,15.14 20.9,15.12C20.91,15.11 20.92,15.09 20.92,15.07C20.93,15.06 20.94,15.05 20.94,15.04C20.95,15 20.96,15 20.96,15C20.97,14.97 20.97,14.95 20.97,14.94C21,14.92 21,14.9 21,14.88C21,14.87 21,14.85 21,14.84C21,14.81 21,14.78 21,14.74V9.26C21,9.22 21,9.19 21,9.16Z' />" name="Demos" class="demo">
                            <div class="tab-content demo-content">
                                <div class="row">
                                    <div class="md-6 xl-4">
                                        <moso-card-cover image="/images/assets/demos/collections.jpg"
                                                         card-title="Collection with Bootstrap Collapse"
                                                         link="https://cdpn.io/JKGGBX">
                                        </moso-card-cover>
                                    </div>
                                    <div class="md-6 xl-4">
                                        <moso-card-cover image="/images/assets/demos/faq-example.jpg"
                                                         card-title="Bootstrap FAQ Example"
                                                         link="https://cdpn.io/vKGxMx">
                                        </moso-card-cover>
                                    </div>
                                    <div class="md-6 xl-4">
                                        <moso-card-cover image="/images/assets/demos/pricing-tables.jpg"
                                                         card-title="Material Design Pricing Tables"
                                                         link="https://cdpn.io/xZyGPj">
                                        </moso-card-cover>
                                    </div>
                                    <div class="md-6 xl-4">
                                        <moso-card-cover image="/images/assets/demos/timeline.jpg"
                                                         card-title="Simple Timeline"
                                                         link="https://cdpn.io/MpPRgg">
                                        </moso-card-cover>
                                    </div>
                                    <div class="md-6 xl-4">
                                        <moso-card-cover image="/images/assets/demos/floating-labels.jpg"
                                                         card-title="Material Design Floating Labels"
                                                         link="https://cdpn.io/rVdbXB">
                                        </moso-card-cover>
                                    </div>
                                    <div class="md-6 xl-4">
                                        <moso-card-cover image="/images/assets/demos/progress-switches.jpg"
                                                         card-title="Material Design Progress &quot;Switches&quot;"
                                                         link="https://cdpn.io/evQxRE">
                                        </moso-card-cover>
                                    </div>
                                </div>
                            </div>
                        </nano-tab>
                    </nano-tabs>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
    export default {
        mounted() {

        }
    }
</script>
