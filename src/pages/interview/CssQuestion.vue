<template>
    <ul v-if="interviewQuestionCss && interviewQuestionCss.length > 0" class="interview-question">
        <li v-for="item in interviewQuestionCss" :key="item.id">
            <p v-if="item.question" class="question"><span>{{ item.id }}、</span>{{ item.question }}</p>
            <p v-if="item.answer && item.answer.length > 0 && item.answer[0] != ''" class="answer"><span v-for="(val, m) in item.answer" :key="m">{{ val }}</span></p>
            <div v-if="item.code && item.code.length > 0 && item.code[0] != ''" class="code">
                <ul class="index"><li v-for="(num, i) in item.code" :key="i">{{ i+1 }}</li></ul>
                <code><span v-for="(val, m) in item.code" :key="m">{{ val }}</span></code>
            </div>
        </li>
    </ul>
</template>

<script>
import { mapState } from 'vuex';

export default {
    data() {
        return {
            
        }
    },
    computed: {
        ...mapState(['interviewQuestionCss'])
    },
}
</script>

<style lang="less" scoped>
    
</style>