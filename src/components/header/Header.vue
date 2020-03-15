<template>
    <div class="header">
        <div class="logo">Violet</div>
        <div class="menu">
            <ul>
                <router-link
                    v-for="(item, i) in navList"
                    :key="i"
                    :to="{name: item.name}"
                    tag="li"
                >
                    {{item.title}}
                </router-link>
            </ul>
        </div>
    </div>
</template>

<script>
export default {
    // name: 'Header',
    data() {
        return {
            isSelected: 0,
            navList: [
                {
                    name: 'Home',
                    title: 'Html'
                },
                {
                    name: 'JsScript',
                    title: 'JS'
                },
                {
                    name: 'CssStyle',
                    title: 'Css'
                },
                {
                    name: 'Vues',
                    title: 'Vue'
                },
                {
                    name: 'MiniProgram',
                    title: 'MiniProgram'
                },
                {
                    name: 'Interview',
                    title: 'Interview'
                }
            ]
        }
    },
    computed: {
        // initIsSelected() {
        //     return this.isSelected === this.navList[0].title ? 'router-link-active' : '';
        // }
    },
    methods: {
        handleHeaderClick(index, event) {
            this.isSelected = index;
            console.log(event);
            // this.$router.push(`/${value.name}`);
        }
        // clickHeader(index, event) {
        //     console.log(index);
        //     this.isSelected = index;
        //     console.log(event.currentTarget);
        // }
    },
}
</script>

<style lang="less" scoeped>
    .header{
        display: flex;
        position: fixed;
        top: 0;
        width: 100%;
        height: 3rem;
        line-height: 3rem;
        font-size: .9rem;
        font-weight: 600;
        text-align: center;
        box-shadow: 0 3px 4px rgba(0, 0, 0, .03);
        z-index: 20;
        .logo{
            width: 20rem;
            font-size: 1.3rem;
        }
        .menu{
            flex: 1;
            ul{
                display: flex;
                li{
                    flex: 1;
                    cursor: pointer;
                    position: relative;
                    &::after{
                        content: '';
                        position: absolute;
                        left: 0;
                        right: 0;
                        bottom: 0;
                        height: 2px;
                        background-color: @white;
                    }
                    &:hover{
                        color: @purple;
                        &::after{
                            background-color: @purple;
                        }
                    }
                    &.router-link-active{
                        color: @purple;
                        &::after{
                            background-color: @purple;
                        }
                    }
                }
            }
        }
    }
</style>