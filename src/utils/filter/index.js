const Filters = {};

Filters.install = function(Vue) {
    Vue.use(require('./codeFilter').default)
        // .use(require('./textAnswerFilter').default);
}

export default Filters;