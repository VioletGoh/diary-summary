import * as types from './mutations-types';
import { handleArray } from '@/common/handleArray';

const mutations = {
    // Get the interview question datas
    [types.SET_INTERVIEW](state, data) {
        for(let key in data) {
            switch (key) {
                case 'Js':
                    state.interviewQuestionJs = handleArray(data[key]);
                    break;
                case 'Vue':
                    state.interviewQuestionVue = handleArray(data[key]);
                    break;
                case 'Es6':
                    state.interviewQuestionEs6 = handleArray(data[key]);
                    break;
                default:
                    state.interviewQuestionCss = handleArray(data[key]);
                    break;
            }
        }
    }
}

export default mutations;