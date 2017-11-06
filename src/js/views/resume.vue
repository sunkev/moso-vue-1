<template>
    <div class="container-fluid resume">
        <div class="row">
            <div class="lg-6">
                <div class="widget">
                    <div class="widget__header">
                        <h3 class="title">
                            <svg viewBox="0 0 24 24">
                                <path fill="#000000" fill-opacity="0.87" d="M14,6H10V4H14M20,6H16V4L14,2H10L8,4V6H4C2.89,6 2,6.89 2,8V19A2,2 0 0,0 4,21H20A2,2 0 0,0 22,19V8C22,6.89 21.1,6 20,6Z" />
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
            <div class="lg-6">
                <div class="widget">
                    <div class="widget__header">
                        <h3 class="title">
                            <svg viewBox="0 0 24 24">
                                <path fill="#000000" fill-opacity="0.87" d="M12,3L1,9L12,15L21,10.09V17H23V9M5,13.18V17.18L12,21L19,17.18V13.18L12,17L5,13.18Z" />
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
</template>
<script>
    export default {
        data: function() {
            return {
                experiences: '',
                educations: ''
            }
        },

        mounted() {
            this.fetchExperience();
            this.fetchEducation();
        },

        methods: {
            fetchExperience() {
                axios.get('https://api.moso.io/api/v1/experience').then(response => {
                    this.experiences = response.data;
                });
            },

            fetchEducation() {
                axios.get('https://api.moso.io/api/v1/education').then(response => {
                    this.educations = response.data;
                });
            }
        }
    }
</script>
