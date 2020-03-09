<template>
    <div class="header">
        <div class="logo">Violet</div>
        <div class="menu">
            <ul>
                <router-link v-for="(item, i) in navList" :key="i" :to="item.name" tag="li">{{item.title}}</router-link>
            </ul>
        </div>
    </div>
</template>

<script>
export default {
    // name: 'Header',
    data() {
        return {
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
    }
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
            width: 8rem;
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