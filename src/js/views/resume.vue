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
                            <timeline-item entry="Interface Consultant" location="Netcompany A/S" time="Oct, 2017 -">
                                <p>Development and consultancy on front-end- and UI design of larger, webbased projects for both the private- and the public sector.</p>
                            </timeline-item>
                            <timeline-item entry="Lead Front-End Developer" location="Indexed" time="Apr, 2017 - Oct, 2017">
                                <p>Development and design of responsive, mobile-friendly websites and webshops - mostly WordPress, with Bootstrap and Sass/CSS3 as front-end - now with much more responsibility and freedom of expression. Development of small plugins and custom things and bits for WordPress based on customer demands - all with version control (Git), of course. Conversion of design (typically a PSD) into real front-end. Serveradministration (Debian/Ubuntu).</p>
                            </timeline-item>
                            <timeline-item entry="Front-End Developer" location="Eyeforce ApS" time="Apr, 2015 - Apr, 2017">
                                <p>Development and design of responsive, mobile-friendly websites, webshops, and Android apps, with Bootstrap and Sass/CSS3 as front-end, and Laravel as backend. Front-end design for small and large Laravel-systems, all with version control (Git), of course. Conversion of design (typically a PSD) into real front-end. Development and design of catalogues and brochures for print. Graphic design of logos, og cropping/adjusting of misc web-elements to, eg, Facebook. Serveradministration (Debian/Ubuntu).</p>
                            </timeline-item>
                            <timeline-item entry="Freelance Webdeveloper" location="3up" time="Jan, 2014 - Apr, 2015">
                                <p>I started my own company to pick up experience during my education as Webintegrator. During that time I got to work with optimization of webshops, and redesigning logos and social media buttons to fasten up the website.</p>
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
                            <timeline-item entry="Webintegrator" location="Mercantec" time="Mar, 2016">
                                <p>In 2016 I passed the Webintegrator exam by making a project that looked a bit like Stack Overflow (that was actually in the assignment), just with a dash of Material Design.</p>
                            </timeline-item>
                            <timeline-item entry="IT-Supporter" location="Mercantec" time="Sep, 2012">
                                <p>In 2012 I passed the IT-Supporter exam by doing a bit of troubleshooting on an exam-machine, and telling the examiners how much I knew about group policies and heritance. They told me I should have told them about this magical thing called a Raspberry Pi, that I had set up as a small webserver integrated perfectly with Active Directory. But I thought it was too simple, and since it wasn't in the assignment, I thought I'd fail if I did. Oh well...</p>
                            </timeline-item>
                            <timeline-item entry="CCNA" location="Mercantec" time="Sep, 2012">
                                <p>As part of the IT-Supporter exam, I passed the CCNA exam with a final score of 82.6.</p>
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
        mounted() {

        }
    }
</script>
