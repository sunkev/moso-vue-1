<template>
    <div class="container-fluid">
        <div class="row">
            <div class="lg-5 xl-4">
                <div class="widget">
                    <div class="widget__body">
                        <p>Hello World!</p>
                        <button class="icon-button">
                            <i class="mdi mdi-github-circle"></i>
                            <nano-ripple></nano-ripple>
                        </button>
                    </div>
                </div>
            </div>
            <div class="lg-7 xl-8">
                <div class="widget tabs-widget">
                    <nano-tabs transparent fixed>
                        <nano-tab icon="mdi-account-circle" name="About">
                            <div class="tab-content bio">
                                <h4>Bio</h4>
                                <p>With 15+ years of experience with making websites, I see myself as a veteran. I often tell people around me that I'm from the generation that designed websites for IE6 in XHTML Strict, which, for the unfamiliar, was utterly horrible. It's something we can all laugh about now but back then, it was the challenge that drove us.</p>

                                <p>That same challenge is still driving me today but in a different way. I could have built this website in any ordinary way, but I've decided to use <a href="https://vuejs.org">Vue.js</a>-components, not to make it harder but to use the technology I have in front of me. I love using new technologies and (still) try my best to keep up with the latest trends. That's why this site is made with Google's <a href="https://material.google.com/">Material Design</a>.</p>

                                <p>When not coding at work, <a href="https://krve.io">@krve</a> and I have a project called <a href="https://getnano.io">Nano</a>. While there's nothing on that page but a logo, we're working creating a full-blown UI web-framework based on <a href="https://vuejs.org">Vue.js</a>-components and <a href="https://sass-lang.org">Sass</a>. We're not quite finished yet but if you're interested, we have a dev-branch on <a href="https://github.com/getnano/nano-framework/tree/dev">GitHub</a> that you can check out and follow.

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
                                    <div class="column-item column-item--right">32</div>
                                </div>
                                <div class="column">
                                    <div class="column-item column-item--left">Position:</div>
                                    <div class="column-item column-item--right">Front-End Developer</div>
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
                                    <div class="column-item column-item--right"><a href="https://moso.io">https://moso.io</a></div>
                                </div>
                            </div>
                            <div class="tab-content tab-content--no-padding contact-information">
                                <h4>Contact information</h4>
                                <div class="column">
                                    <div class="column-item column-item--left">E-mail:</div>
                                    <div class="column-item column-item--right"><a href="mailto:morten@moso.io">morten&#64;moso.io</a></div>
                                </div>
                                <div class="column">
                                    <div class="column-item column-item--left">Phone:</div>
                                    <div class="column-item column-item--right">(+45) 28 91 49 39</div>
                                </div>
                                <div class="column">
                                    <div class="column-item column-item--left">Social:</div>
                                    <div class="column-item column-item--right">
                                        <ul class="list list--inline list--social">
                                            <li>
                                                <a href="" class="button icon-button icon-button--small">
                                                    <i class="mdi mdi-github-circle"></i>
                                                    <nano-ripple></nano-ripple>
                                                </a>
                                            </li>
                                            <li>
                                                <a href="" class="button icon-button icon-button--small">
                                                    <i class="mdi mdi-codepen"></i>
                                                    <nano-ripple></nano-ripple>
                                                </a>
                                            </li>
                                            <li>
                                                <a href="" class="button icon-button icon-button--small facebook">
                                                    <i class="mdi mdi-facebook"></i>
                                                    <nano-ripple></nano-ripple>
                                                </a>
                                            </li>
                                            <li>
                                                <a href="" class="button icon-button icon-button--small twitter">
                                                    <i class="mdi mdi-twitter"></i>
                                                    <nano-ripple></nano-ripple>
                                                </a>
                                            </li>
                                            <li>
                                                <a href="" class="button icon-button icon-button--small linkedin">
                                                    <i class="mdi mdi-linkedin"></i>
                                                    <nano-ripple></nano-ripple>
                                                </a>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </nano-tab>
                        <nano-tab icon="mdi-file-tree" name="Projects">
                            <div class="tab-content projects">
                                <div class="container-fluid">
                                    <div class="row">
                                        <div class="md-6">
                                            <moso-project image="/images/assets/nano-logo.png" name="Nano" link="https://getnano.io">
                                                <p><strong>Flex</strong>ible, mobile-first and responsive, front-end framework made with custom-made <a href="https://vuejs.org">Vue.js</a>-components and <a href="https://sass-lang">Sass</a>.</p>
                                            </moso-project>
                                        </div>
                                        <div class="md-6">
                                            <moso-project image="/images/assets/3up-logo.png" name="3up CDN" link="https://cdn.3up.dk">
                                                <p>A fast, global <a href="https://en.wikipedia.org/wiki/Content_delivery_network">content delivery network</a> for stuff that is published to npm. 3up is built upon FOSS technologies from <a href="https://unpkg.com">unpkg</a> and works by caching the npm packages on their permanent URLs.</p>
                                            </moso-project>
                                        </div>
                                        <div class="md-6">
                                            <moso-project image="/images/assets/flexgrid-logo.png" name="Flexgrid" link="https://flexgrid.co">
                                                <p>A simple grid based on <a href="https://developer.mozilla.org/en-US/docs/Web/CSS/flex">flexbox</a> layout. Flexgrid is an integral part of the <a href="https://getnano.io">Nano</a> framework, and, if not modified, uses <a href="https://getbootstrap.com">Bootstrap</a>'s rigid ruleset.</p>
                                            </moso-project>
                                        </div>
                                        <div class="md-6">
                                            <moso-project image="/images/assets/shade-theme.png" name="Shade Ghost theme" link="https://github.com/moso/shade-ghost-theme">
                                                <p>Theme made for my <a href="https://ghost.moso.io">Ghost</a> blog. Built with Bootstrap 4 and flex, and available at the <a href="http://marketplace.ghost.org/themes/free">Ghost market place</a> and <a href="https://github.com/moso/shade-ghost-theme">GitHub</a>.</p>
                                            </moso-project>
                                        </div>
                                        <div class="md-6">
                                            <moso-project image="/images/assets/hyper-logo.png" name="hyper-arc-dark-controls" link="https://github.com/moso/hyper-arc-dark-controls">
                                                <p>Pretty window controls from the Arc Dark theme for the <a href="https://hyper.is">Hyper</a> terminal.</p>
                                            </moso-project>
                                        </div>
                                        <div class="md-6">
                                            <moso-project image="/images/assets/hyper-logo.png" name="hyper-dark-scrollbar" link="https://github.com/moso/hyper-dark-scrollbar">
                                                <p>Sleek scrollbar-replacement for the <a href="https://hyper.is">Hyper</a> terminal, replacing the clonky standard scrollbar with a pretty, modern one.</p>
                                            </moso-project>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </nano-tab>
                        <nano-tab icon="mdi-codepen" name="Demos">
                            <div class="tab-content">
                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quia nobis fugiat eius voluptatibus cumque dolorem, quas accusantium dignissimos magnam, ex enim. Pariatur ipsa ea cum asperiores incidunt. Ad, deleniti quaerat!</p>
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
