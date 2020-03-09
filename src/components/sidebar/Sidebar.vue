<template>
    <div class="sidebar">
        <ul>
            <li>sidebar</li>
        </ul>
    </div>
</template>

<script>
export default {
    name: 'Sidebar',
    props: {
        sidebarData: {
            type: Array,
            default() {
                return []
            }
        }
    },
    data() {
        return {
            
        }
    },
}
</script>

<style lang="less" scoped>
    .sidebar{
        width: 20rem;
        position: fixed;
        top: 3rem;
        left: 0;
        bottom: 0;
        box-shadow: 2px 2px 2px rgba(0, 0, 0, .03);
    }
</style>