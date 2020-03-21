<template>
    <div>
        <Sidebar :interSubmenu="sidebar" />
        <div class="wrapper">
            <router-view />
        </div>
    </div>
</template>

<script>
import { mapMutations } from 'vuex';

export default {
    // name: 'Interview',
    data() {
        return {
            sidebar: []
        }
    },
    mounted() {
        this.getInterviewData();
    },
    methods: {
        ...mapMutations(['mutationInterviewData']),
        getInterviewData() {
            this.$axios.get('api/interview.json').then(res => {
                const data = res.data;
                console.log(data);
                if(data) {
                    this.sidebar = Object.keys(data).map(val => val);
                    this.mutationInterviewData(data); // get the interview data
                    // this.$store.commit('mutationInterviewData', data); // the second function to commit mutation's data
                }
            }).catch(err => {
                console.log(err);
            });
        }
    },
}
</script>

<style lang="less" scoped>
    
</style>