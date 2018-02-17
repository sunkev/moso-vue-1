<template>
    <div class="container:fluid resume">
        <div class="row">
            <div class="md:12 xl:10 xl:offset:1">
                <div class="row">
                    <div class="lg:6">
                        <div class="widget">
                            <div class="widget__header">
                                <h3 class="title">
                                    <svg viewBox="0 0 16 16">
                                        <path d="M 6.5 1 C 5.675781 1 5 1.675781 5 2.5 L 5 3 L 2.5 3 C 1.675781 3 1 3.675781 1 4.5 L 1 12.5 C 1 13.324219 1.675781 14 2.5 14 L 13.5 14 C 14.324219 14 15 13.324219 15 12.5 L 15 4.5 C 15 3.675781 14.324219 3 13.5 3 L 11 3 L 11 2.5 C 11 1.675781 10.324219 1 9.5 1 Z M 6.5 2 L 9.5 2 C 9.78125 2 10 2.21875 10 2.5 L 10 3 L 6 3 L 6 2.5 C 6 2.21875 6.21875 2 6.5 2 Z M 2.5 4 L 13.5 4 C 13.78125 4 14 4.21875 14 4.5 L 14 9 L 2 9 L 2 4.5 C 2 4.21875 2.21875 4 2.5 4 Z M 7 7 L 7 8 L 9 8 L 9 7 Z M 2 10 L 14 10 L 14 12.5 C 14 12.78125 13.78125 13 13.5 13 L 2.5 13 C 2.21875 13 2 12.78125 2 12.5 Z " />
                                    </svg>
                                    Experience
                                </h3>
                            </div>
                            <div class="widget__body">
                                <moso-timeline>
                                    <timeline-item v-for="experience in experiences" :key="experience.id" :entry="experience.entry" :location="experience.location" :time="experience.time">
                                        <p>{{experience.content}}</p>
                                    </timeline-item>
                                </moso-timeline>
                            </div>
                        </div>
                    </div>
                    <div class="lg:6">
                        <div class="widget">
                            <div class="widget__header">
                                <h3 class="title">
                                    <svg viewBox="0 0 16 16">
                                        <path d="M 2.5 2 C 1.675781 2 1 2.675781 1 3.5 L 1 10.5 C 1 11.324219 1.675781 12 2.5 12 L 5.773438 12 C 5.804688 12.042969 5.832031 12.09375 5.867188 12.128906 L 4 14 L 5 14 L 5 15 L 7.210938 12.695313 L 7.355469 12.804688 L 7.375 12.816406 C 7.757813 13.054688 8.25 13.070313 8.625 12.800781 L 8.761719 12.703125 L 11 15 L 11 14 L 12 14 L 10.128906 12.128906 C 10.171875 12.09375 10.199219 12.042969 10.234375 12 L 13.5 12 C 14.324219 12 15 11.324219 15 10.5 L 15 3.5 C 15 2.675781 14.324219 2 13.5 2 Z M 2.5 3 L 13.5 3 C 13.78125 3 14 3.21875 14 3.5 L 14 10.5 C 14 10.78125 13.78125 11 13.5 11 L 10.53125 11 L 10.808594 10.609375 L 10.816406 10.597656 C 11.054688 10.214844 11.070313 9.726563 10.800781 9.347656 L 10.800781 9.34375 L 10.503906 8.9375 L 10.417969 8.46875 C 10.363281 7.988281 9.980469 7.605469 9.503906 7.554688 L 9.023438 7.488281 L 8.625 7.199219 C 8.246094 6.929688 7.75 6.925781 7.375 7.199219 L 7.375 7.203125 L 6.972656 7.492188 L 6.460938 7.558594 L 6.441406 7.5625 C 6.003906 7.660156 5.660156 8.007813 5.5625 8.445313 L 5.554688 8.464844 L 5.492188 8.96875 L 5.195313 9.351563 L 5.179688 9.375 C 4.945313 9.757813 4.929688 10.246094 5.199219 10.625 L 5.46875 11 L 2.5 11 C 2.21875 11 2 10.78125 2 10.5 L 2 3.5 C 2 3.21875 2.21875 3 2.5 3 Z M 4 5 L 4 6 L 12 6 L 12 5 Z M 7.957031 8.011719 C 7.972656 8 8.03125 8.003906 8.042969 8.011719 L 8.644531 8.445313 L 9.386719 8.546875 L 9.390625 8.546875 C 9.414063 8.550781 9.421875 8.554688 9.421875 8.578125 L 9.425781 8.59375 L 9.5625 9.335938 L 9.984375 9.929688 C 9.996094 9.941406 10.007813 10.003906 9.96875 10.066406 L 9.554688 10.640625 L 9.453125 11.386719 L 9.453125 11.390625 C 9.449219 11.414063 9.445313 11.421875 9.421875 11.421875 L 9.40625 11.425781 L 8.640625 11.558594 L 8.046875 11.984375 C 8.03125 11.996094 7.972656 12.003906 7.90625 11.96875 L 7.367188 11.554688 L 6.613281 11.453125 L 6.609375 11.453125 C 6.585938 11.449219 6.578125 11.445313 6.578125 11.421875 L 6.574219 11.40625 L 6.441406 10.636719 L 6.015625 10.046875 C 6.003906 10.03125 5.996094 9.972656 6.03125 9.90625 L 6.445313 9.363281 L 6.539063 8.660156 C 6.554688 8.601563 6.597656 8.554688 6.65625 8.539063 L 7.355469 8.445313 Z " />
                                    </svg>
                                    Education
                                </h3>
                            </div>
                            <div class="widget__body">
                                <moso-timeline>
                                    <timeline-item v-for="education in educations" :key="education.id" :entry="education.entry" :location="education.location" :time="education.time">
                                        <p>{{education.content}}</p>
                                    </timeline-item>
                                </moso-timeline>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import MosoTimeline from '~/components/moso-timeline/moso-timeline.vue'
import TimelineItem from '~/components/moso-timeline/moso-timeline-item.vue'

export default {
    layout: 'default',
    components: {
        'moso-timeline': MosoTimeline,
        'timeline-item': TimelineItem
    },
    asyncData(context) {
        return {
            name: 'Resume'
        }
    },
    data() {
        return {
            experiences: [
                {
                    id: 1,
                    entry: 'Interface Consultant',
                    location: 'Netcompany A/S',
                    time: 'Oct, 2017 -',
                    content: 'Development and consultancy on front-end- and UI design of larger, webbased projects for both the private- and the public sector.'
                },
                {
                    id: 2,
                    entry: 'Lead Front-End Developer',
                    location: 'Indexed',
                    time: 'Apr, 2017 - Oct, 2017',
                    content: 'Development and design of responsive, mobile-friendly websites and webshops - mostly WordPress, with Bootstrap and Sass/CSS3 as front-end - now with much more responsibility and freedom of expression. Development of small plugins and custom things and bits for WordPress based on customer demands - all with version control (Git), of course. Conversion of design (typically a PSD) into real front-end. Serveradministration (Debian/Ubuntu).'
                },
                {
                    id: 3,
                    entry: 'Front-End Developer',
                    location: 'Eyeforce ApS',
                    time: 'Apr, 2015 - Apr, 2017',
                    content: 'Development and design of responsive, mobile-friendly websites, webshops, and Android apps, with Bootstrap and Sass/CSS3 as front-end, and Laravel as backend. Front-end design for small and large Laravel-systems, all with version control (Git), of course. Conversion of design (typically a PSD) into real front-end. Development and design of catalogues and brochures for print. Graphic design of logos, og cropping/adjusting of misc web-elements to, eg, Facebook. Serveradministration (Debian/Ubuntu).'
                },
                {
                    id: 4,
                    entry: 'Freelance Webdeveloper',
                    location: '3up',
                    time: 'Jan, 2014 - Apr, 2015',
                    content: 'I started my own company to pick up experience during my education as Webintegrator. During that time I got to work with optimization of webshops, and redesigning logos and social media buttons to fasten up the website.'
                }
            ],
            educations: [
                {
                    id: 1,
                    entry: 'Webintegrator',
                    location: 'Mercantec',
                    time: 'Mar, 2016',
                    content: 'In 2016 I passed the Webintegrator exam by making a project that looked a bit like Stack Overflow (that was actually in the assignment), just with a dash of Material Design.'
                },
                {
                    id: 2,
                    entry: 'IT-Supporter',
                    location: 'Mercantec',
                    time: 'Sep, 2012',
                    content: 'In 2012 I passed the IT-Supporter exam by doing a bit of troubleshooting on an exam-machine, and telling the examiners how much I knew about group policies and heritance. They told me I should have told them about this magical thing called a Raspberry Pi, that I had set up as a small webserver integrated perfectly with Active Directory. But I thought it was too simple, and since it wasn\'t in the assignment, I thought I\'d fail if I did. Oh well...'
                },
                {
                    id: 3,
                    entry: 'CCNA',
                    location: 'Mercantec',
                    time: 'Sep, 2012',
                    content: 'As part of the IT-Supporter exam, I passed the CCNA exam with a final score of 82.6.'
                },
            ]
        }
    },
    mounted() {
        //
    }
}
</script>
