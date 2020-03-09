<template>
    <div class="index">
        <Header />
        <div class="main">
            <router-view />
        </div>
    </div>
</template>

<script>
export default {
    name: 'index',
    data() {
        return {

        }
    }
}
</script>

<style lang="less" scoped>
    .index{
        position: relative;
    }
    .main{
        margin-top: 3rem;
    }
</style>