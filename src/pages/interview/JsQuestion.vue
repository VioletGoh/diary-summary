<template>
    <!-- <div> -->
        <ul v-if="list" class="list">
            <li v-for="(item, i) in list" :key="i">
                <p v-if="item.question" class="question"><span>{{ item.id }}、</span>{{ item.question }}</p>
                <p v-if="item.answer && item.answer.length > 0" class="answer"><span v-for="(val, m) in item.answer" :key="m">{{ val }}</span></p>
                <p v-if="item.code && item.code.length > 0" class="code"><span v-for="(val, m) in item.code" :key="m">{{ val }}</span></p>
            </li>
        </ul>
    <!-- </div> -->
</template>

<script>
import { mapState } from 'vuex';
import { handleArray } from '@/common/handleArray';

export default {
    data() {
        return {
            list: [],
            isShow: true
        }
    },
    mounted() {
        this.getData();
    },
    computed: {
        ...mapState(['interviewQuestionData'])
    },
    methods: {
        getData() {
            for(let key in this.interviewQuestionData) {
                // console.log(key);
                // console.log(this.interviewQuestionData[key]);
                if(key == 'Js') {
                    console.log(this.interviewQuestionData[key]);
                    this.list = handleArray(this.interviewQuestionData[key]);
                }
            }
        },
        showAnswer(index) {
            this.isShow = !this.isShow;
            console.log(index);
        },
    }
}
</script>

<style lang="less" scoped>
    .list{
        p{
            // padding: .4rem 0;
        }
        .question{
            // font-weight: 600;
            padding: .4rem 0;
            cursor: pointer;
        }
        .answer, .code{
            // display: none;
            // font-weight: 200;
            padding: 0 .8rem;
            color: @purple;
            background-color: @bgColor;
            span{
                display: block;
                margin-bottom: .4rem;
                line-height: 1.25rem;
            }
        }
    }
</style>