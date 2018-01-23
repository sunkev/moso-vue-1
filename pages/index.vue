<template>
    <profile />
</template>
<script>
import Profile from '~/pages/profile.vue'

export default {
    layout: 'default',
    components: {
        'profile': Profile
    },
    asyncData(context) {
        return {
            name: 'Profile'
        }
    },
    mounted() {
        //
    }
}
</script>
