<template>
    <div class="home">
        <Sidebar />
        <div class="wrapper">
            home content
        </div>
    </div>
</template>

<script>
export default {
    name: 'Home',
    data() {
        return {}
    }
}
</script>

<style lang="less" scoped>
    .home{
        // display: flex;
        .wrapper{
            // flex: 1;
            // color: @white;
            // background-color: @purple;
        }
    }
</style>