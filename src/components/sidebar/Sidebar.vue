<template>
    <div class="sidebar">
        <!-- <ul v-if="this.sidebarData">
            <router-link v-for="(val, i) in this.sidebarData" :key="i" to="" tag="li"></router-link>
        </ul> -->
        <ul>
            <router-link
                v-for="val in interSubmenu"
                :key="val"
                :to="{name: `${val}Question`}"
                tag="li"
            >
                {{ val }}
            </router-link>
        </ul>
    </div>
</template>

<script>
export default {
    name: 'Sidebar',
    props: {
        sidebarData: {
            type: Object,
            default() {
                return {}
            }
        },
        interSubmenu: {
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
    created() {

    },
    methods: {
        
    }
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
        ul{
            padding: 1.5rem 0 1.5rem 1rem;
            li{
                display: block;
                padding: .25rem 0;
                font-size: 1em;
                font-weight: 600;
                cursor: pointer;
                &:hover{
                    color: @purple;
                }
                &.router-link-active{
                    color: @purple;
                }
            }
        }
    }
</style>