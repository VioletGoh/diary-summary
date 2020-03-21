import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        interviewQuestionData: {}
    },
    mutations: {
        // get the interview question datas
        mutationInterviewData(state, data) {
            state.interviewQuestionData = data;
            // console.log(state.interviewQuestionData);
        }
    },
    actions: {

    },
    modules: {}
});