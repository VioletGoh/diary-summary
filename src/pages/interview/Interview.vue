<template>
    <div>
        <Sidebar :interSubmenu="sidebar" />
        <div class="wrapper">
            <router-view />
        </div>
    </div>
</template>

<script>
export default {
    // name: 'Interview',
    data() {
        return {
            sidebar: []
        }
    },
    mounted() {
        this.getInterviewData();
        // console.log(this.sidebar);
    },
    methods: {
        getInterviewData() {
            this.$axios.get('api/interview.json').then(res => {
                const data = res.data;
                if(data.ret == true && data.data) {
                    // console.log(data.data);
                    // let navArray = Object.keys(data.data).map(val => val);
                    // console.log(navArray);
                    // // sidebar模块接收的是Object格式，将Array转换成Object格式
                    // for(let key in navArray) {
                    //     this.sidebar[key] = navArray[key];
                    // }

                    this.sidebar = Object.keys(data.data).map(val => val);
                    // console.log(this.sidebar);
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