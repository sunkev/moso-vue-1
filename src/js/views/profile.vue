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
                <div class="widget">
                    <div class="widget__header">
                        <h3 class="title"><img src="/images/profile.svg" alt=""> Profile</h3>
                    </div>
                    <div class="widget__body widget__bio">
                        <div class="bio">
                            <h4>Bio</h4>
                            <p>With 15+ years of experience with making websites, I see myself as a veteran. I often tell people around me that I'm from the generation that designed websites for IE6 in XHTML Strict, which, for the unfamiliar, was utterly horrible. It's something we can all laugh about now but back then, it was the challenge that drove us.</p>

                            <p>That same challenge is still driving me today but in a different way. I could have built this website in any ordinary way, but I've decided to use <a href="https://vuejs.org" title="Vue.js" rel="noopener">Vue.js</a>-components, not to make it harder but to use the technology I have in front of me. I love using new technologies and (still) try my best to keep up with the latest trends. That's why this site is made with Google's <a href="https://material.google.com" title="Material Design" rel="noopener">Material Design</a>.</p>

                            <p>When not coding at work, <a href="https://krve.io" title="@krve" rel="noopener">@krve</a> and I have a project called <a href="https://getnano.io" title="Nano" rel="noopener">Nano</a>. While there's nothing on that page but a logo, we're working creating a full-blown UI web-framework based on <a href="https://vuejs.org" title="Vue.js" rel="noopener">Vue.js</a>-components and <a href="https://sass-lang.org" title="Sass" rel="noopener">Sass</a>. We're not quite finished yet but if you're interested, we have a dev-branch on <a href="https://github.com/getnano/nano-framework/tree/dev" title="GitHub" rel="noopener">GitHub</a> that you can check out and follow.</p>

                            <p>When I'm not building webexperiences, I love spending time with my family. I also have a hobby where I activate small computers, such as the two Raspberry Pi 3's I have, where one the family's media center, and is collecting data from my weatherstation, the other acts as my personal cloudstorage, an ODROID C2 that acts as my main server for various projects and services, and a C.H.I.P. that runs a tor relay.</p>
                        </div>

                        <div class="personal-information">
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
                        <div class="contact-information">
                            <h4>Contact information</h4>
                            <div class="column">
                                <div class="column-item column-item--left">E-mail:</div>
                                <div class="column-item column-item--right"><a href="mailto:morten@moso.io" title="morten@moso.io">morten&#64;moso.io</a></div>
                            </div>
                            <div class="column">
                                <div class="column-item column-item--left">Phone:</div>
                                <div class="column-item column-item--right">--- Removed ---</div>
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
                    </div>
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
